import{c as o}from"./index-41c5945f.js";import{m as r,l as t}from"./screen-c0aae3c9.js";const e=o`
  slot[name='prefix'],
  slot[name='suffix'] {
    display: flex;
    align-items: center;
  }

  slot[name='prefix'] {
    border-start-start-radius: calc(var(--oryx-border-radius) - 2px);
    border-end-start-radius: calc(var(--oryx-border-radius) - 2px);
  }

  slot[name='prefix'] > *,
  slot[name='prefix']::slotted(*) {
    margin-inline-start: 10px;
  }

  slot[name='suffix'] {
    border-start-end-radius: calc(var(--oryx-border-radius) - 2px);
    border-end-end-radius: calc(var(--oryx-border-radius) - 2px);
  }

  /* force some margin whenever there's additional content before the suffix */
  *:not(slot) + slot[name='suffix'] {
    margin-inline-start: 10px;
  }

  slot[name='suffix'] > *,
  slot[name='suffix']::slotted(*) {
    margin-inline-end: 10px;
  }

  :host([prefixFill]) slot[name='prefix'],
  :host([suffixFill]) slot[name='suffix'] {
    background-color: var(--oryx-color-canvas-200);
    white-space: nowrap;
  }

  :host([prefixFill]) slot[name='prefix'] {
    padding-inline-end: 10px;
  }

  :host([suffixFill]) slot[name='suffix'] {
    padding-inline-start: 10px;
  }
`,a=o`
  :host([hasError]) {
    border-color: var(--oryx-color-error-300);
  }

  :host([disabled]) slot[name='error'] ::slotted(oryx-icon) {
    color: var(--oryx-color-neutral-200);
  }
`,l=o`
  :host([floatLabel]) {
    position: relative;
  }

  :host([floatLabel]) slot[name='label']::slotted(*) {
    pointer-events: none;
  }

  :host([floatLabel]) slot[name='label'] {
    text-transform: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--oryx-color-neutral-300);
    position: absolute;
    top: 17px;
    inset-inline-start: calc(var(--float-label-start-gap, 0px) + 13px);
    max-width: calc(100% - 26px - var(--float-label-start-gap, 0px));
    z-index: 1;
    transition: 100ms;
    /* stylelint-disable-next-line */
    background: linear-gradient(
      to bottom,
      transparent 10px,
      var(--_label-background-color) 10px
    );
  }

  :host(oryx-select[floatLabel]) slot[name='label'] {
    max-width: calc(100% - 54px - var(--float-label-start-gap, 0px));
  }

  :host([floatLabel]),
  :host([floatLabel]) ::slotted(select:invalid) {
    --oryx-color-placeholder: transparent;
  }

  :host([floatLabel]) slot[name='label'],
  :host([floatLabel]) slot[name='label']::slotted(*) {
    cursor: text;
  }

  :host([floatLabel]:is(:focus-within, [has-value])) slot[name='label'] {
    --_label-background-color: var(--oryx-color-canvas-100);

    color: var(--oryx-color-neutral-400);
    font-size: 12px;
    padding: 3px 8px;
    top: -10px;
    inset-inline-start: 20px;
    max-width: calc(100% - 56px);
  }

  :host([floatLabel][has-prefix]:is(:focus-within, [has-value]))
    slot[name='label'] {
    inset-inline-start: calc(var(--float-label-start-gap, 0px) + 7px);
    max-width: calc(100% - 30px - calc(var(--float-label-start-gap, 0px)));
  }

  :host([floatLabel][has-value][disabled]) slot[name='label'] {
    --_label-background-color: var(--oryx-color-canvas-200);
  }
`,s=o`
  :host([floatLabel]) slot[name='label'] {
    top: 13px;
  }
`,n=[{media:r,css:s}],i=o`
  :host {
    display: flex;
    flex-direction: column;
    border-color: var(--oryx-color-canvas-400);
  }

  label {
    border-color: inherit;
    cursor: pointer;
  }

  slot[name='label'] {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: inherit;
    color: var(--oryx-color-ink);
    font-weight: 400;
    font-size: 12px;
    text-transform: var(--oryx-form-label-transform);
    position: relative;
    top: -4px;
    line-height: 20px;
  }

  .control {
    display: flex;
    align-items: stretch;
    position: relative;
    border-style: solid;
    border-width: 2px;
    border-color: inherit;
    border-radius: var(--oryx-border-radius);
    transition: all var(--oryx-transition-time);
    color: var(--oryx-color-neutral-300);
    background-color: var(--oryx-color-canvas-100);
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) .control {
    border-radius: var(--oryx-border-radius);
    background-color: var(--oryx-color-canvas-200);
  }

  :host(:not([hasError])) .control:hover,
  :host(:not([hasError])) .control:focus-within {
    border-color: var(--oryx-color-neutral-100);
  }

  :host(:not([hasError])) .control:focus-within {
    border-color: var(--oryx-color-focus);
    transition-property: border;
  }

  /* visible focus effect */
  :host([visible-focus]:not([hasError])) .control:focus-within {
    box-shadow: var(--oryx-elevation-0) var(--oryx-color-primary-300);
    transition-property: box-shadow, border;
  }

  slot:not([name])::slotted(*:-webkit-autofill) {
    -webkit-text-fill-color: var(--oryx-color-ink);
    box-shadow: 0 0 0 1000px var(--oryx-color-canvas-100) inset;
  }

  input,
  slot:not([name])::slotted(*) {
    height: 44px;
  }

  input,
  ::slotted(input) {
    box-sizing: border-box;
    text-overflow: ellipsis;
  }

  input,
  ::slotted(input),
  textarea,
  ::slotted(textarea) {
    width: 100%;
    box-sizing: border-box;
    padding: 7px 11px;
    background-color: transparent;
    border: none;
    outline: none;
    font: inherit;
    color: var(--oryx-color-ink);
    border-radius: var(--oryx-border-radius);
    line-height: 24px;
  }

  ::slotted(input[disabled]),
  ::slotted(textarea[disabled]) {
    color: var(--oryx-color-neutral-400);
    background-color: var(--oryx-color-canvas-200);
  }

  textarea,
  ::slotted(textarea) {
    min-height: 80px;
    min-width: 100%;
  }

  [hasErrorContent] {
    margin-block-start: 7px;
  }
`,c=o`
  input,
  slot:not([name])::slotted(*) {
    height: 38px;
  }
`,x=[{media:t,css:c}],d=[i,l,a,e],p=[...x,...n],h=Object.freeze(Object.defineProperty({__proto__:null,baseStyles:d,screenStyles:p},Symbol.toStringTag,{value:"Module"}));export{d as b,a as e,h as i,p as s};
