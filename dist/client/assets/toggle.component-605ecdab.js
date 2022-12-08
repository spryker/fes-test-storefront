import{c as s,d as n,y as a,_ as o,v as r,g as i}from"./index-41c5945f.js";import"./input.styles-dce2c601.js";import{E as l}from"./input.component-729fa045.js";import"./screen-c0aae3c9.js";import"./query.util-87342f84.js";import"./getControl-bdad11f5.js";const d=s`
  :host {
    display: block;
  }

  :host([hasError]) ::slotted(input) {
    border-color: var(--oryx-color-error-300);
  }

  ::slotted(:not(input)) {
    position: relative;
  }

  ::slotted(:is(button, a[href]):not([tabindex='-1'])) {
    position: relative;
    z-index: 1;
  }

  input::after,
  ::slotted(input)::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 1;
  }

  ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  input,
  ::slotted(input) {
    appearance: none;
    display: block;
    padding: 1px;
    min-width: 40px;
    height: 20px;
    margin: 0;
    background: var(--oryx-color-neutral-300);
    border-radius: 24px;
    border: 1px solid transparent;
    outline: none;
  }

  input:not(:disabled),
  ::slotted(input:not(:disabled)) {
    cursor: pointer;
  }

  input::before,
  ::slotted(input)::before {
    content: '';
    position: relative;
    display: block;
    inset-inline-start: 0;
    width: 16px;
    height: 16px;
    background: var(--oryx-color-canvas-100);
    border-radius: 50%;
    transition: var(--oryx-transition-time);
  }

  input:checked::before,
  ::slotted(input:checked)::before {
    inset-inline-start: calc(100% - 16px);
  }

  input:hover,
  input:active,
  input:focus-visible,
  ::slotted(input:hover),
  ::slotted(input:active),
  ::slotted(input:focus-visible) {
    background: var(--oryx-color-neutral-400);
  }

  input:checked:hover,
  input:checked:active,
  input:checked:focus-visible,
  ::slotted(input:checked:hover),
  ::slotted(input:checked:active),
  ::slotted(input:checked:focus-visible) {
    background: var(--oryx-color-primary-400);
  }

  input:focus-visible,
  input:checked:focus-visible,
  ::slotted(input:focus-visible),
  ::slotted(input:checked:focus-visible) {
    border-color: var(--oryx-color-canvas-100);
    box-shadow: 0 0 3px var(--oryx-color-focus);
  }

  input:checked,
  ::slotted(input:checked) {
    background: var(--oryx-color-primary-300);
  }

  input:disabled,
  input:checked:disabled,
  ::slotted(input:disabled),
  ::slotted(input:checked:disabled) {
    background: var(--oryx-color-canvas-500);
  }

  [hasErrorContent] {
    margin-block-start: 1px;
  }
`,e=class extends n{constructor(){super(...arguments),this.errorController=new l(this)}render(){return a`
      <label>
        <slot><input type="checkbox" /></slot>
      </label>
      ${this.errorController.render()}
    `}};let t=e;(()=>{e.styles=d})();o([r(),i("design:type",String)],t.prototype,"errorMessage",void 0);o([r({type:Boolean}),i("design:type",Boolean)],t.prototype,"hasError",void 0);export{t as ToggleComponent};
