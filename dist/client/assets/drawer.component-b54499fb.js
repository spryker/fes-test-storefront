import{c as s,z as r,d as c,y as n,K as b,_ as e,v as o,g as t}from"./index-4d2c92b7.js";import{P as a}from"./common-0ee98dc0.js";var p;(function(l){l.PRIMARY="primary",l.SECONDARY="secondary"})(p||(p={}));const u=s`
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

  :host(:not([position='${r(a.END)}'])) dialog {
    inset-inline-start: 0;
  }

  :host([position='${r(a.END)}']) dialog {
    inset-inline-end: 0;
    transform-origin: right top;
  }

  :host(:not([position='${r(a.END)}'])) nav {
    order: 1;
  }

  :host([position='${r(a.END)}']) dialog::before {
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([maximize]) {
    --oryx-aside-width: 100%;
  }
`,v=s`
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
`,y=s`
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
`,h=s`
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

  :host(:not([position='${r(a.END)}'])) button,
  :host(:not([position='${r(a.END)}'])) button::before {
    border-start-end-radius: var(--oryx-border-radius);
    border-end-end-radius: var(--oryx-border-radius);
  }

  :host([position='${r(a.END)}']) button,
  :host([position='${r(a.END)}']) button::before {
    border-start-start-radius: var(--oryx-border-radius);
    border-end-start-radius: var(--oryx-border-radius);
  }
`;class i extends c{constructor(){super(...arguments),this.notClosable=!1,this.open=!1,this.notResizable=!1,this.navAriaLabel="drawer navigation",this.closeButtonAriaLabel="close the drawer",this.minimizeButtonAriaLabel="minimize the drawer",this.maximizeButtonAriaLabel="maximize the drawer"}static{this.styles=[u,v,y,h]}get dialog(){return this.shadowRoot?.querySelector("dialog")}renderTemplate(){return n`
      <nav aria-label=${this.navAriaLabel}>
        ${b(!this.notClosable,()=>n`
            <button value="cancel" aria-label=${this.closeButtonAriaLabel}>
              <oryx-icon type="close"></oryx-icon>
            </button>
          `)}
        ${b(!this.notResizable,()=>n`
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
    `}render(){return n`
      <dialog ?open=${this.open} @submit=${this.handleSubmit} tabindex="-1">
        <form method="dialog">${this.renderTemplate()}</form>
      </dialog>
    `}resize(d){this.maximize=d??!this.maximize}handleSubmit(d){d.preventDefault(),!this.dispatchEvent(new CustomEvent("beforeclose",{cancelable:!0,bubbles:!0,composed:!0}))||(this.dialog?.close(),this.open=!1,this.resize(!1))}}e([o({reflect:!0}),t("design:type",String)],i.prototype,"type",void 0);e([o({reflect:!0}),t("design:type",String)],i.prototype,"position",void 0);e([o({type:Boolean,attribute:"not-closable"}),t("design:type",Object)],i.prototype,"notClosable",void 0);e([o({type:Boolean,reflect:!0}),t("design:type",Object)],i.prototype,"open",void 0);e([o({type:Boolean,attribute:"not-resizable"}),t("design:type",Object)],i.prototype,"notResizable",void 0);e([o({type:Boolean,reflect:!0}),t("design:type",Boolean)],i.prototype,"maximize",void 0);e([o(),t("design:type",Object)],i.prototype,"navAriaLabel",void 0);e([o(),t("design:type",Object)],i.prototype,"closeButtonAriaLabel",void 0);e([o(),t("design:type",Object)],i.prototype,"minimizeButtonAriaLabel",void 0);e([o(),t("design:type",Object)],i.prototype,"maximizeButtonAriaLabel",void 0);export{i as DrawerComponent};
