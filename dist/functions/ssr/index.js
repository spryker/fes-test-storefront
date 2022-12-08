import { builder } from "@netlify/functions";
import fetch from "node-fetch";
import { readFileSync } from "fs";
import { createRequire } from "module";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { Script, createContext } from "vm";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const getWindow = ({ includeJSBuiltIns = false, props = {} }) => {
  const attributes = /* @__PURE__ */ new WeakMap();
  const attributesForElement = (element) => {
    let attrs = attributes.get(element);
    if (!attrs) {
      attributes.set(element, attrs = /* @__PURE__ */ new Map());
    }
    return attrs;
  };
  class Element {
  }
  class HTMLElement extends Element {
    constructor() {
      super(...arguments);
      this._shadowRoot = null;
    }
    get attributes() {
      return Array.from(attributesForElement(this)).map(([name, value]) => ({
        name,
        value
      }));
    }
    get shadowRoot() {
      return this._shadowRoot;
    }
    setAttribute(name, value) {
      attributesForElement(this).set(name, String(value));
    }
    removeAttribute(name) {
      attributesForElement(this).delete(name);
    }
    hasAttribute(name) {
      return attributesForElement(this).has(name);
    }
    attachShadow(init) {
      const shadowRoot = { host: this };
      if (init && init.mode === "open") {
        this._shadowRoot = shadowRoot;
      }
      return shadowRoot;
    }
    getAttribute(name) {
      const value = attributesForElement(this).get(name);
      return value === void 0 ? null : value;
    }
  }
  class ShadowRoot {
  }
  class Document {
    get adoptedStyleSheets() {
      return [];
    }
    createTreeWalker() {
      return {};
    }
    createTextNode() {
      return {};
    }
    createElement() {
      return {};
    }
  }
  class CSSStyleSheet {
    replace() {
    }
  }
  class CustomElementRegistry {
    constructor() {
      this.__definitions = /* @__PURE__ */ new Map();
    }
    define(name, ctor) {
      var _a;
      this.__definitions.set(name, {
        ctor,
        observedAttributes: (_a = ctor.observedAttributes) != null ? _a : []
      });
    }
    get(name) {
      const definition = this.__definitions.get(name);
      return definition && definition.ctor;
    }
  }
  const window = {
    Element,
    HTMLElement,
    Document,
    document: new Document(),
    CSSStyleSheet,
    ShadowRoot,
    CustomElementRegistry,
    customElements: new CustomElementRegistry(),
    btoa(s) {
      return Buffer.from(s, "binary").toString("base64");
    },
    fetch: (url, init) => fetch(url, init),
    location: new URL("http://localhost"),
    MutationObserver: class {
      observe() {
      }
    },
    requestAnimationFrame() {
    },
    window: void 0,
    ...props
  };
  window.window = window;
  if (includeJSBuiltIns) {
    Object.assign(window, {
      setTimeout() {
      },
      clearTimeout() {
      },
      Buffer,
      URL,
      URLSearchParams,
      console: {
        log(...args) {
          console.log(...args);
        },
        info(...args) {
          console.info(...args);
        },
        warn(...args) {
          console.warn(...args);
        },
        debug(...args) {
          console.debug(...args);
        },
        error(...args) {
          console.error(...args);
        },
        assert(bool, msg) {
          if (!bool) {
            throw new Error(msg);
          }
        }
      }
    });
  }
  return window;
};
const installWindowOnGlobal = (props = {}) => {
  if (globalThis.window === void 0) {
    const window = getWindow({ props });
    Object.assign(globalThis, window);
    globalThis.window = globalThis;
  }
};
installWindowOnGlobal();
const serverContext = (options) => {
  const { entry, root = import.meta.url, namespace = "storefront" } = options;
  const basePath = dirname(fileURLToPath(root));
  const window = getWindow({
    includeJSBuiltIns: true,
    props: {
      require: createRequire(root),
      Event,
      process,
      exports: {}
    }
  });
  window.setTimeout = setTimeout;
  const script = new Script(`
    ${readFileSync(resolve(basePath, entry), "utf8")};
    (() => ${namespace}.render)();
  `);
  createContext(window);
  return script.runInContext(window);
};
const storefrontHandler = async (event, context) => {
  try {
    const { root = "file:///var/task/dist/apps/storefront/functions/ssr/index.js", index = "../../client/index.html", component = "<root-app></root-app>", entry = "../../server/render.js" } = context;
    const originalUrl = new URL(event.rawUrl);
    const basePath = dirname(fileURLToPath(root));
    const template = readFileSync(resolve(basePath, index), "utf8");
    const render = serverContext({
      root,
      entry
    });
    const appHtml = await render({ route: originalUrl });
    const html = template.replace(component, appHtml);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
        ...event.headers
      },
      body: html
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e })
    };
  }
};
const handler = builder(
  (event, context) => storefrontHandler(event, {
    ...context,
    root: "file:///var/task/dist/functions/ssr/index.js",
    index: "../../client/index.html",
    entry: "../../server/render.js",
    component: "<root-app></root-app>"
  })
);
export {
  handler
};
