import{c as s,d as i,y as n,_ as l,v as d,g as c}from"./index-4d2c92b7.js";import{g as p}from"./getControl-ea6b3b29.js";import"./query.util-00243645.js";const u=s`
  :host {
    --oryx-icon-size: var(--oryx-icon-size-large);

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: var(--oryx-border-radius-small);
  }

  :host([has-text]),
  :host([has-text]) ::slotted(input)::after {
    border-radius: var(--oryx-border-radius-large);
  }

  :host([hasError])
    ::slotted(:is(input, input:hover, input:checked, input:checked:hover))::after {
    border-color: var(--oryx-color-error-300);
  }

  :host,
  ::slotted(*) {
    transition: var(--oryx-transition-time);
  }

  :host(:not([has-text])) {
    gap: 0;
    padding: 7px;
  }

  :host([has-text][size='small']) {
    padding: 8px 12px;
  }

  :host([has-text]),
  :host([has-text][size='medium']) {
    padding: 8px 12px;
  }

  :host([has-text][size='large']) {
    padding: 12px 16px;
  }

  ::slotted([disabled]) {
    pointer-events: none;
  }

  ::slotted(input) {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    appearance: none;
    outline: none;
    border-radius: var(--oryx-border-radius-small);
  }

  ::slotted(input)::after {
    cursor: pointer;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--oryx-border-radius-small);
    background: var(--oryx-color-canvas-100);
    border: 1px solid var(--oryx-color-canvas-500);
  }

  ::slotted(input:hover:not([disabled]))::after {
    background: var(--oryx-color-canvas-200);
    border-color: var(--oryx-color-neutral-200);
    box-shadow: 0 1px 3px 0 var(--oryx-elevation-color-2);
  }

  ::slotted(input:active:not([disabled]))::after {
    background: var(--oryx-color-canvas-200);
    border-color: var(--oryx-color-neutral-300);
  }

  ::slotted(input:checked:active:not([disabled]))::after,
  ::slotted(input:checked:hover:not([disabled]))::after {
    border-color: var(--oryx-color-primary-400);
  }

  ::slotted(input:checked:active:not([disabled]))::after {
    background: var(--oryx-color-canvas-200);
  }

  ::slotted(input:focus-visible:not(:active))::after {
    box-shadow: 0 0 3px var(--oryx-color-primary-300),
      inset 0 0 0 1px var(--oryx-color-canvas-100),
      inset 0 0 0 2px var(--oryx-color-neutral-200);
    border: none;
  }

  ::slotted(input:checked:focus-visible:not(:active))::after {
    box-shadow: 0 0 3px var(--oryx-color-primary-300),
      inset 0 0 0 1px var(--oryx-color-primary-100),
      inset 0 0 0 2px var(--oryx-color-primary-300);
    border: none;
  }

  :host([hasError]) ::slotted(input:focus-visible:not(:active))::after {
    box-shadow: 0 0 3px var(--oryx-color-primary-300),
      inset 0 0 0 1px var(--oryx-color-error-300),
      inset 0 0 0 2px var(--oryx-color-neutral-200);
  }

  :host([hasError]) ::slotted(input:checked:focus-visible:not(:active))::after {
    box-shadow: 0 0 3px var(--oryx-color-primary-300),
      inset 0 0 0 1px var(--oryx-color-error-300),
      inset 0 0 0 2px var(--oryx-color-primary-300);
  }

  ::slotted(input[disabled])::after {
    background: var(--oryx-color-canvas-200);
    border-color: var(--oryx-color-neutral-200);
  }

  ::slotted(input:checked:not([disabled]))::after {
    border-color: var(--oryx-color-primary-300);
    background: var(--oryx-color-primary-100);
  }

  ::slotted(input:checked[disabled])::after {
    border-color: var(--oryx-color-neutral-300);
  }

  ::slotted(oryx-icon),
  ::slotted(span) {
    z-index: 1;
    pointer-events: none;
  }

  ::slotted(span) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ::slotted(oryx-icon) {
    color: var(--oryx-color-neutral-300);
  }

  :host([checked]:not([disabled])) ::slotted(oryx-icon) {
    color: var(--oryx-color-primary-300);
  }
`,a="oryx-gen";class x extends i{static{this.styles=[u]}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this.onInput)}disconnectedCallback(){this.removeEventListener("input",this.onInput)}render(){return n`<slot></slot>`}onInput(o){const t=o.target;this.toggleAttribute("checked",t.checked),this.isInRadioGroup(t)&&o.detail?.toString()!==a&&this.updateSiblings(t)}isInRadioGroup(o){return o.type==="radio"&&o.hasAttribute("name")}updateSiblings(o){Array.from(this.getRootNode().querySelectorAll(`[name=${o.getAttribute("name")}]`)).filter(r=>r!==o).forEach(r=>r.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0,detail:a})))}firstUpdated(){const o=p(this);this.toggleAttribute("has-text",!!this.getSpan()),this.toggleAttribute("disabled",o.hasAttribute("disabled")),this.toggleAttribute("checked",o.hasAttribute("checked")),new MutationObserver(r=>{for(const e of r)typeof e.attributeName=="string"&&this.toggleAttribute(e.attributeName)}).observe(o,{attributeFilter:["disabled"]})}getSpan(){return this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0}).find(o=>o.tagName.toLowerCase()==="span")}}l([d({type:Boolean}),c("design:type",Boolean)],x.prototype,"hasError",void 0);export{x as ToggleIconComponent};
