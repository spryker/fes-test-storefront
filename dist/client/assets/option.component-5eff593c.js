import{c as n,d as l,y as i,K as d,_ as e,v as t,g as r}from"./index-74abacf3.js";const c=n`
  :host([hidden]) {
    display: none;
  }

  :host {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 42px;
    box-sizing: border-box;
    padding: 9px 13px;
    list-style: none;
    border: solid 1px transparent;
    border-radius: var(--oryx-border-radius-small);
    outline: none;
    transition: background var(--oryx-transition-time-medium);
    cursor: pointer;
  }

  oryx-icon.mark {
    --oryx-icon-size: var(--oryx-icon-size-small);

    display: none;
    color: var(--oryx-color-primary-300);
    margin-inline-start: auto;
  }

  :host([selected]) oryx-icon {
    display: flex;
  }

  :host(:hover),
  :host([highlight]) {
    background-color: var(--oryx-color-canvas-200);
  }

  :host([selected]) {
    background-color: var(--oryx-color-primary-100);
  }

  :host(:not([selected]):active) {
    background-color: var(--oryx-color-canvas-100);
  }

  :host(:active) {
    border-color: var(--oryx-color-primary-300);
    box-shadow: var(--oryx-elevation-0) var(--oryx-color-primary-300);
    transition: box-shadow, border;
    transition-duration: var(--oryx-transition-time);
  }

  :host([hide]) {
    padding: 0;
    max-height: 0;
    overflow: hidden;
    border: 0;
  }

  slot:not([name]) {
    display: inline;
  }

  ::slotted(mark),
  mark {
    background-color: transparent;
    color: var(--oryx-color-primary-300);
    display: inline;
  }
`,a=class extends l{render(){return i` ${d(!!this.icon,()=>i`<oryx-icon .type=${this.icon}></oryx-icon>`)}
      <slot>${this.value}</slot>
      <oryx-icon class="mark" type="mark"></oryx-icon>`}get value(){return this._value??this.innerText}set value(s){this._value=s}};let o=a;(()=>{a.styles=[c]})();e([t(),r("design:type",Object)],o.prototype,"icon",void 0);e([t({type:Boolean,reflect:!0}),r("design:type",Boolean)],o.prototype,"selected",void 0);e([t({type:Boolean,reflect:!0}),r("design:type",Boolean)],o.prototype,"hide",void 0);e([t(),r("design:type",Object),r("design:paramtypes",[Object])],o.prototype,"value",null);export{o as OptionComponent};
