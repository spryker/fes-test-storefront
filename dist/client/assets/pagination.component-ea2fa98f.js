import{z as u,c as x,d as b,y as d,K as h,_ as s,v as n,g as i,aC as m}from"./index-4d2c92b7.js";class f{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){this.paginate(this.host.pages)}getPrevious(t=[]){return t[this.host.current-2]}getNext(t=[]){return t[this.host.current]}paginate(t=[]){if(t.length===0)return;this.validate(t),this.setActive(t);const e=this.getRange(t.length);t.forEach((c,l)=>{const v=l===0,y=l===t.length-1,g=l+1>=e.start&&l+1<=e.end;c.toggleAttribute("visible",v||g||y)}),this.setTruncated(t)}setTruncated(t){this.host.toggleAttribute("start-truncated",!t[1]?.hasAttribute("visible")),this.host.toggleAttribute("end-truncated",!t[t.length-2]?.hasAttribute("visible")&&!(this.host.max===1&&(this.host.current===t.length||this.host.current===1)))}getRange(t){let e=this.host.current-(this.host.max-1)/2;return this.host.current<this.host.max&&(e=1),this.host.current-1>t-this.host.max&&(e=t-this.host.max+1),{start:e,end:e+this.host.max-1}}setActive(t){this.host.querySelectorAll("[active]").forEach(e=>{e.removeAttribute("active"),e.removeAttribute("inert")}),t[this.host.current-1].toggleAttribute("active"),t[this.host.current-1].toggleAttribute("inert")}validate(t){this.host.current<1&&(this.host.current=1),this.host.current>t.length-1&&(this.host.current=t.length)}}const r=u("36px"),o=u("5px"),$=x`
  :host([is-empty]) {
    display: none;
  }

  :host {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${o};
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
    margin-inline-end: calc(${r} + ${o});
  }

  :host([end-truncated]) ::slotted(*:last-child) {
    margin-inline-start: calc(${r} + ${o});
  }

  :host([start-truncated]) [truncated]:first-of-type,
  :host([end-truncated]) [truncated]:last-of-type {
    display: flex;
  }

  :host([hideNavigation]) span[truncated]:first-of-type {
    inset-inline-start: calc(${r} + ${o} + 2px);
  }

  span[truncated]:first-of-type {
    inset-inline-start: calc((${r} + ${o} + 2px) * 2);
  }

  :host([hideNavigation]) span[truncated]:last-of-type {
    inset-inline-end: calc(${r} + ${o} + 2px);
  }

  span[truncated]:last-of-type {
    inset-inline-end: calc((${r} + ${o} + 2px) * 2);
  }

  ::slotted(*[start-range]) {
    margin-inline-start: calc(${r} + ${o} + 2px);
  }

  ::slotted(*[end-range]) {
    margin-inline-end: calc(${r} + ${o});
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
`;class a extends b{constructor(){super(...arguments),this.max=5,this.current=1,this.previousLabel="Previous page",this.nextLabel="Next page",this.requiresUpdate=!0,this.controller=new f(this),this.isEmpty=!0}static{this.styles=[$]}render(){return d`
      ${h(!this.hideNavigation,()=>this.renderNav("previous",this.controller.getPrevious(this.pages)))}

      <slot @slotchange=${this.updatePages}></slot>

      ${h(!this.hideNavigation,()=>this.renderNav("next",this.controller.getNext(this.pages)))}
      ${this.renderTruncated()} ${this.renderTruncated()}
    `}renderNav(t,e){return d`
      <a
        href=${e?.getAttribute("href")}
        .ariaLabel=${this[`${t}Label`]}
        @click=${c=>this.onClick(c,e)}
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
    `}onClick(t,e){t.ctrlKey||t.metaKey||(t.preventDefault(),e?.click())}updatePages(){this.isEmpty=!this.pages||this.pages?.length<2,this.requiresUpdate&&(this.requestUpdate(),this.requiresUpdate=!1),this.controller.paginate(this.pages)}}s([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],a.prototype,"hideNavigation",void 0);s([n({type:Number}),i("design:type",Object)],a.prototype,"max",void 0);s([n({type:Number}),i("design:type",Object)],a.prototype,"current",void 0);s([n(),i("design:type",Object)],a.prototype,"previousLabel",void 0);s([n(),i("design:type",Object)],a.prototype,"nextLabel",void 0);s([m({}),i("design:type",Array)],a.prototype,"pages",void 0);s([n({type:Boolean,reflect:!0,attribute:"is-empty"}),i("design:type",Object)],a.prototype,"isEmpty",void 0);export{a as PaginationComponent};
