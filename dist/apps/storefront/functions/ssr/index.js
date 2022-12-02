import { builder as S } from '@netlify/functions';
import { readFileSync as f } from 'fs';
import { createRequire as R } from 'module';
import { dirname as w, resolve as b } from 'path';
import { fileURLToPath as g } from 'url';
import { Script as T, createContext as v } from 'vm';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = ({ includeJSBuiltIns: n = !1, props: s = {} }) => {
    const o = /* @__PURE__ */ new WeakMap(),
      i = (t) => {
        let e = o.get(t);
        return e || o.set(t, (e = /* @__PURE__ */ new Map())), e;
      };
    class c {}
    class a extends c {
      constructor() {
        super(...arguments), (this._shadowRoot = null);
      }
      get attributes() {
        return Array.from(i(this)).map(([e, r]) => ({
          name: e,
          value: r,
        }));
      }
      get shadowRoot() {
        return this._shadowRoot;
      }
      setAttribute(e, r) {
        i(this).set(e, String(r));
      }
      removeAttribute(e) {
        i(this).delete(e);
      }
      hasAttribute(e) {
        return i(this).has(e);
      }
      attachShadow(e) {
        const r = { host: this };
        return e && e.mode === 'open' && (this._shadowRoot = r), r;
      }
      getAttribute(e) {
        const r = i(this).get(e);
        return r === void 0 ? null : r;
      }
    }
    class u {}
    class d {
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
    class m {
      replace() {}
    }
    class h {
      constructor() {
        this.__definitions = /* @__PURE__ */ new Map();
      }
      define(e, r) {
        var p;
        this.__definitions.set(e, {
          ctor: r,
          observedAttributes: (p = r.observedAttributes) != null ? p : [],
        });
      }
      get(e) {
        const r = this.__definitions.get(e);
        return r && r.ctor;
      }
    }
    const l = {
      Element: c,
      HTMLElement: a,
      Document: d,
      document: new d(),
      CSSStyleSheet: m,
      ShadowRoot: u,
      CustomElementRegistry: h,
      customElements: new h(),
      btoa(t) {
        return Buffer.from(t, 'binary').toString('base64');
      },
      location: new URL('http://localhost'),
      MutationObserver: class {
        observe() {}
      },
      requestAnimationFrame() {},
      window: void 0,
      ...s,
    };
    return (
      (l.window = l),
      n &&
        Object.assign(l, {
          setTimeout() {},
          clearTimeout() {},
          Buffer,
          URL,
          URLSearchParams,
          console: {
            log(...t) {
              console.log(...t);
            },
            info(...t) {
              console.info(...t);
            },
            warn(...t) {
              console.warn(...t);
            },
            debug(...t) {
              console.debug(...t);
            },
            error(...t) {
              console.error(...t);
            },
            assert(t, e) {
              if (!t) throw new Error(e);
            },
          },
        }),
      l
    );
  },
  _ = (n = {}) => {
    if (globalThis.window === void 0) {
      const s = y({ props: n });
      Object.assign(globalThis, s), (globalThis.window = globalThis);
    }
  };
_();
const A = (n) => {
    const {
        entry: s,
        root: o = import.meta.url,
        namespace: i = 'storefront',
      } = n,
      c = w(g(o)),
      a = y({
        includeJSBuiltIns: !0,
        props: {
          require: R(o),
          Event,
          process,
          exports: {},
        },
      });
    a.setTimeout = setTimeout;
    const u = new T(`
    ${f(b(c, s), 'utf8')};
    (() => ${i}.render)();
  `);
    return v(a), u.runInContext(a);
  },
  C = async (n, s) => {
    try {
      const {
          root: o = 'file:///var/task/dist/apps/storefront/functions/ssr/index.js',
          index: i = '../../client/index.html',
          component: c = '<root-app></root-app>',
          entry: a = '../../server/render.js',
        } = s,
        u = new URL(n.rawUrl),
        d = w(g(o)),
        m = f(b(d, i), 'utf8'),
        l = await A({
          root: o,
          entry: a,
        })({ route: u }),
        t = m.replace(c, l);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
          ...n.headers,
        },
        body: t,
      };
    } catch (o) {
      return (
        console.error(o),
        {
          statusCode: 500,
          body: JSON.stringify({ error: o }),
        }
      );
    }
  },
  P = S((n, s) =>
    C(n, {
      ...s,
      root: 'file:///var/task/dist/apps/storefront/functions/ssr/index.js',
      index: '../../client/index.html',
      entry: '../../server/render.js',
      component: '<root-app></root-app>',
    }),
  );
export { P as handler };
