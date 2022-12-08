import{z as p,c as x,d as b,y as d,K as u,_ as i,v as l,g as a,aC as f}from"./index-74abacf3.js";class m{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){this.paginate(this.host.pages)}getPrevious(t=[]){return t[this.host.current-2]}getNext(t=[]){return t[this.host.current]}paginate(t=[]){if(t.length===0)return;this.validate(t),this.setActive(t);const e=this.getRange(t.length);t.forEach((n,c)=>{const y=c===0,v=c===t.length-1,g=c+1>=e.start&&c+1<=e.end;n.toggleAttribute("visible",y||g||v)}),this.setTruncated(t)}setTruncated(t){var e,n;this.host.toggleAttribute("start-truncated",!((e=t[1])!=null&&e.hasAttribute("visible"))),this.host.toggleAttribute("end-truncated",!((n=t[t.length-2])!=null&&n.hasAttribute("visible"))&&!(this.host.max===1&&(this.host.current===t.length||this.host.current===1)))}getRange(t){let e=this.host.current-(this.host.max-1)/2;return this.host.current<this.host.max&&(e=1),this.host.current-1>t-this.host.max&&(e=t-this.host.max+1),{start:e,end:e+this.host.max-1}}setActive(t){this.host.querySelectorAll("[active]").forEach(e=>{e.removeAttribute("active"),e.removeAttribute("inert")}),t[this.host.current-1].toggleAttribute("active"),t[this.host.current-1].toggleAttribute("inert")}validate(t){this.host.current<1&&(this.host.current=1),this.host.current>t.length-1&&(this.host.current=t.length)}}const r=p("36px"),s=p("5px"),$=x`
  :host([is-empty]) {
    display: none;
  }

  :host {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${s};
  }

  slot[name='previous'] *,
  slot[name='next'] * {
    --oryx-icon-size: 16px;
  }

  ::slotted(*),
  *[truncated],
  a {
    height: ${r};
    width: ${r};
    align-items: center;
    justify-content: center;
  }

  ::slotted(*),
  a {
    border: 1px solid var(--oryx-color-canvas-500);
    border-radius: var(--oryx-border-radius-small);
    background: var(--oryx-color-canvas-100);
    transition: var(--oryx-transition-time);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    outline: none;
  }

  ::slotted(*),
  :host > a {
    display: flex;
  }

  ::slotted(:not([visible])) {
    display: none;
  }

  ::slotted(*) {
    color: var(--oryx-color-neutral-400);
  }

  ::slotted(*[disabled]) {
    color: var(--oryx-color-neutral-300);
  }

  a {
    color: var(--oryx-color-neutral-300);
  }

  a[disabled] {
    color: var(--oryx-color-neutral-200);
  }

  slot[name='truncated'] * {
    --oryx-icon-size: 12px;

    transform: rotate(90deg);
  }

  span[truncated] {
    position: absolute;
    display: none;
  }

  :host([start-truncated]) ::slotted(*:nth-child(1)) {
    margin-inline-end: calc(${r} + ${s});
  }

  :host([end-truncated]) ::slotted(*:last-child) {
    margin-inline-start: calc(${r} + ${s});
  }

  :host([start-truncated]) [truncated]:first-of-type,
  :host([end-truncated]) [truncated]:last-of-type {
    display: flex;
  }

  :host([hideNavigation]) span[truncated]:first-of-type {
    inset-inline-start: calc(${r} + ${s} + 2px);
  }

  span[truncated]:first-of-type {
    inset-inline-start: calc((${r} + ${s} + 2px) * 2);
  }

  :host([hideNavigation]) span[truncated]:last-of-type {
    inset-inline-end: calc(${r} + ${s} + 2px);
  }

  span[truncated]:last-of-type {
    inset-inline-end: calc((${r} + ${s} + 2px) * 2);
  }

  ::slotted(*[start-range]) {
    margin-inline-start: calc(${r} + ${s} + 2px);
  }

  ::slotted(*[end-range]) {
    margin-inline-end: calc(${r} + ${s});
  }

  ::slotted(*:hover),
  a:not([truncated]):hover {
    transition: var(--oryx-transition-time);
    border-color: var(--oryx-color-neutral-200);
  }

  ::slotted(*[active]),
  ::slotted(*:active),
  ::slotted(*:focus-visible),
  a:not([truncated]):active,
  a:not([truncated]):focus-visible {
    border-color: var(--oryx-color-primary-300);
  }

  ::slotted(*[active]),
  ::slotted(*[disabled]),
  a[disabled] {
    pointer-events: none;
  }

  ::slotted(*[active]),
  ::slotted(*:active),
  a:not([truncated]):active {
    color: var(--oryx-color-canvas-100);
    background: var(--oryx-color-primary-300);
  }

  ::slotted(*:focus-visible),
  *:focus-visible {
    box-shadow: 0 0 3px var(--oryx-color-primary-300);
  }

  ::slotted(*[disabled]),
  a[disabled] {
    background-color: var(--oryx-color-canvas-200);
  }

  slot[name='previous'] oryx-icon {
    transform: scaleX(-1);
  }
`,h=class extends b{constructor(){super(...arguments),this.max=5,this.current=1,this.previousLabel="Previous page",this.nextLabel="Next page",this.requiresUpdate=!0,this.controller=new m(this),this.isEmpty=!0}render(){return d`
      ${u(!this.hideNavigation,()=>this.renderNav("previous",this.controller.getPrevious(this.pages)))}

      <slot @slotchange=${this.updatePages}></slot>

      ${u(!this.hideNavigation,()=>this.renderNav("next",this.controller.getNext(this.pages)))}
      ${this.renderTruncated()} ${this.renderTruncated()}
    `}renderNav(t,e){return d`
      <a
        href=${e==null?void 0:e.getAttribute("href")}
        .ariaLabel=${this[`${t}Label`]}
        @click=${n=>this.onClick(n,e)}
        ?disabled=${!e}
        ?inert=${!e}
      >
        <slot .name=${t}>
          <oryx-icon type="navigationArrow"></oryx-icon>
        </slot>
      </a>
    `}renderTruncated(){return d`
      <span truncated>
        <slot name="truncated">
          <oryx-icon type="actions"></oryx-icon>
        </slot>
      </span>
    `}onClick(t,e){t.ctrlKey||t.metaKey||(t.preventDefault(),e==null||e.click())}updatePages(){var t;this.isEmpty=!this.pages||((t=this.pages)==null?void 0:t.length)<2,this.requiresUpdate&&(this.requestUpdate(),this.requiresUpdate=!1),this.controller.paginate(this.pages)}};let o=h;(()=>{h.styles=[$]})();i([l({type:Boolean,reflect:!0}),a("design:type",Boolean)],o.prototype,"hideNavigation",void 0);i([l({type:Number}),a("design:type",Object)],o.prototype,"max",void 0);i([l({type:Number}),a("design:type",Object)],o.prototype,"current",void 0);i([l(),a("design:type",Object)],o.prototype,"previousLabel",void 0);i([l(),a("design:type",Object)],o.prototype,"nextLabel",void 0);i([f({}),a("design:type",Array)],o.prototype,"pages",void 0);i([l({type:Boolean,reflect:!0,attribute:"is-empty"}),a("design:type",Object)],o.prototype,"isEmpty",void 0);export{o as PaginationComponent};
