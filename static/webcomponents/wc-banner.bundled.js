/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  i = Symbol(),
  n = new Map();
class e {
  constructor(t, n) {
    if (((this._$cssResult$ = !0), n !== i))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    this.cssText = t;
  }
  get styleSheet() {
    let i = n.get(this.cssText);
    return (
      t &&
        void 0 === i &&
        (n.set(this.cssText, (i = new CSSStyleSheet())),
        i.replaceSync(this.cssText)),
      i
    );
  }
  toString() {
    return this.cssText;
  }
}
const r = t
  ? (t) => t
  : (t) =>
      t instanceof CSSStyleSheet
        ? ((t) => {
            let n = '';
            for (const i of t.cssRules) n += i.cssText;
            return ((t) => new e('string' == typeof t ? t : t + '', i))(n);
          })(t)
        : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const o = window.reactiveElementPolyfillSupport,
  l = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? '' : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let n = t;
      switch (i) {
        case Boolean:
          n = null !== t;
          break;
        case Number:
          n = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(t);
          } catch (t) {
            n = null;
          }
      }
      return n;
    },
  },
  u = (t, i) => i !== t && (i == i || t == t),
  h = { attribute: !0, type: String, converter: l, reflect: !1, hasChanged: u };
class c extends HTMLElement {
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
      this.elementProperties.forEach((i, n) => {
        const e = this._$Eh(n, i);
        void 0 !== e && (this._$Eu.set(e, n), t.push(e));
      }),
      t
    );
  }
  static createProperty(t, i = h) {
    if (
      (i.state && (i.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, i),
      !i.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const n = 'symbol' == typeof t ? Symbol() : '__' + t,
        e = this.getPropertyDescriptor(t, n, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, n) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const r = this[t];
        (this[i] = e), this.requestUpdate(t, r, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || h;
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
      for (const n of i) this.createProperty(n, t[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const t of n) i.unshift(r(t));
    } else void 0 !== t && i.push(r(t));
    return i;
  }
  static _$Eh(t, i) {
    const n = i.attribute;
    return !1 === n
      ? void 0
      : 'string' == typeof n
      ? n
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  o() {
    var t;
    (this._$Ev = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Ep(),
      this.requestUpdate(),
      null === (t = this.constructor.l) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var i, n;
    (null !== (i = this._$Em) && void 0 !== i ? i : (this._$Em = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (n = t.hostConnected) || void 0 === n || n.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$Em) ||
      void 0 === i ||
      i.splice(this._$Em.indexOf(t) >>> 0, 1);
  }
  _$Ep() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var i;
    const n =
      null !== (i = this.shadowRoot) && void 0 !== i
        ? i
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((i, n) => {
        t
          ? (i.adoptedStyleSheets = n.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : n.forEach((t) => {
              const n = document.createElement('style'),
                e = window.litNonce;
              void 0 !== e && n.setAttribute('nonce', e),
                (n.textContent = t.cssText),
                i.appendChild(n);
            });
      })(n, this.constructor.elementStyles),
      n
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$Em) ||
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
    null === (t = this._$Em) ||
      void 0 === t ||
      t.forEach((t) => {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i
          ? void 0
          : i.call(t);
      });
  }
  attributeChangedCallback(t, i, n) {
    this._$AK(t, n);
  }
  _$Eg(t, i, n = h) {
    var e, r;
    const s = this.constructor._$Eh(t, n);
    if (void 0 !== s && !0 === n.reflect) {
      const o = (null !==
        (r =
          null === (e = n.converter) || void 0 === e
            ? void 0
            : e.toAttribute) && void 0 !== r
        ? r
        : l.toAttribute)(i, n.type);
      (this._$Ei = t),
        null == o ? this.removeAttribute(s) : this.setAttribute(s, o),
        (this._$Ei = null);
    }
  }
  _$AK(t, i) {
    var n, e, r;
    const s = this.constructor,
      o = s._$Eu.get(t);
    if (void 0 !== o && this._$Ei !== o) {
      const t = s.getPropertyOptions(o),
        u = t.converter,
        h =
          null !==
            (r =
              null !==
                (e =
                  null === (n = u) || void 0 === n
                    ? void 0
                    : n.fromAttribute) && void 0 !== e
                ? e
                : 'function' == typeof u
                ? u
                : null) && void 0 !== r
            ? r
            : l.fromAttribute;
      (this._$Ei = o), (this[o] = h(i, t.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, i, n) {
    let e = !0;
    void 0 !== t &&
      (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || u)(
        this[t],
        i,
      )
        ? (this._$AL.has(t) || this._$AL.set(t, i),
          !0 === n.reflect &&
            this._$Ei !== t &&
            (void 0 === this._$ES && (this._$ES = new Map()),
            this._$ES.set(t, n)))
        : (e = !1)),
      !this.isUpdatePending && e && (this._$Ev = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = !0;
    try {
      await this._$Ev;
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
    const n = this._$AL;
    try {
      (i = this.shouldUpdate(n)),
        i
          ? (this.willUpdate(n),
            null === (t = this._$Em) ||
              void 0 === t ||
              t.forEach((t) => {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i
                  ? void 0
                  : i.call(t);
              }),
            this.update(n))
          : this._$EU();
    } catch (t) {
      throw ((i = !1), this._$EU(), t);
    }
    i && this._$AE(n);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$Em) ||
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
    return this._$Ev;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$ES &&
      (this._$ES.forEach((t, i) => this._$Eg(i, this[i], t)),
      (this._$ES = void 0)),
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
var a;
(c.finalized = !0),
  (c.elementProperties = new Map()),
  (c.elementStyles = []),
  (c.shadowRootOptions = { mode: 'open' }),
  null == o || o({ ReactiveElement: c }),
  (null !== (s = globalThis.reactiveElementVersions) && void 0 !== s
    ? s
    : (globalThis.reactiveElementVersions = [])
  ).push('1.0.1');
const d = globalThis.trustedTypes,
  v = d ? d.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  f = `lit$${(Math.random() + '').slice(9)}$`,
  p = '?' + f,
  b = `<${p}>`,
  y = document,
  g = (t = '') => y.createComment(t),
  w = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  S = Array.isArray,
  m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  O = /-->/g,
  _ = />/g,
  j = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  C = /'/g,
  T = /"/g,
  k = /^(?:script|style|textarea)$/i,
  A = ((t) => (i, ...n) => ({ _$litType$: t, strings: i, values: n }))(1),
  $ = Symbol.for('lit-noChange'),
  M = Symbol.for('lit-nothing'),
  E = new WeakMap(),
  L = y.createTreeWalker(y, 129, null, !1),
  x = (t, i) => {
    const n = t.length - 1,
      e = [];
    let r,
      s = 2 === i ? '<svg>' : '',
      o = m;
    for (let i = 0; i < n; i++) {
      const n = t[i];
      let l,
        u,
        h = -1,
        c = 0;
      for (; c < n.length && ((o.lastIndex = c), (u = o.exec(n)), null !== u); )
        (c = o.lastIndex),
          o === m
            ? '!--' === u[1]
              ? (o = O)
              : void 0 !== u[1]
              ? (o = _)
              : void 0 !== u[2]
              ? (k.test(u[2]) && (r = RegExp('</' + u[2], 'g')), (o = j))
              : void 0 !== u[3] && (o = j)
            : o === j
            ? '>' === u[0]
              ? ((o = null != r ? r : m), (h = -1))
              : void 0 === u[1]
              ? (h = -2)
              : ((h = o.lastIndex - u[2].length),
                (l = u[1]),
                (o = void 0 === u[3] ? j : '"' === u[3] ? T : C))
            : o === T || o === C
            ? (o = j)
            : o === O || o === _
            ? (o = m)
            : ((o = j), (r = void 0));
      const a = o === j && t[i + 1].startsWith('/>') ? ' ' : '';
      s +=
        o === m
          ? n + b
          : h >= 0
          ? (e.push(l), n.slice(0, h) + '$lit$' + n.slice(h) + f + a)
          : n + f + (-2 === h ? (e.push(void 0), i) : a);
    }
    const l = s + (t[n] || '<?>') + (2 === i ? '</svg>' : '');
    return [void 0 !== v ? v.createHTML(l) : l, e];
  };
class U {
  constructor({ strings: t, _$litType$: i }, n) {
    let e;
    this.parts = [];
    let r = 0,
      s = 0;
    const o = t.length - 1,
      l = this.parts,
      [u, h] = x(t, i);
    if (
      ((this.el = U.createElement(u, n)),
      (L.currentNode = this.el.content),
      2 === i)
    ) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (e = L.nextNode()) && l.length < o; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];
          for (const i of e.getAttributeNames())
            if (i.endsWith('$lit$') || i.startsWith(f)) {
              const n = h[s++];
              if ((t.push(i), void 0 !== n)) {
                const t = e.getAttribute(n.toLowerCase() + '$lit$').split(f),
                  i = /([.?@])?(.*)/.exec(n);
                l.push({
                  type: 1,
                  index: r,
                  name: i[2],
                  strings: t,
                  ctor:
                    '.' === i[1] ? z : '?' === i[1] ? F : '@' === i[1] ? D : N,
                });
              } else l.push({ type: 6, index: r });
            }
          for (const i of t) e.removeAttribute(i);
        }
        if (k.test(e.tagName)) {
          const t = e.textContent.split(f),
            i = t.length - 1;
          if (i > 0) {
            e.textContent = d ? d.emptyScript : '';
            for (let n = 0; n < i; n++)
              e.append(t[n], g()),
                L.nextNode(),
                l.push({ type: 2, index: ++r });
            e.append(t[i], g());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === p) l.push({ type: 2, index: r });
        else {
          let t = -1;
          for (; -1 !== (t = e.data.indexOf(f, t + 1)); )
            l.push({ type: 7, index: r }), (t += f.length - 1);
        }
      r++;
    }
  }
  static createElement(t, i) {
    const n = y.createElement('template');
    return (n.innerHTML = t), n;
  }
}
function R(t, i, n = t, e) {
  var r, s, o, l;
  if (i === $) return i;
  let u =
    void 0 !== e
      ? null === (r = n._$Cl) || void 0 === r
        ? void 0
        : r[e]
      : n._$Cu;
  const h = w(i) ? void 0 : i._$litDirective$;
  return (
    (null == u ? void 0 : u.constructor) !== h &&
      (null === (s = null == u ? void 0 : u._$AO) ||
        void 0 === s ||
        s.call(u, !1),
      void 0 === h ? (u = void 0) : ((u = new h(t)), u._$AT(t, n, e)),
      void 0 !== e
        ? ((null !== (o = (l = n)._$Cl) && void 0 !== o ? o : (l._$Cl = []))[
            e
          ] = u)
        : (n._$Cu = u)),
    void 0 !== u && (i = R(t, u._$AS(t, i.values), u, e)),
    i
  );
}
class P {
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
        el: { content: n },
        parts: e,
      } = this._$AD,
      r = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i
        ? i
        : y
      ).importNode(n, !0);
    L.currentNode = r;
    let s = L.nextNode(),
      o = 0,
      l = 0,
      u = e[0];
    for (; void 0 !== u; ) {
      if (o === u.index) {
        let i;
        2 === u.type
          ? (i = new I(s, s.nextSibling, this, t))
          : 1 === u.type
          ? (i = new u.ctor(s, u.name, u.strings, this, t))
          : 6 === u.type && (i = new G(s, this, t)),
          this.v.push(i),
          (u = e[++l]);
      }
      o !== (null == u ? void 0 : u.index) && ((s = L.nextNode()), o++);
    }
    return r;
  }
  m(t) {
    let i = 0;
    for (const n of this.v)
      void 0 !== n &&
        (void 0 !== n.strings
          ? (n._$AI(t, n, i), (i += n.strings.length - 2))
          : n._$AI(t[i])),
        i++;
  }
}
class I {
  constructor(t, i, n, e) {
    var r;
    (this.type = 2),
      (this._$AH = M),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = i),
      (this._$AM = n),
      (this.options = e),
      (this._$Cg =
        null === (r = null == e ? void 0 : e.isConnected) || void 0 === r || r);
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
    (t = R(this, t, i)),
      w(t)
        ? t === M || null == t || '' === t
          ? (this._$AH !== M && this._$AR(), (this._$AH = M))
          : t !== this._$AH && t !== $ && this.$(t)
        : void 0 !== t._$litType$
        ? this.T(t)
        : void 0 !== t.nodeType
        ? this.S(t)
        : ((t) => {
            var i;
            return (
              S(t) ||
              'function' ==
                typeof (null === (i = t) || void 0 === i
                  ? void 0
                  : i[Symbol.iterator])
            );
          })(t)
        ? this.M(t)
        : this.$(t);
  }
  A(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }
  S(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.A(t)));
  }
  $(t) {
    this._$AH !== M && w(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.S(y.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var i;
    const { values: n, _$litType$: e } = t,
      r =
        'number' == typeof e
          ? this._$AC(t)
          : (void 0 === e.el && (e.el = U.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === r)
      this._$AH.m(n);
    else {
      const t = new P(r, this),
        i = t.p(this.options);
      t.m(n), this.S(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let i = E.get(t.strings);
    return void 0 === i && E.set(t.strings, (i = new U(t))), i;
  }
  M(t) {
    S(this._$AH) || ((this._$AH = []), this._$AR());
    const i = this._$AH;
    let n,
      e = 0;
    for (const r of t)
      e === i.length
        ? i.push((n = new I(this.A(g()), this.A(g()), this, this.options)))
        : (n = i[e]),
        n._$AI(r),
        e++;
    e < i.length && (this._$AR(n && n._$AB.nextSibling, e), (i.length = e));
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var n;
    for (
      null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, i);
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
class N {
  constructor(t, i, n, e, r) {
    (this.type = 1),
      (this._$AH = M),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = i),
      (this._$AM = e),
      (this.options = r),
      n.length > 2 || '' !== n[0] || '' !== n[1]
        ? ((this._$AH = Array(n.length - 1).fill(new String())),
          (this.strings = n))
        : (this._$AH = M);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, n, e) {
    const r = this.strings;
    let s = !1;
    if (void 0 === r)
      (t = R(this, t, i, 0)),
        (s = !w(t) || (t !== this._$AH && t !== $)),
        s && (this._$AH = t);
    else {
      const e = t;
      let o, l;
      for (t = r[0], o = 0; o < r.length - 1; o++)
        (l = R(this, e[n + o], i, o)),
          l === $ && (l = this._$AH[o]),
          s || (s = !w(l) || l !== this._$AH[o]),
          l === M ? (t = M) : t !== M && (t += (null != l ? l : '') + r[o + 1]),
          (this._$AH[o] = l);
    }
    s && !e && this.k(t);
  }
  k(t) {
    t === M
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class z extends N {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  k(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class F extends N {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  k(t) {
    t && t !== M
      ? this.element.setAttribute(this.name, '')
      : this.element.removeAttribute(this.name);
  }
}
class D extends N {
  constructor(t, i, n, e, r) {
    super(t, i, n, e, r), (this.type = 5);
  }
  _$AI(t, i = this) {
    var n;
    if ((t = null !== (n = R(this, t, i, 0)) && void 0 !== n ? n : M) === $)
      return;
    const e = this._$AH,
      r =
        (t === M && e !== M) ||
        t.capture !== e.capture ||
        t.once !== e.once ||
        t.passive !== e.passive,
      s = t !== M && (e === M || r);
    r && this.element.removeEventListener(this.name, this, e),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var i, n;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (n =
              null === (i = this.options) || void 0 === i ? void 0 : i.host) &&
            void 0 !== n
            ? n
            : this.element,
          t,
        )
      : this._$AH.handleEvent(t);
  }
}
class G {
  constructor(t, i, n) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i),
      (this.options = n);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    R(this, t);
  }
}
const V = window.litHtmlPolyfillSupport;
null == V || V(U, I),
  (null !== (a = globalThis.litHtmlVersions) && void 0 !== a
    ? a
    : (globalThis.litHtmlVersions = [])
  ).push('2.0.1');
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  H = Symbol(),
  q = new Map();
class J {
  constructor(t, i) {
    if (((this._$cssResult$ = !0), i !== H))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = q.get(this.cssText);
    return (
      B &&
        void 0 === t &&
        (q.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const K = B
  ? (t) => t
  : (t) =>
      t instanceof CSSStyleSheet
        ? ((t) => {
            let i = '';
            for (const n of t.cssRules) i += n.cssText;
            return ((t) => new J('string' == typeof t ? t : t + '', H))(i);
          })(t)
        : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var W;
const X = window.reactiveElementPolyfillSupport,
  Z = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? '' : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let n = t;
      switch (i) {
        case Boolean:
          n = null !== t;
          break;
        case Number:
          n = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(t);
          } catch (t) {
            n = null;
          }
      }
      return n;
    },
  },
  Y = (t, i) => i !== t && (i == i || t == t),
  Q = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: Y };
class tt extends HTMLElement {
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
      this.elementProperties.forEach((i, n) => {
        const e = this._$Eh(n, i);
        void 0 !== e && (this._$Eu.set(e, n), t.push(e));
      }),
      t
    );
  }
  static createProperty(t, i = Q) {
    if (
      (i.state && (i.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, i),
      !i.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const n = 'symbol' == typeof t ? Symbol() : '__' + t,
        e = this.getPropertyDescriptor(t, n, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, n) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const r = this[t];
        (this[i] = e), this.requestUpdate(t, r, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || Q;
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
      for (const n of i) this.createProperty(n, t[n]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const t of n) i.unshift(K(t));
    } else void 0 !== t && i.push(K(t));
    return i;
  }
  static _$Eh(t, i) {
    const n = i.attribute;
    return !1 === n
      ? void 0
      : 'string' == typeof n
      ? n
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  o() {
    var t;
    (this._$Ev = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Ep(),
      this.requestUpdate(),
      null === (t = this.constructor.l) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var i, n;
    (null !== (i = this._$Em) && void 0 !== i ? i : (this._$Em = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (n = t.hostConnected) || void 0 === n || n.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$Em) ||
      void 0 === i ||
      i.splice(this._$Em.indexOf(t) >>> 0, 1);
  }
  _$Ep() {
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
        B
          ? (t.adoptedStyleSheets = i.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : i.forEach((i) => {
              const n = document.createElement('style'),
                e = window.litNonce;
              void 0 !== e && n.setAttribute('nonce', e),
                (n.textContent = i.cssText),
                t.appendChild(n);
            });
      })(i, this.constructor.elementStyles),
      i
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$Em) ||
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
    null === (t = this._$Em) ||
      void 0 === t ||
      t.forEach((t) => {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i
          ? void 0
          : i.call(t);
      });
  }
  attributeChangedCallback(t, i, n) {
    this._$AK(t, n);
  }
  _$Eg(t, i, n = Q) {
    var e, r;
    const s = this.constructor._$Eh(t, n);
    if (void 0 !== s && !0 === n.reflect) {
      const o = (null !==
        (r =
          null === (e = n.converter) || void 0 === e
            ? void 0
            : e.toAttribute) && void 0 !== r
        ? r
        : Z.toAttribute)(i, n.type);
      (this._$Ei = t),
        null == o ? this.removeAttribute(s) : this.setAttribute(s, o),
        (this._$Ei = null);
    }
  }
  _$AK(t, i) {
    var n, e, r;
    const s = this.constructor,
      o = s._$Eu.get(t);
    if (void 0 !== o && this._$Ei !== o) {
      const t = s.getPropertyOptions(o),
        l = t.converter,
        u =
          null !==
            (r =
              null !==
                (e =
                  null === (n = l) || void 0 === n
                    ? void 0
                    : n.fromAttribute) && void 0 !== e
                ? e
                : 'function' == typeof l
                ? l
                : null) && void 0 !== r
            ? r
            : Z.fromAttribute;
      (this._$Ei = o), (this[o] = u(i, t.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, i, n) {
    let e = !0;
    void 0 !== t &&
      (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || Y)(
        this[t],
        i,
      )
        ? (this._$AL.has(t) || this._$AL.set(t, i),
          !0 === n.reflect &&
            this._$Ei !== t &&
            (void 0 === this._$ES && (this._$ES = new Map()),
            this._$ES.set(t, n)))
        : (e = !1)),
      !this.isUpdatePending && e && (this._$Ev = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = !0;
    try {
      await this._$Ev;
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
    const n = this._$AL;
    try {
      (i = this.shouldUpdate(n)),
        i
          ? (this.willUpdate(n),
            null === (t = this._$Em) ||
              void 0 === t ||
              t.forEach((t) => {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i
                  ? void 0
                  : i.call(t);
              }),
            this.update(n))
          : this._$EU();
    } catch (t) {
      throw ((i = !1), this._$EU(), t);
    }
    i && this._$AE(n);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$Em) ||
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
    return this._$Ev;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$ES &&
      (this._$ES.forEach((t, i) => this._$Eg(i, this[i], t)),
      (this._$ES = void 0)),
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
var it, nt;
(tt.finalized = !0),
  (tt.elementProperties = new Map()),
  (tt.elementStyles = []),
  (tt.shadowRootOptions = { mode: 'open' }),
  null == X || X({ ReactiveElement: tt }),
  (null !== (W = globalThis.reactiveElementVersions) && void 0 !== W
    ? W
    : (globalThis.reactiveElementVersions = [])
  ).push('1.0.1');
class et extends tt {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, i;
    const n = super.createRenderRoot();
    return (
      (null !== (t = (i = this.renderOptions).renderBefore) && void 0 !== t) ||
        (i.renderBefore = n.firstChild),
      n
    );
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = ((t, i, n) => {
        var e, r;
        const s =
          null !== (e = null == n ? void 0 : n.renderBefore) && void 0 !== e
            ? e
            : i;
        let o = s._$litPart$;
        if (void 0 === o) {
          const t =
            null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r
              ? r
              : null;
          s._$litPart$ = o = new I(
            i.insertBefore(g(), t),
            t,
            void 0,
            null != n ? n : {},
          );
        }
        return o._$AI(t), o;
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
    return $;
  }
}
(et.finalized = !0),
  (et._$litElement$ = !0),
  null === (it = globalThis.litElementHydrateSupport) ||
    void 0 === it ||
    it.call(globalThis, { LitElement: et });
const rt = globalThis.litElementPolyfillSupport;
null == rt || rt({ LitElement: et }),
  (null !== (nt = globalThis.litElementVersions) && void 0 !== nt
    ? nt
    : (globalThis.litElementVersions = [])
  ).push('3.0.1');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (t, i) =>
  'method' === i.kind && i.descriptor && !('value' in i.descriptor)
    ? {
        ...i,
        finisher(n) {
          n.createProperty(i.key, t);
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
        finisher(n) {
          n.createProperty(i.key, t);
        },
      };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ot(t) {
  return (i, n) =>
    void 0 !== n
      ? ((t, i, n) => {
          i.constructor.createProperty(n, t);
        })(t, i, n)
      : st(t, i);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
var lt =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  ut = function (t) {
    return t && t.Math == Math && t;
  },
  ht =
    ut('object' == typeof globalThis && globalThis) ||
    ut('object' == typeof window && window) ||
    ut('object' == typeof self && self) ||
    ut('object' == typeof lt && lt) ||
    (function () {
      return this;
    })() ||
    Function('return this')(),
  ct = {},
  at = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
  dt = !at(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  vt = Function.prototype.call,
  ft = vt.bind
    ? vt.bind(vt)
    : function () {
        return vt.apply(vt, arguments);
      },
  pt = {},
  bt = {}.propertyIsEnumerable,
  yt = Object.getOwnPropertyDescriptor,
  gt = yt && !bt.call({ 1: 2 }, 1);
pt.f = gt
  ? function (t) {
      var i = yt(this, t);
      return !!i && i.enumerable;
    }
  : bt;
var wt,
  St,
  mt = function (t, i) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: i,
    };
  },
  Ot = Function.prototype,
  _t = Ot.bind,
  jt = Ot.call,
  Ct = _t && _t.bind(jt),
  Tt = _t
    ? function (t) {
        return t && Ct(jt, t);
      }
    : function (t) {
        return (
          t &&
          function () {
            return jt.apply(t, arguments);
          }
        );
      },
  kt = Tt,
  At = kt({}.toString),
  $t = kt(''.slice),
  Mt = Tt,
  Et = at,
  Lt = function (t) {
    return $t(At(t), 8, -1);
  },
  xt = ht.Object,
  Ut = Mt(''.split),
  Rt = Et(function () {
    return !xt('z').propertyIsEnumerable(0);
  })
    ? function (t) {
        return 'String' == Lt(t) ? Ut(t, '') : xt(t);
      }
    : xt,
  Pt = ht.TypeError,
  It = function (t) {
    if (null == t) throw Pt("Can't call method on " + t);
    return t;
  },
  Nt = Rt,
  zt = It,
  Ft = function (t) {
    return Nt(zt(t));
  },
  Dt = function (t) {
    return 'function' == typeof t;
  },
  Gt = Dt,
  Vt = function (t) {
    return 'object' == typeof t ? null !== t : Gt(t);
  },
  Bt = ht,
  Ht = Dt,
  qt = function (t) {
    return Ht(t) ? t : void 0;
  },
  Jt = function (t, i) {
    return arguments.length < 2 ? qt(Bt[t]) : Bt[t] && Bt[t][i];
  },
  Kt = Tt({}.isPrototypeOf),
  Wt = ht,
  Xt = Jt('navigator', 'userAgent') || '',
  Zt = Wt.process,
  Yt = Wt.Deno,
  Qt = (Zt && Zt.versions) || (Yt && Yt.version),
  ti = Qt && Qt.v8;
ti && (St = (wt = ti.split('.'))[0] > 0 && wt[0] < 4 ? 1 : +(wt[0] + wt[1])),
  !St &&
    Xt &&
    (!(wt = Xt.match(/Edge\/(\d+)/)) || wt[1] >= 74) &&
    (wt = Xt.match(/Chrome\/(\d+)/)) &&
    (St = +wt[1]);
var ii = St,
  ni = at,
  ei =
    !!Object.getOwnPropertySymbols &&
    !ni(function () {
      var t = Symbol();
      return (
        !String(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && ii && ii < 41)
      );
    }),
  ri = ei && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  si = Jt,
  oi = Dt,
  li = Kt,
  ui = ri,
  hi = ht.Object,
  ci = ui
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        var i = si('Symbol');
        return oi(i) && li(i.prototype, hi(t));
      },
  ai = ht.String,
  di = Dt,
  vi = function (t) {
    try {
      return ai(t);
    } catch (t) {
      return 'Object';
    }
  },
  fi = ht.TypeError,
  pi = function (t) {
    if (di(t)) return t;
    throw fi(vi(t) + ' is not a function');
  },
  bi = ft,
  yi = Dt,
  gi = Vt,
  wi = ht.TypeError,
  Si = { exports: {} },
  mi = ht,
  Oi = Object.defineProperty,
  _i = function (t, i) {
    try {
      Oi(mi, t, { value: i, configurable: !0, writable: !0 });
    } catch (n) {
      mi[t] = i;
    }
    return i;
  },
  ji = _i,
  Ci = ht['t'] || ji('__core-js_shared__', {}),
  Ti = Ci;
(Si.exports = function (t, i) {
  return Ti[t] || (Ti[t] = void 0 !== i ? i : {});
})('versions', []).push({
  version: '3.19.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
});
var ki = It,
  Ai = ht.Object,
  $i = function (t) {
    return Ai(ki(t));
  },
  Mi = $i,
  Ei = Tt({}.hasOwnProperty),
  Li =
    Object.hasOwn ||
    function (t, i) {
      return Ei(Mi(t), i);
    },
  xi = Tt,
  Ui = 0,
  Ri = Math.random(),
  Pi = xi((1).toString),
  Ii = function (t) {
    return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + Pi(++Ui + Ri, 36);
  },
  Ni = ht,
  zi = Si.exports,
  Fi = Li,
  Di = Ii,
  Gi = ei,
  Vi = ri,
  Bi = zi('wks'),
  Hi = Ni.Symbol,
  qi = Hi && Hi.for,
  Ji = Vi ? Hi : (Hi && Hi.withoutSetter) || Di,
  Ki = function (t) {
    if (!Fi(Bi, t) || (!Gi && 'string' != typeof Bi[t])) {
      var i = 'Symbol.' + t;
      Gi && Fi(Hi, t) ? (Bi[t] = Hi[t]) : (Bi[t] = Vi && qi ? qi(i) : Ji(i));
    }
    return Bi[t];
  },
  Wi = ft,
  Xi = Vt,
  Zi = ci,
  Yi = function (t, i) {
    var n = t[i];
    return null == n ? void 0 : pi(n);
  },
  Qi = function (t, i) {
    var n, e;
    if ('string' === i && yi((n = t.toString)) && !gi((e = bi(n, t)))) return e;
    if (yi((n = t.valueOf)) && !gi((e = bi(n, t)))) return e;
    if ('string' !== i && yi((n = t.toString)) && !gi((e = bi(n, t)))) return e;
    throw wi("Can't convert object to primitive value");
  },
  tn = Ki,
  nn = ht.TypeError,
  en = tn('toPrimitive'),
  rn = function (t, i) {
    if (!Xi(t) || Zi(t)) return t;
    var n,
      e = Yi(t, en);
    if (e) {
      if ((void 0 === i && (i = 'default'), (n = Wi(e, t, i)), !Xi(n) || Zi(n)))
        return n;
      throw nn("Can't convert object to primitive value");
    }
    return void 0 === i && (i = 'number'), Qi(t, i);
  },
  sn = ci,
  on = function (t) {
    var i = rn(t, 'string');
    return sn(i) ? i : i + '';
  },
  ln = Vt,
  un = ht.document,
  hn = ln(un) && ln(un.createElement),
  cn = function (t) {
    return hn ? un.createElement(t) : {};
  },
  an = cn,
  dn =
    !dt &&
    !at(function () {
      return (
        7 !=
        Object.defineProperty(an('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  vn = dt,
  fn = ft,
  pn = pt,
  bn = mt,
  yn = Ft,
  gn = on,
  wn = Li,
  Sn = dn,
  mn = Object.getOwnPropertyDescriptor;
ct.f = vn
  ? mn
  : function (t, i) {
      if (((t = yn(t)), (i = gn(i)), Sn))
        try {
          return mn(t, i);
        } catch (t) {}
      if (wn(t, i)) return bn(!fn(pn.f, t, i), t[i]);
    };
var On = {},
  _n = ht,
  jn = Vt,
  Cn = _n.String,
  Tn = _n.TypeError,
  kn = function (t) {
    if (jn(t)) return t;
    throw Tn(Cn(t) + ' is not an object');
  },
  An = dt,
  $n = dn,
  Mn = kn,
  En = on,
  Ln = ht.TypeError,
  xn = Object.defineProperty;
On.f = An
  ? xn
  : function (t, i, n) {
      if ((Mn(t), (i = En(i)), Mn(n), $n))
        try {
          return xn(t, i, n);
        } catch (t) {}
      if ('get' in n || 'set' in n) throw Ln('Accessors not supported');
      return 'value' in n && (t[i] = n.value), t;
    };
var Un = On,
  Rn = mt,
  Pn = dt
    ? function (t, i, n) {
        return Un.f(t, i, Rn(1, n));
      }
    : function (t, i, n) {
        return (t[i] = n), t;
      },
  In = { exports: {} },
  Nn = Dt,
  zn = Ci,
  Fn = Tt(Function.toString);
Nn(zn.inspectSource) ||
  (zn.inspectSource = function (t) {
    return Fn(t);
  });
var Dn,
  Gn,
  Vn,
  Bn = zn.inspectSource,
  Hn = Dt,
  qn = Bn,
  Jn = ht.WeakMap,
  Kn = Hn(Jn) && /native code/.test(qn(Jn)),
  Wn = Si.exports,
  Xn = Ii,
  Zn = Wn('keys'),
  Yn = function (t) {
    return Zn[t] || (Zn[t] = Xn(t));
  },
  Qn = {},
  te = Kn,
  ie = ht,
  ne = Tt,
  ee = Vt,
  re = Pn,
  se = Li,
  oe = Ci,
  le = Yn,
  ue = Qn,
  he = ie.TypeError,
  ce = ie.WeakMap;
if (te || oe.state) {
  var ae = oe.state || (oe.state = new ce()),
    de = ne(ae.get),
    ve = ne(ae.has),
    fe = ne(ae.set);
  (Dn = function (t, i) {
    if (ve(ae, t)) throw new he('Object already initialized');
    return (i.facade = t), fe(ae, t, i), i;
  }),
    (Gn = function (t) {
      return de(ae, t) || {};
    }),
    (Vn = function (t) {
      return ve(ae, t);
    });
} else {
  var pe = le('state');
  (ue[pe] = !0),
    (Dn = function (t, i) {
      if (se(t, pe)) throw new he('Object already initialized');
      return (i.facade = t), re(t, pe, i), i;
    }),
    (Gn = function (t) {
      return se(t, pe) ? t[pe] : {};
    }),
    (Vn = function (t) {
      return se(t, pe);
    });
}
var be = {
    set: Dn,
    get: Gn,
    has: Vn,
    enforce: function (t) {
      return Vn(t) ? Gn(t) : Dn(t, {});
    },
    getterFor: function (t) {
      return function (i) {
        var n;
        if (!ee(i) || (n = Gn(i)).type !== t)
          throw he('Incompatible receiver, ' + t + ' required');
        return n;
      };
    },
  },
  ye = dt,
  ge = Li,
  we = Function.prototype,
  Se = ye && Object.getOwnPropertyDescriptor,
  me = ge(we, 'name'),
  Oe = {
    EXISTS: me,
    PROPER: me && 'something' === function () {}.name,
    CONFIGURABLE: me && (!ye || (ye && Se(we, 'name').configurable)),
  },
  _e = ht,
  je = Dt,
  Ce = Li,
  Te = Pn,
  ke = _i,
  Ae = Bn,
  $e = Oe.CONFIGURABLE,
  Me = be.get,
  Ee = be.enforce,
  Le = String(String).split('String');
(In.exports = function (t, i, n, e) {
  var r,
    s = !!e && !!e.unsafe,
    o = !!e && !!e.enumerable,
    l = !!e && !!e.noTargetGet,
    u = e && void 0 !== e.name ? e.name : i;
  je(n) &&
    ('Symbol(' === String(u).slice(0, 7) &&
      (u = '[' + String(u).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
    (!Ce(n, 'name') || ($e && n.name !== u)) && Te(n, 'name', u),
    (r = Ee(n)).source || (r.source = Le.join('string' == typeof u ? u : ''))),
    t !== _e
      ? (s ? !l && t[i] && (o = !0) : delete t[i], o ? (t[i] = n) : Te(t, i, n))
      : o
      ? (t[i] = n)
      : ke(i, n);
})(Function.prototype, 'toString', function () {
  return (je(this) && Me(this).source) || Ae(this);
});
var xe = {},
  Ue = Math.ceil,
  Re = Math.floor,
  Pe = function (t) {
    var i = +t;
    return i != i || 0 === i ? 0 : (i > 0 ? Re : Ue)(i);
  },
  Ie = Pe,
  Ne = Math.max,
  ze = Math.min,
  Fe = Pe,
  De = Math.min,
  Ge = function (t) {
    return t > 0 ? De(Fe(t), 9007199254740991) : 0;
  },
  Ve = Ft,
  Be = function (t, i) {
    var n = Ie(t);
    return n < 0 ? Ne(n + i, 0) : ze(n, i);
  },
  He = function (t) {
    return Ge(t.length);
  },
  qe = function (t) {
    return function (i, n, e) {
      var r,
        s = Ve(i),
        o = He(s),
        l = Be(e, o);
      if (t && n != n) {
        for (; o > l; ) if ((r = s[l++]) != r) return !0;
      } else
        for (; o > l; l++) if ((t || l in s) && s[l] === n) return t || l || 0;
      return !t && -1;
    };
  },
  Je = { includes: qe(!0), indexOf: qe(!1) },
  Ke = Li,
  We = Ft,
  Xe = Je.indexOf,
  Ze = Qn,
  Ye = Tt([].push),
  Qe = function (t, i) {
    var n,
      e = We(t),
      r = 0,
      s = [];
    for (n in e) !Ke(Ze, n) && Ke(e, n) && Ye(s, n);
    for (; i.length > r; ) Ke(e, (n = i[r++])) && (~Xe(s, n) || Ye(s, n));
    return s;
  },
  tr = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  ir = Qe,
  nr = tr.concat('length', 'prototype');
xe.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return ir(t, nr);
  };
var er = {};
er.f = Object.getOwnPropertySymbols;
var rr = Jt,
  sr = xe,
  or = er,
  lr = kn,
  ur = Tt([].concat),
  hr =
    rr('Reflect', 'ownKeys') ||
    function (t) {
      var i = sr.f(lr(t)),
        n = or.f;
      return n ? ur(i, n(t)) : i;
    },
  cr = Li,
  ar = hr,
  dr = ct,
  vr = On,
  fr = at,
  pr = Dt,
  br = /#|\.prototype\./,
  yr = function (t, i) {
    var n = wr[gr(t)];
    return n == mr || (n != Sr && (pr(i) ? fr(i) : !!i));
  },
  gr = (yr.normalize = function (t) {
    return String(t).replace(br, '.').toLowerCase();
  }),
  wr = (yr.data = {}),
  Sr = (yr.NATIVE = 'N'),
  mr = (yr.POLYFILL = 'P'),
  Or = yr,
  _r = ht,
  jr = ct.f,
  Cr = Pn,
  Tr = In.exports,
  kr = _i,
  Ar = function (t, i) {
    for (var n = ar(i), e = vr.f, r = dr.f, s = 0; s < n.length; s++) {
      var o = n[s];
      cr(t, o) || e(t, o, r(i, o));
    }
  },
  $r = Or,
  Mr = function (t, i) {
    var n,
      e,
      r,
      s,
      o,
      l = t.target,
      u = t.global,
      h = t.stat;
    if ((n = u ? _r : h ? _r[l] || kr(l, {}) : (_r[l] || {}).prototype))
      for (e in i) {
        if (
          ((s = i[e]),
          (r = t.noTargetGet ? (o = jr(n, e)) && o.value : n[e]),
          !$r(u ? e : l + (h ? '.' : '#') + e, t.forced) && void 0 !== r)
        ) {
          if (typeof s == typeof r) continue;
          Ar(s, r);
        }
        (t.sham || (r && r.sham)) && Cr(s, 'sham', !0), Tr(n, e, s, t);
      }
  };
Mr({ global: !0 }, { globalThis: ht });
var Er,
  Lr = Qe,
  xr = tr,
  Ur =
    Object.keys ||
    function (t) {
      return Lr(t, xr);
    },
  Rr = On,
  Pr = kn,
  Ir = Ft,
  Nr = Ur,
  zr = dt
    ? Object.defineProperties
    : function (t, i) {
        Pr(t);
        for (var n, e = Ir(i), r = Nr(i), s = r.length, o = 0; s > o; )
          Rr.f(t, (n = r[o++]), e[n]);
        return t;
      },
  Fr = Jt('document', 'documentElement'),
  Dr = kn,
  Gr = zr,
  Vr = tr,
  Br = Qn,
  Hr = Fr,
  qr = cn,
  Jr = Yn('IE_PROTO'),
  Kr = function () {},
  Wr = function (t) {
    return '<script>' + t + '</script>';
  },
  Xr = function (t) {
    t.write(Wr('')), t.close();
    var i = t.parentWindow.Object;
    return (t = null), i;
  },
  Zr = function () {
    try {
      Er = new ActiveXObject('htmlfile');
    } catch (t) {}
    var t, i;
    Zr =
      'undefined' != typeof document
        ? document.domain && Er
          ? Xr(Er)
          : (((i = qr('iframe')).style.display = 'none'),
            Hr.appendChild(i),
            (i.src = String('javascript:')),
            (t = i.contentWindow.document).open(),
            t.write(Wr('document.F=Object')),
            t.close(),
            t.F)
        : Xr(Er);
    for (var n = Vr.length; n--; ) delete Zr.prototype[Vr[n]];
    return Zr();
  };
Br[Jr] = !0;
var Yr =
    Object.create ||
    function (t, i) {
      var n;
      return (
        null !== t
          ? ((Kr.prototype = Dr(t)),
            (n = new Kr()),
            (Kr.prototype = null),
            (n[Jr] = t))
          : (n = Zr()),
        void 0 === i ? n : Gr(n, i)
      );
    },
  Qr = Yr,
  ts = On,
  is = Ki('unscopables'),
  ns = Array.prototype;
null == ns[is] && ts.f(ns, is, { configurable: !0, value: Qr(null) });
var es,
  rs,
  ss,
  os = {},
  ls = !at(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  us = ht,
  hs = Li,
  cs = Dt,
  as = $i,
  ds = ls,
  vs = Yn('IE_PROTO'),
  fs = us.Object,
  ps = fs.prototype,
  bs = ds
    ? fs.getPrototypeOf
    : function (t) {
        var i = as(t);
        if (hs(i, vs)) return i[vs];
        var n = i.constructor;
        return cs(n) && i instanceof n
          ? n.prototype
          : i instanceof fs
          ? ps
          : null;
      },
  ys = at,
  gs = Dt,
  ws = bs,
  Ss = In.exports,
  ms = Ki('iterator'),
  Os = !1;
[].keys &&
  ('next' in (ss = [].keys())
    ? (rs = ws(ws(ss))) !== Object.prototype && (es = rs)
    : (Os = !0)),
  (null == es ||
    ys(function () {
      var t = {};
      return es[ms].call(t) !== t;
    })) &&
    (es = {}),
  gs(es[ms]) ||
    Ss(es, ms, function () {
      return this;
    });
var _s = { IteratorPrototype: es, BUGGY_SAFARI_ITERATORS: Os },
  js = On.f,
  Cs = Li,
  Ts = Ki('toStringTag'),
  ks = function (t, i, n) {
    t &&
      !Cs((t = n ? t : t.prototype), Ts) &&
      js(t, Ts, { configurable: !0, value: i });
  },
  As = _s.IteratorPrototype,
  $s = Yr,
  Ms = mt,
  Es = ks,
  Ls = os,
  xs = function () {
    return this;
  },
  Us = ht,
  Rs = Dt,
  Ps = Us.String,
  Is = Us.TypeError,
  Ns = Tt,
  zs = kn,
  Fs = function (t) {
    if ('object' == typeof t || Rs(t)) return t;
    throw Is("Can't set " + Ps(t) + ' as a prototype');
  },
  Ds =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var t,
            i = !1,
            n = {};
          try {
            (t = Ns(
              Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                .set,
            ))(n, []),
              (i = n instanceof Array);
          } catch (t) {}
          return function (n, e) {
            return zs(n), Fs(e), i ? t(n, e) : (n.__proto__ = e), n;
          };
        })()
      : void 0),
  Gs = Mr,
  Vs = ft,
  Bs = Oe,
  Hs = Dt,
  qs = function (t, i, n, e) {
    var r = i + ' Iterator';
    return (
      (t.prototype = $s(As, { next: Ms(+!e, n) })),
      Es(t, r, !1),
      (Ls[r] = xs),
      t
    );
  },
  Js = bs,
  Ks = Ds,
  Ws = ks,
  Xs = Pn,
  Zs = In.exports,
  Ys = os,
  Qs = Bs.PROPER,
  to = Bs.CONFIGURABLE,
  io = _s.IteratorPrototype,
  no = _s.BUGGY_SAFARI_ITERATORS,
  eo = Ki('iterator'),
  ro = function () {
    return this;
  },
  so = Ft,
  oo = function (t) {
    ns[is][t] = !0;
  },
  lo = os,
  uo = be,
  ho = function (t, i, n, e, r, s, o) {
    qs(n, i, e);
    var l,
      u,
      h,
      c = function (t) {
        if (t === r && p) return p;
        if (!no && t in v) return v[t];
        switch (t) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, t);
            };
        }
        return function () {
          return new n(this);
        };
      },
      a = i + ' Iterator',
      d = !1,
      v = t.prototype,
      f = v[eo] || v['@@iterator'] || (r && v[r]),
      p = (!no && f) || c(r),
      b = ('Array' == i && v.entries) || f;
    if (
      (b &&
        (l = Js(b.call(new t()))) !== Object.prototype &&
        l.next &&
        (Js(l) !== io && (Ks ? Ks(l, io) : Hs(l[eo]) || Zs(l, eo, ro)),
        Ws(l, a, !0)),
      Qs &&
        'values' == r &&
        f &&
        'values' !== f.name &&
        (to
          ? Xs(v, 'name', 'values')
          : ((d = !0),
            (p = function () {
              return Vs(f, this);
            }))),
      r)
    )
      if (
        ((u = {
          values: c('values'),
          keys: s ? p : c('keys'),
          entries: c('entries'),
        }),
        o)
      )
        for (h in u) (no || d || !(h in v)) && Zs(v, h, u[h]);
      else Gs({ target: i, proto: !0, forced: no || d }, u);
    return v[eo] !== p && Zs(v, eo, p, { name: r }), (Ys[i] = p), u;
  },
  co = uo.set,
  ao = uo.getterFor('Array Iterator'),
  vo = ho(
    Array,
    'Array',
    function (t, i) {
      co(this, { type: 'Array Iterator', target: so(t), index: 0, kind: i });
    },
    function () {
      var t = ao(this),
        i = t.target,
        n = t.kind,
        e = t.index++;
      return !i || e >= i.length
        ? ((t.target = void 0), { value: void 0, done: !0 })
        : 'keys' == n
        ? { value: e, done: !1 }
        : 'values' == n
        ? { value: i[e], done: !1 }
        : { value: [e, i[e]], done: !1 };
    },
    'values',
  );
(lo.Arguments = lo.Array), oo('keys'), oo('values'), oo('entries');
var fo = cn('span').classList,
  po = fo && fo.constructor && fo.constructor.prototype,
  bo = po === Object.prototype ? void 0 : po,
  yo = ht,
  go = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  wo = bo,
  So = vo,
  mo = Pn,
  Oo = Ki,
  _o = Oo('iterator'),
  jo = Oo('toStringTag'),
  Co = So.values,
  To = function (t, i) {
    if (t) {
      if (t[_o] !== Co)
        try {
          mo(t, _o, Co);
        } catch (i) {
          t[_o] = Co;
        }
      if ((t[jo] || mo(t, jo, i), go[i]))
        for (var n in So)
          if (t[n] !== So[n])
            try {
              mo(t, n, So[n]);
            } catch (i) {
              t[n] = So[n];
            }
    }
  };
for (var ko in go) To(yo[ko] && yo[ko].prototype, ko);
To(wo, 'DOMTokenList');
var Ao = dt,
  $o = Tt,
  Mo = ft,
  Eo = at,
  Lo = Ur,
  xo = er,
  Uo = pt,
  Ro = $i,
  Po = Rt,
  Io = Object.assign,
  No = Object.defineProperty,
  zo = $o([].concat),
  Fo =
    !Io ||
    Eo(function () {
      if (
        Ao &&
        1 !==
          Io(
            { b: 1 },
            Io(
              No({}, 'a', {
                enumerable: !0,
                get: function () {
                  No(this, 'b', { value: 3, enumerable: !1 });
                },
              }),
              { b: 2 },
            ),
          ).b
      )
        return !0;
      var t = {},
        i = {},
        n = Symbol(),
        e = 'abcdefghijklmnopqrst';
      return (
        (t[n] = 7),
        e.split('').forEach(function (t) {
          i[t] = t;
        }),
        7 != Io({}, t)[n] || Lo(Io({}, i)).join('') != e
      );
    })
      ? function (t, i) {
          for (
            var n = Ro(t), e = arguments.length, r = 1, s = xo.f, o = Uo.f;
            e > r;

          )
            for (
              var l,
                u = Po(arguments[r++]),
                h = s ? zo(Lo(u), s(u)) : Lo(u),
                c = h.length,
                a = 0;
              c > a;

            )
              (l = h[a++]), (Ao && !Mo(o, u, l)) || (n[l] = u[l]);
          return n;
        }
      : Io;
let Do;
function Go(
  t = (function () {
    var t;
    return null !== (t = globalThis.document) && void 0 !== t ? t : globalThis;
  })(),
) {
  const i = (function (t = '_injectorsRegistry') {
    return Do || (Do = globalThis[t] ? globalThis[t] : new WeakMap()), Do;
  })();
  for (; t; ) {
    if (i.has(t)) return Do.get(t);
    t = t.parentNode;
  }
  throw new Error('No injector found!');
}
Mr(
  { target: 'Object', stat: !0, forced: Object.assign !== Fo },
  { assign: Fo },
);
var Vo = function (t, i, n, e) {
  for (
    var r,
      s = arguments.length,
      o =
        s < 3
          ? i
          : null === e
          ? (e = Object.getOwnPropertyDescriptor(i, n))
          : e,
      l = t.length - 1;
    l >= 0;
    l--
  )
    (r = t[l]) && (o = (s < 3 ? r(o) : s > 3 ? r(i, n, o) : r(i, n)) || o);
  return s > 3 && o && Object.defineProperty(i, n, o), o;
};
let Bo = class extends et {
  constructor() {
    super(...arguments),
      (this.uid = ''),
      (this.content = { title: '', description: '', image: '' }),
      (this.experienceContent = Go().inject('FES.Experience'));
  }
  connectedCallback() {
    this.uid &&
      (this.contentSubscription = this.experienceContent
        .getContent({ key: this.uid })
        .subscribe((t) => {
          t.data && (this.content = { ...t.data });
        })),
      super.connectedCallback();
  }
  disconnectedCallback() {
    this.contentSubscription && this.contentSubscription.unsubscribe(),
      super.disconnectedCallback();
  }
  render() {
    return A`
      <div class="wc-banner">
        <div class="wc-banner__inner">
          <div class="wc-banner__text">
            <h1>${this.content.title}</h1>
            <h2>${this.content.description}</h2>
          </div>
          <div class="wc-banner__image-block">
            <img src="${this.content.image}" class="wc-banner__image" />
          </div>
        </div>
      </div>
    `;
  }
};
(Bo.styles = ((t, ...i) => {
  const n =
    1 === t.length
      ? t[0]
      : i.reduce(
          (i, n, e) =>
            i +
            ((t) => {
              if (!0 === t._$cssResult$) return t.cssText;
              if ('number' == typeof t) return t;
              throw Error(
                "Value passed to 'css' function must be a 'css' function result: " +
                  t +
                  ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
              );
            })(n) +
            t[e + 1],
          t[0],
        );
  return new J(n, H);
})`
    .wc-banner {
      margin: 50px 0;
      background-color: #ffed00;
    }
    .wc-banner__inner {
      padding: 50px 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .wc-banner__text {
      width: 45%;
      padding: 0 25px;
    }
    .wc-banner__image-block {
      width: 55%;
      padding: 0 25px;
    }
    .wc-banner__image {
      display:block;
      max-width: 100%;
    }

  `),
  Vo([ot()], Bo.prototype, 'uid', void 0),
  Vo(
    [
      (function (t) {
        return ot({ ...t, state: !0 });
      })(),
    ],
    Bo.prototype,
    'content',
    void 0,
  ),
  (Bo = Vo(
    [
      ((t) => (i) =>
        'function' == typeof i
          ? ((t, i) => (window.customElements.define(t, i), i))(t, i)
          : ((t, i) => {
              const { kind: n, elements: e } = i;
              return {
                kind: n,
                elements: e,
                finisher(i) {
                  window.customElements.define(t, i);
                },
              };
            })(t, i))('wc-banner'),
    ],
    Bo,
  ));
export { Bo as WcBanner };
