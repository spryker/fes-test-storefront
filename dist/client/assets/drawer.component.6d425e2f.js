import{c as l,z as r,d as u,y as s,K as c,_ as o,v as t,g as i}from"./index.e698feb0.js";import{P as n}from"./common.49548711.js";var p;(function(d){d.PRIMARY="primary",d.SECONDARY="secondary"})(p||(p={}));const v=l`
  dialog {
    all: unset;
    position: fixed;
    inset: auto;
    top: 0;
    height: 100%;
    width: var(--oryx-aside-width, 50%);
    transform: scaleX(var(--oryx-aside-visible, 0));
    transform-origin: left top;
    pointer-events: none;
    overscroll-behavior: none;
    box-sizing: border-box;
    outline: none;
    z-index: inherit;
  }

  form {
    display: flex;
    height: 100%;
    width: 100%;
  }

  slot {
    display: block;
    position: relative;
    width: 100%;
    pointer-events: auto;
    overflow: auto;
    overscroll-behavior: contain;
  }

  dialog[open] {
    --oryx-aside-visible: 1;
  }

  :host(:not([position='${r(n.END)}'])) dialog {
    inset-inline-start: 0;
  }

  :host([position='${r(n.END)}']) dialog {
    inset-inline-end: 0;
    transform-origin: right top;
  }

  :host(:not([position='${r(n.END)}'])) nav {
    order: 1;
  }

  :host([position='${r(n.END)}']) dialog::before {
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([maximize]) {
    --oryx-aside-width: 100%;
  }
`,y=l`
  nav {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
  }

  button {
    all: unset;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  nav > * {
    margin-bottom: 5px;
  }
`,h=l`
  :host(:not([not-closable][not-resizable])) {
    --_drawer-panel-size: 48px;
  }

  dialog {
    transition-property: transform, width;
    transition-duration: var(--oryx-transition-time);
  }

  dialog::before {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: calc(100% - var(--_drawer-panel-size, 0px));
    height: 100%;
    z-index: 0;
    box-shadow: var(--oryx-elevation-3) var(--oryx-elevation-color-2);
    background: var(--oryx-color-canvas-200);
  }

  :host([type='${r(p.SECONDARY)}']) dialog::before {
    background: var(--oryx-color-canvas-100);
  }
`,m=l`
  nav {
    --oryx-icon-size: var(--oryx-icon-size-small);

    padding-top: 20px;
  }

  button {
    width: var(--_drawer-panel-size);
    height: var(--_drawer-panel-size);
    background: var(--oryx-color-canvas-100);
    color: var(--oryx-color-neutral-300);
    transition: color, background var(--oryx-transition-time);
    box-sizing: border-box;
  }

  button:hover {
    color: var(--oryx-color-canvas-100);
    background: var(--oryx-color-primary-300);
  }

  button:is(:focus-visible, :focus) {
    border: 1px solid var(--oryx-color-primary-300);
  }

  button::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    box-shadow: var(--oryx-elevation-3) var(--oryx-elevation-color-2);
  }

  :host(:not([position='${r(n.END)}'])) button,
  :host(:not([position='${r(n.END)}'])) button::before {
    border-start-end-radius: var(--oryx-border-radius);
    border-end-end-radius: var(--oryx-border-radius);
  }

  :host([position='${r(n.END)}']) button,
  :host([position='${r(n.END)}']) button::before {
    border-start-start-radius: var(--oryx-border-radius);
    border-end-start-radius: var(--oryx-border-radius);
  }
`;class e extends u{constructor(){super(...arguments),this.notClosable=!1,this.open=!1,this.notResizable=!1,this.navAriaLabel="drawer navigation",this.closeButtonAriaLabel="close the drawer",this.minimizeButtonAriaLabel="minimize the drawer",this.maximizeButtonAriaLabel="maximize the drawer"}get dialog(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("dialog")}renderTemplate(){return s`
      <nav aria-label=${this.navAriaLabel}>
        ${c(!this.notClosable,()=>s`
            <button value="cancel" aria-label=${this.closeButtonAriaLabel}>
              <oryx-icon type="close"></oryx-icon>
            </button>
          `)}
        ${c(!this.notResizable,()=>s`
            <button
              aria-label="${this.maximize?this.minimizeButtonAriaLabel:this.maximizeButtonAriaLabel}"
              type="button"
              @click=${()=>this.resize()}
            >
              <oryx-icon
                type="${this.maximize?"minimize":"maximize"}"
              ></oryx-icon>
            </button>
          `)}
      </nav>
      <slot></slot>
    `}render(){return s`
      <dialog ?open=${this.open} @submit=${this.handleSubmit} tabindex="-1">
        <form method="dialog">${this.renderTemplate()}</form>
      </dialog>
    `}resize(a){this.maximize=a!=null?a:!this.maximize}handleSubmit(a){var b;a.preventDefault(),!this.dispatchEvent(new CustomEvent("beforeclose",{cancelable:!0,bubbles:!0,composed:!0}))||((b=this.dialog)==null||b.close(),this.open=!1,this.resize(!1))}}e.styles=[v,y,h,m];o([t({reflect:!0}),i("design:type",String)],e.prototype,"type",void 0);o([t({reflect:!0}),i("design:type",String)],e.prototype,"position",void 0);o([t({type:Boolean,attribute:"not-closable"}),i("design:type",Object)],e.prototype,"notClosable",void 0);o([t({type:Boolean,reflect:!0}),i("design:type",Object)],e.prototype,"open",void 0);o([t({type:Boolean,attribute:"not-resizable"}),i("design:type",Object)],e.prototype,"notResizable",void 0);o([t({type:Boolean,reflect:!0}),i("design:type",Boolean)],e.prototype,"maximize",void 0);o([t(),i("design:type",Object)],e.prototype,"navAriaLabel",void 0);o([t(),i("design:type",Object)],e.prototype,"closeButtonAriaLabel",void 0);o([t(),i("design:type",Object)],e.prototype,"minimizeButtonAriaLabel",void 0);o([t(),i("design:type",Object)],e.prototype,"maximizeButtonAriaLabel",void 0);export{e as DrawerComponent};
