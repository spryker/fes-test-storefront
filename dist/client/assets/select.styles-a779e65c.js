import{c as e}from"./index-4d2c92b7.js";import"./common-0ee98dc0.js";import"./popover.component-907eb365.js";import"./typeahead.component-38617a9f.js";import"./typeahead.model-c998e806.js";import{baseStyles as o,screenStyles as t}from"./typeahead.styles-f3f9a55e.js";const r=e`
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
