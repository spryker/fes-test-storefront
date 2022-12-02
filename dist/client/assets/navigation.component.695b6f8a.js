import{c as s,d as r,y as i,_ as l,v as a,g as n}from"./index.d896b0c8.js";class c{constructor(o){this.host=o,this.isCollapsed=!0,this.host.addController(this)}hostConnected(){this.toggle(this.isCollapsed),window.addEventListener("keydown",o=>{!this.isTyping(o)&&o.key==="["&&this.toggle()})}toggle(o){this.host.toggleAttribute("collapsed",o),document.body.style.setProperty("--navigation-collapsed",this.host.hasAttribute("collapsed")?"1":"0")}isTyping(o){return["INPUT"].includes(o.target.tagName)}}const g=s`
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
`;class t extends r{constructor(){super(...arguments),this.toggleButtonAriaLabel="collapse navigation",this.collapse=new c(this)}render(){return i`
      <svg viewBox="0 0 121 50">
        <use href="assets/full-logo.svg#logo" />
        <use href="assets/full-logo.svg#text" class="letter-logo" />
      </svg>
      <slot></slot>
      <button @click=${this.toggle} aria-label=${this.toggleButtonAriaLabel}>
        <oryx-icon type="back" size="medium"></oryx-icon>
      </button>
    `}toggle(){this.collapse.toggle()}}t.styles=[g];l([a(),n("design:type",String)],t.prototype,"toggleButtonAriaLabel",void 0);export{t as NavigationComponent};
//# sourceMappingURL=navigation.component.695b6f8a.js.map
