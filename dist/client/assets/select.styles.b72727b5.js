import{c as e}from"./index.d896b0c8.js";import"./common.49548711.js";import"./popover.component.35097858.js";import"./typeahead.component.974c8f5c.js";import"./typeahead.model.166b6c30.js";import{baseStyles as o,screenStyles as t}from"./typeahead.styles.0dc6432e.js";const r=e`
  [filterInput] {
    display: none;
    height: 38px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    width: 100%;
    padding: 7px 11px;
    background-color: transparent;
    border: none;
    outline: none;
    font: inherit;
    line-height: 24px;
    color: var(--oryx-color-ink);
    border-radius: var(--oryx-border-radius);
    white-space: nowrap;
    overflow: hidden;
  }

  :host([filterSelect]) [filterInput] {
    display: initial;
  }

  :host([filterSelect]) ::slotted(select) {
    display: none;
  }
`,s=e`
  :host([floatLabel]) slot[name='label'],
  :host([floatLabel]) slot[name='label']::slotted(*) {
    cursor: pointer;
  }
`,l=e`
  :host {
    cursor: pointer;
  }

  slot::slotted(select),
  slot::slotted(input:not([readonly])) {
    cursor: pointer;
    background-color: transparent;
  }

  ::slotted(input),
  input {
    cursor: inherit;
  }

  ::slotted(select) {
    width: 100%;
    height: 38px;
    padding: 7px 11px;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--oryx-color-ink);
    pointer-events: none;
    font: inherit;
    text-overflow: ellipsis;
    appearance: none;
    /* stylelint-disable */
    /* requires by safari < 15.4 */
    -webkit-appearance: none;
    /* stylelint-enable */
  }

  oryx-icon[type='dropdown'] {
    --oryx-icon-size: var(--oryx-icon-size-medium);
  }

  ::slotted(select:invalid),
  :host(:not([has-value])) ::slotted(select) {
    color: var(--oryx-color-placeholder);
  }
`,y=[l,r,o,s],b=[...t];export{l as a,y as b,b as c,r as s};
//# sourceMappingURL=select.styles.b72727b5.js.map
