/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t, i, s, e) {
  var n,
    o = arguments.length,
    r =
      o < 3 ? i : null === e ? (e = Object.getOwnPropertyDescriptor(i, s)) : e;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    r = Reflect.decorate(t, i, s, e);
  else
    for (var h = t.length - 1; h >= 0; h--)
      (n = t[h]) && (r = (o < 3 ? n(r) : o > 3 ? n(i, s, r) : n(i, s)) || r);
  return o > 3 && r && Object.defineProperty(i, s, r), r;
}
function i(t, i) {
  if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
    return Reflect.metadata(t, i);
}
let s;
function e(
  t = (function () {
    var t;
    return null !== (t = globalThis.document) && void 0 !== t ? t : globalThis;
  })(),
) {
  const i = (function (t = '_injectorsRegistry') {
    return s || (s = globalThis[t] ? globalThis[t] : new WeakMap()), s;
  })();
  for (; t; ) {
    if (i.has(t)) return s.get(t);
    t = t.parentNode;
  }
  throw new Error('No injector found!');
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const n =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  o = Symbol(),
  r = new Map();
class h {
  constructor(t, i) {
    if (((this._$cssResult$ = !0), i !== o))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = r.get(this.cssText);
    return (
      n &&
        void 0 === t &&
        (r.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const l = n
  ? (t) => t
  : (t) =>
      t instanceof CSSStyleSheet
        ? ((t) => {
            let i = '';
            for (const s of t.cssRules) i += s.cssText;
            return ((t) => new h('string' == typeof t ? t : t + '', o))(i);
          })(t)
        : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var c;
const a = window.trustedTypes,
  u = a ? a.emptyScript : '',
  d = window.reactiveElementPolyfillSupport,
  v = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? u : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    },
  },
  f = (t, i) => i !== t && (i == i || t == t),
  p = { attribute: !0, type: String, converter: v, reflect: !1, hasChanged: f };
class g extends HTMLElement {
  constructor() {
    super(),
      (this._$Et = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Ei = null),
      this.o();
  }
  static addInitializer(t) {
    var i;
    (null !== (i = this.l) && void 0 !== i) || (this.l = []), this.l.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((i, s) => {
        const e = this._$Eh(s, i);
        void 0 !== e && (this._$Eu.set(e, s), t.push(e));
      }),
      t
    );
  }
  static createProperty(t, i = p) {
    if (
      (i.state && (i.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, i),
      !i.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const s = 'symbol' == typeof t ? Symbol() : '__' + t,
        e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const n = this[t];
        (this[i] = e), this.requestUpdate(t, n, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || p;
  }
  static finalize() {
    if (this.hasOwnProperty('finalized')) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Eu = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const t = this.properties,
        i = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const s of i) this.createProperty(s, t[s]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const t of s) i.unshift(l(t));
    } else void 0 !== t && i.push(l(t));
    return i;
  }
  static _$Eh(t, i) {
    const s = i.attribute;
    return !1 === s
      ? void 0
      : 'string' == typeof s
      ? s
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  o() {
    var t;
    (this._$Ep = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Em(),
      this.requestUpdate(),
      null === (t = this.constructor.l) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this._$Eg) && void 0 !== i ? i : (this._$Eg = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$Eg) ||
      void 0 === i ||
      i.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const i =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, i) => {
        n
          ? (t.adoptedStyleSheets = i.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : i.forEach((i) => {
              const s = document.createElement('style'),
                e = window.litNonce;
              void 0 !== e && s.setAttribute('nonce', e),
                (s.textContent = i.cssText),
                t.appendChild(s);
            });
      })(i, this.constructor.elementStyles),
      i
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$Eg) ||
        void 0 === t ||
        t.forEach((t) => {
          var i;
          return null === (i = t.hostConnected) || void 0 === i
            ? void 0
            : i.call(t);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$Eg) ||
      void 0 === t ||
      t.forEach((t) => {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i
          ? void 0
          : i.call(t);
      });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$ES(t, i, s = p) {
    var e, n;
    const o = this.constructor._$Eh(t, s);
    if (void 0 !== o && !0 === s.reflect) {
      const r = (
        null !==
          (n =
            null === (e = s.converter) || void 0 === e
              ? void 0
              : e.toAttribute) && void 0 !== n
          ? n
          : v.toAttribute
      )(i, s.type);
      (this._$Ei = t),
        null == r ? this.removeAttribute(o) : this.setAttribute(o, r),
        (this._$Ei = null);
    }
  }
  _$AK(t, i) {
    var s, e, n;
    const o = this.constructor,
      r = o._$Eu.get(t);
    if (void 0 !== r && this._$Ei !== r) {
      const t = o.getPropertyOptions(r),
        h = t.converter,
        l =
          null !==
            (n =
              null !==
                (e =
                  null === (s = h) || void 0 === s
                    ? void 0
                    : s.fromAttribute) && void 0 !== e
                ? e
                : 'function' == typeof h
                ? h
                : null) && void 0 !== n
            ? n
            : v.fromAttribute;
      (this._$Ei = r), (this[r] = l(i, t.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t &&
      (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || f)(
        this[t],
        i,
      )
        ? (this._$AL.has(t) || this._$AL.set(t, i),
          !0 === s.reflect &&
            this._$Ei !== t &&
            (void 0 === this._$E_ && (this._$E_ = new Map()),
            this._$E_.set(t, s)))
        : (e = !1)),
      !this.isUpdatePending && e && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = !0;
    try {
      await this._$Ep;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Et &&
        (this._$Et.forEach((t, i) => (this[i] = t)), (this._$Et = void 0));
    let i = !1;
    const s = this._$AL;
    try {
      (i = this.shouldUpdate(s)),
        i
          ? (this.willUpdate(s),
            null === (t = this._$Eg) ||
              void 0 === t ||
              t.forEach((t) => {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i
                  ? void 0
                  : i.call(t);
              }),
            this.update(s))
          : this._$EU();
    } catch (t) {
      throw ((i = !1), this._$EU(), t);
    }
    i && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$Eg) ||
      void 0 === i ||
      i.forEach((t) => {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i
          ? void 0
          : i.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$E_ &&
      (this._$E_.forEach((t, i) => this._$ES(i, this[i], t)),
      (this._$E_ = void 0)),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;
(g.finalized = !0),
  (g.elementProperties = new Map()),
  (g.elementStyles = []),
  (g.shadowRootOptions = { mode: 'open' }),
  null == d || d({ ReactiveElement: g }),
  (null !== (c = globalThis.reactiveElementVersions) && void 0 !== c
    ? c
    : (globalThis.reactiveElementVersions = [])
  ).push('1.1.1');
const y = globalThis.trustedTypes,
  w = y ? y.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  m = `lit$${(Math.random() + '').slice(9)}$`,
  $ = '?' + m,
  S = `<${$}>`,
  A = document,
  C = (t = '') => A.createComment(t),
  _ = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  x = Array.isArray,
  E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  k = /-->/g,
  T = />/g,
  j =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  R = /'/g,
  U = /"/g,
  M = /^(?:script|style|textarea)$/i,
  O = (
    (t) =>
    (i, ...s) => ({ _$litType$: t, strings: i, values: s })
  )(1),
  z = Symbol.for('lit-noChange'),
  N = Symbol.for('lit-nothing'),
  I = new WeakMap(),
  P = A.createTreeWalker(A, 129, null, !1),
  L = (t, i) => {
    const s = t.length - 1,
      e = [];
    let n,
      o = 2 === i ? '<svg>' : '',
      r = E;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let h,
        l,
        c = -1,
        a = 0;
      for (; a < s.length && ((r.lastIndex = a), (l = r.exec(s)), null !== l); )
        (a = r.lastIndex),
          r === E
            ? '!--' === l[1]
              ? (r = k)
              : void 0 !== l[1]
              ? (r = T)
              : void 0 !== l[2]
              ? (M.test(l[2]) && (n = RegExp('</' + l[2], 'g')), (r = j))
              : void 0 !== l[3] && (r = j)
            : r === j
            ? '>' === l[0]
              ? ((r = null != n ? n : E), (c = -1))
              : void 0 === l[1]
              ? (c = -2)
              : ((c = r.lastIndex - l[2].length),
                (h = l[1]),
                (r = void 0 === l[3] ? j : '"' === l[3] ? U : R))
            : r === U || r === R
            ? (r = j)
            : r === k || r === T
            ? (r = E)
            : ((r = j), (n = void 0));
      const u = r === j && t[i + 1].startsWith('/>') ? ' ' : '';
      o +=
        r === E
          ? s + S
          : c >= 0
          ? (e.push(h), s.slice(0, c) + '$lit$' + s.slice(c) + m + u)
          : s + m + (-2 === c ? (e.push(void 0), i) : u);
    }
    const h = o + (t[s] || '<?>') + (2 === i ? '</svg>' : '');
    if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
      throw Error('invalid template strings array');
    return [void 0 !== w ? w.createHTML(h) : h, e];
  };
class B {
  constructor({ strings: t, _$litType$: i }, s) {
    let e;
    this.parts = [];
    let n = 0,
      o = 0;
    const r = t.length - 1,
      h = this.parts,
      [l, c] = L(t, i);
    if (
      ((this.el = B.createElement(l, s)),
      (P.currentNode = this.el.content),
      2 === i)
    ) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (e = P.nextNode()) && h.length < r; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];
          for (const i of e.getAttributeNames())
            if (i.endsWith('$lit$') || i.startsWith(m)) {
              const s = c[o++];
              if ((t.push(i), void 0 !== s)) {
                const t = e.getAttribute(s.toLowerCase() + '$lit$').split(m),
                  i = /([.?@])?(.*)/.exec(s);
                h.push({
                  type: 1,
                  index: n,
                  name: i[2],
                  strings: t,
                  ctor:
                    '.' === i[1] ? W : '?' === i[1] ? q : '@' === i[1] ? F : K,
                });
              } else h.push({ type: 6, index: n });
            }
          for (const i of t) e.removeAttribute(i);
        }
        if (M.test(e.tagName)) {
          const t = e.textContent.split(m),
            i = t.length - 1;
          if (i > 0) {
            e.textContent = y ? y.emptyScript : '';
            for (let s = 0; s < i; s++)
              e.append(t[s], C()),
                P.nextNode(),
                h.push({ type: 2, index: ++n });
            e.append(t[i], C());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === $) h.push({ type: 2, index: n });
        else {
          let t = -1;
          for (; -1 !== (t = e.data.indexOf(m, t + 1)); )
            h.push({ type: 7, index: n }), (t += m.length - 1);
        }
      n++;
    }
  }
  static createElement(t, i) {
    const s = A.createElement('template');
    return (s.innerHTML = t), s;
  }
}
function D(t, i, s = t, e) {
  var n, o, r, h;
  if (i === z) return i;
  let l =
    void 0 !== e
      ? null === (n = s._$Cl) || void 0 === n
        ? void 0
        : n[e]
      : s._$Cu;
  const c = _(i) ? void 0 : i._$litDirective$;
  return (
    (null == l ? void 0 : l.constructor) !== c &&
      (null === (o = null == l ? void 0 : l._$AO) ||
        void 0 === o ||
        o.call(l, !1),
      void 0 === c ? (l = void 0) : ((l = new c(t)), l._$AT(t, s, e)),
      void 0 !== e
        ? ((null !== (r = (h = s)._$Cl) && void 0 !== r ? r : (h._$Cl = []))[
            e
          ] = l)
        : (s._$Cu = l)),
    void 0 !== l && (i = D(t, l._$AS(t, i.values), l, e)),
    i
  );
}
class H {
  constructor(t, i) {
    (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var i;
    const {
        el: { content: s },
        parts: e,
      } = this._$AD,
      n = (
        null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i
          ? i
          : A
      ).importNode(s, !0);
    P.currentNode = n;
    let o = P.nextNode(),
      r = 0,
      h = 0,
      l = e[0];
    for (; void 0 !== l; ) {
      if (r === l.index) {
        let i;
        2 === l.type
          ? (i = new J(o, o.nextSibling, this, t))
          : 1 === l.type
          ? (i = new l.ctor(o, l.name, l.strings, this, t))
          : 6 === l.type && (i = new V(o, this, t)),
          this.v.push(i),
          (l = e[++h]);
      }
      r !== (null == l ? void 0 : l.index) && ((o = P.nextNode()), r++);
    }
    return n;
  }
  m(t) {
    let i = 0;
    for (const s of this.v)
      void 0 !== s &&
        (void 0 !== s.strings
          ? (s._$AI(t, s, i), (i += s.strings.length - 2))
          : s._$AI(t[i])),
        i++;
  }
}
class J {
  constructor(t, i, s, e) {
    var n;
    (this.type = 2),
      (this._$AH = N),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = i),
      (this._$AM = s),
      (this.options = e),
      (this._$Cg =
        null === (n = null == e ? void 0 : e.isConnected) || void 0 === n || n);
  }
  get _$AU() {
    var t, i;
    return null !==
      (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== i
      ? i
      : this._$Cg;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    (t = D(this, t, i)),
      _(t)
        ? t === N || null == t || '' === t
          ? (this._$AH !== N && this._$AR(), (this._$AH = N))
          : t !== this._$AH && t !== z && this.$(t)
        : void 0 !== t._$litType$
        ? this.T(t)
        : void 0 !== t.nodeType
        ? this.S(t)
        : ((t) => {
            var i;
            return (
              x(t) ||
              'function' ==
                typeof (null === (i = t) || void 0 === i
                  ? void 0
                  : i[Symbol.iterator])
            );
          })(t)
        ? this.A(t)
        : this.$(t);
  }
  M(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }
  S(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.M(t)));
  }
  $(t) {
    this._$AH !== N && _(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(A.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var i;
    const { values: s, _$litType$: e } = t,
      n =
        'number' == typeof e
          ? this._$AC(t)
          : (void 0 === e.el && (e.el = B.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === n)
      this._$AH.m(s);
    else {
      const t = new H(n, this),
        i = t.p(this.options);
      t.m(s), this.S(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let i = I.get(t.strings);
    return void 0 === i && I.set(t.strings, (i = new B(t))), i;
  }
  A(t) {
    x(this._$AH) || ((this._$AH = []), this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const n of t)
      e === i.length
        ? i.push((s = new J(this.M(C()), this.M(C()), this, this.options)))
        : (s = i[e]),
        s._$AI(n),
        e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for (
      null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var i;
    void 0 === this._$AM &&
      ((this._$Cg = t),
      null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
class K {
  constructor(t, i, s, e, n) {
    (this.type = 1),
      (this._$AH = N),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = i),
      (this._$AM = e),
      (this.options = n),
      s.length > 2 || '' !== s[0] || '' !== s[1]
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = N);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, e) {
    const n = this.strings;
    let o = !1;
    if (void 0 === n)
      (t = D(this, t, i, 0)),
        (o = !_(t) || (t !== this._$AH && t !== z)),
        o && (this._$AH = t);
    else {
      const e = t;
      let r, h;
      for (t = n[0], r = 0; r < n.length - 1; r++)
        (h = D(this, e[s + r], i, r)),
          h === z && (h = this._$AH[r]),
          o || (o = !_(h) || h !== this._$AH[r]),
          h === N ? (t = N) : t !== N && (t += (null != h ? h : '') + n[r + 1]),
          (this._$AH[r] = h);
    }
    o && !e && this.k(t);
  }
  k(t) {
    t === N
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class W extends K {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === N ? void 0 : t;
  }
}
const Z = y ? y.emptyScript : '';
class q extends K {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== N
      ? this.element.setAttribute(this.name, Z)
      : this.element.removeAttribute(this.name);
  }
}
class F extends K {
  constructor(t, i, s, e, n) {
    super(t, i, s, e, n), (this.type = 5);
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = D(this, t, i, 0)) && void 0 !== s ? s : N) === z)
      return;
    const e = this._$AH,
      n =
        (t === N && e !== N) ||
        t.capture !== e.capture ||
        t.once !== e.once ||
        t.passive !== e.passive,
      o = t !== N && (e === N || n);
    n && this.element.removeEventListener(this.name, this, e),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var i, s;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (s =
              null === (i = this.options) || void 0 === i ? void 0 : i.host) &&
            void 0 !== s
            ? s
            : this.element,
          t,
        )
      : this._$AH.handleEvent(t);
  }
}
class V {
  constructor(t, i, s) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i),
      (this.options = s);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    D(this, t);
  }
}
const G = window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q, X;
null == G || G(B, J),
  (null !== (b = globalThis.litHtmlVersions) && void 0 !== b
    ? b
    : (globalThis.litHtmlVersions = [])
  ).push('2.1.1');
class Y extends g {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, i;
    const s = super.createRenderRoot();
    return (
      (null !== (t = (i = this.renderOptions).renderBefore) && void 0 !== t) ||
        (i.renderBefore = s.firstChild),
      s
    );
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = ((t, i, s) => {
        var e, n;
        const o =
          null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e
            ? e
            : i;
        let r = o._$litPart$;
        if (void 0 === r) {
          const t =
            null !== (n = null == s ? void 0 : s.renderBefore) && void 0 !== n
              ? n
              : null;
          o._$litPart$ = r = new J(
            i.insertBefore(C(), t),
            t,
            void 0,
            null != s ? s : {},
          );
        }
        return r._$AI(t), r;
      })(i, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return z;
  }
}
(Y.finalized = !0),
  (Y._$litElement$ = !0),
  null === (Q = globalThis.litElementHydrateSupport) ||
    void 0 === Q ||
    Q.call(globalThis, { LitElement: Y });
const tt = globalThis.litElementPolyfillSupport;
null == tt || tt({ LitElement: Y }),
  (null !== (X = globalThis.litElementVersions) && void 0 !== X
    ? X
    : (globalThis.litElementVersions = [])
  ).push('3.1.1');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = (t, i) =>
  'method' === i.kind && i.descriptor && !('value' in i.descriptor)
    ? {
        ...i,
        finisher(s) {
          s.createProperty(i.key, t);
        },
      }
    : {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {},
        originalKey: i.key,
        initializer() {
          'function' == typeof i.initializer &&
            (this[i.key] = i.initializer.call(this));
        },
        finisher(s) {
          s.createProperty(i.key, t);
        },
      };
function st(t) {
  return (i, s) =>
    void 0 !== s
      ? ((t, i, s) => {
          i.constructor.createProperty(s, t);
        })(t, i, s)
      : it(t, i);
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
const et = (t) => (null != t ? t : N);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const nt = ((t, ...i) => {
  const s =
    1 === t.length
      ? t[0]
      : i.reduce(
          (i, s, e) =>
            i +
            ((t) => {
              if (!0 === t._$cssResult$) return t.cssText;
              if ('number' == typeof t) return t;
              throw Error(
                "Value passed to 'css' function must be a 'css' function result: " +
                  t +
                  ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
              );
            })(s) +
            t[e + 1],
          t[0],
        );
  return new h(s, o);
})`
  :host {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    color: white;
  }

  a {
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  :host(:hover) img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0 5.5rem;
  }

  h1 {
    font-size: 3.125rem;
    line-height: 3rem;
    font-weight: 500;
    margin-bottom: 1.6875rem;
    margin-top: 0;
  }

  h2 {
    font-size: 1.375rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin: 0;
  }
`;
class ot extends Y {
  connectedCallback() {
    if (!this.content)
      try {
        (this.experienceContent = e().inject('FES.Experience')),
          this.uid &&
            (this.contentSubscription = this.experienceContent
              .getContent({ key: this.uid })
              .subscribe((t) => {
                t.data && (this.content = Object.assign({}, t.data));
              }));
      } catch (t) {
        console.error(t);
      }
    super.connectedCallback();
  }
  disconnectedCallback() {
    var t;
    null === (t = this.contentSubscription) || void 0 === t || t.unsubscribe(),
      super.disconnectedCallback();
  }
  render() {
    var t, i, s;
    if (!this.content) return O``;
    const e = O`
      <img
        src=${et(this.content.image)}
        alt=${et(this.content.alt)}
      />
      <div class="overlay">
        <h1 aria-label="title">${
          null === (t = this.content) || void 0 === t ? void 0 : t.title
        }</h1>
        <h2>${
          null === (i = this.content) || void 0 === i ? void 0 : i.content
        }</h2>
      </div>
    `;
    return O`
      ${(function (t, i, s) {
        return t ? i() : null == s ? void 0 : s();
      })(
        null === (s = this.content) || void 0 === s ? void 0 : s.link,
        () => {
          var t, i;
          return O`<a
          href=${et(
            null === (t = this.content) || void 0 === t ? void 0 : t.link,
          )}
          target=${et(
            null === (i = this.content) || void 0 === i ? void 0 : i.urlTarget,
          )}
        >
          ${e}
        </a>`;
        },
        () => O`${e}`,
      )}
    `;
  }
}
(ot.styles = nt),
  t([st(), i('design:type', String)], ot.prototype, 'uid', void 0),
  t(
    [st({ type: Object }), i('design:type', Object)],
    ot.prototype,
    'content',
    void 0,
  ),
  customElements.get('oryx-banner') || customElements.define('oryx-banner', ot);
export { ot as BannerComponent, nt as styles };
