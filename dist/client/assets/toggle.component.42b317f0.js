import{c as i,d as n,y as s,_ as e,v as o,g as r}from"./index.571dc3d3.js";import"./input.styles.38fc0133.js";import{E as a}from"./input.component.3cc0ab03.js";import"./screen.63347f27.js";import"./query.util.ad546b12.js";import"./getControl.bb441626.js";const l=i`
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
`;class t extends n{constructor(){super(...arguments),this.errorController=new a(this)}render(){return s`
      <label>
        <slot><input type="checkbox" /></slot>
      </label>
      ${this.errorController.render()}
    `}}t.styles=l;e([o(),r("design:type",String)],t.prototype,"errorMessage",void 0);e([o({type:Boolean}),r("design:type",Boolean)],t.prototype,"hasError",void 0);export{t as ToggleComponent};
//# sourceMappingURL=toggle.component.42b317f0.js.map
