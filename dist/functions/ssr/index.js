import { builder as w } from '@netlify/functions';
import { readdirSync as b } from 'fs';
import 'module';
import { dirname as g, resolve as y } from 'path';
import { fileURLToPath as S } from 'url';
import 'vm';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = ({ includeJSBuiltIns: s = !1, props: n = {} }) => {
    const a = /* @__PURE__ */ new WeakMap(),
      r = (t) => {
        let e = a.get(t);
        return e || a.set(t, (e = /* @__PURE__ */ new Map())), e;
      };
    class i {}
    class h extends i {
      constructor() {
        super(...arguments), (this._shadowRoot = null);
      }
      get attributes() {
        return Array.from(r(this)).map(([e, o]) => ({
          name: e,
          value: o,
        }));
      }
      get shadowRoot() {
        return this._shadowRoot;
      }
      setAttribute(e, o) {
        r(this).set(e, String(o));
      }
      removeAttribute(e) {
        r(this).delete(e);
      }
      hasAttribute(e) {
        return r(this).has(e);
      }
      attachShadow(e) {
        const o = { host: this };
        return e && e.mode === 'open' && (this._shadowRoot = o), o;
      }
      getAttribute(e) {
        const o = r(this).get(e);
        return o === void 0 ? null : o;
      }
    }
    class m {}
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
    class u {
      replace() {}
    }
    class l {
      constructor() {
        this.__definitions = /* @__PURE__ */ new Map();
      }
      define(e, o) {
        var f;
        this.__definitions.set(e, {
          ctor: o,
          observedAttributes: (f = o.observedAttributes) != null ? f : [],
        });
      }
      get(e) {
        const o = this.__definitions.get(e);
        return o && o.ctor;
      }
    }
    const c = {
      Element: i,
      HTMLElement: h,
      Document: d,
      document: new d(),
      CSSStyleSheet: u,
      ShadowRoot: m,
      CustomElementRegistry: l,
      customElements: new l(),
      btoa(t) {
        return Buffer.from(t, 'binary').toString('base64');
      },
      location: new URL('http://localhost'),
      MutationObserver: class {
        observe() {}
      },
      requestAnimationFrame() {},
      window: void 0,
      ...n,
    };
    return (
      (c.window = c),
      s &&
        Object.assign(c, {
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
      c
    );
  },
  T = (s = {}) => {
    if (globalThis.window === void 0) {
      const n = R({ props: s });
      Object.assign(globalThis, n), (globalThis.window = globalThis);
    }
  };
T();
const v = async (s, n) => {
    const a = (r) =>
      b(r, { withFileTypes: !0 })
        .filter((i) => i.isDirectory())
        .map((i) => i.name)
        .join(',');
    try {
      const {
          root: r = 'file:///var/task/dist/apps/storefront/functions/ssr/index.js',
          index: i = '../../client/index.html',
          component: h = '<root-app></root-app>',
          entry: m = '../../server/render.js',
        } = n,
        d = new URL(s.rawUrl),
        u = g(S(r)),
        l = a(y(u, '../'));
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
          ...s.headers,
        },
        body: l,
      };
    } catch (r) {
      return (
        console.error(r),
        {
          statusCode: 500,
          body: JSON.stringify({ error: r }),
        }
      );
    }
  },
  C = w((s, n) =>
    v(s, {
      ...n,
      root: 'file:///var/task/dist/functions/ssr/index.js',
      index: '../../client/index.html',
      entry: '../../server/render.js',
      component: '<root-app></root-app>',
    }),
  );
export { C as handler };
