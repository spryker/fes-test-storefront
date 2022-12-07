import{c as e,d as s,y as i,_ as r,v as l,g as a}from"./index-4d2c92b7.js";class n{constructor(o){this.host=o,this.isCollapsed=!0,this.host.addController(this)}hostConnected(){this.toggle(this.isCollapsed),window.addEventListener("keydown",o=>{!this.isTyping(o)&&o.key==="["&&this.toggle()})}toggle(o){this.host.toggleAttribute("collapsed",o),document.body.style.setProperty("--navigation-collapsed",this.host.hasAttribute("collapsed")?"1":"0")}isTyping(o){return["INPUT"].includes(o.target.tagName)}}const c=e`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 250px;
    background-color: var(--oryx-color-canvas-100);
    box-shadow: var(--oryx-elevation-0) var(--oryx-elevation-color);
    transition: all var(--oryx-transition-time);
  }

  slot {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  svg {
    fill: var(--oryx-color-ink);
    margin: 15px;
    width: 120px;
    transition: inherit;
  }

  :host([collapsed]) {
    width: 96px;
    align-items: stretch;
  }

  :host([collapsed]) svg {
    margin-inline-start: 35px;
  }

  .letter-logo {
    transition: inherit;
  }

  :host([collapsed]) .letter-logo {
    opacity: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    position: absolute;
    inset-inline-end: -15px;
    bottom: 30px;
    border-radius: 100%;
    border: none;
    background-color: var(--oryx-color-canvas-100);
    color: var(--oryx-color-neutral-300);
    box-shadow: var(--oryx-elevation-0) var(--oryx-elevation-color);
    transition: inherit;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--oryx-color-primary-300);
    color: var(--oryx-color-canvas-100);
  }

  :host([collapsed]) button oryx-icon {
    transform: rotate(180deg);
  }

  ::slotted(*) {
    text-decoration: none;
  }
`;class g extends s{constructor(){super(...arguments),this.toggleButtonAriaLabel="collapse navigation",this.collapse=new n(this)}static{this.styles=[c]}render(){return i`
      <svg viewBox="0 0 121 50">
        <use href="assets/full-logo.svg#logo" />
        <use href="assets/full-logo.svg#text" class="letter-logo" />
      </svg>
      <slot></slot>
      <button @click=${this.toggle} aria-label=${this.toggleButtonAriaLabel}>
        <oryx-icon type="back" size="medium"></oryx-icon>
      </button>
    `}toggle(){this.collapse.toggle()}}r([l(),a("design:type",String)],g.prototype,"toggleButtonAriaLabel",void 0);export{g as NavigationComponent};
