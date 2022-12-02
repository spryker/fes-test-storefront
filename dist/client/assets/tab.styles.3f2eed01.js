import{m as o}from"./screen.63347f27.js";import{c as r}from"./index.357aef3f.js";const t=r`
  :host {
    display: flex;
    flex: 1 0 auto;
    min-height: 46px;
    min-width: 90px;
    border-block-end: 4px solid var(--oryx-color-canvas-500);
    color: var(--oryx-color-neutral-300);
    background: none;
    line-height: var(--oryx-line-height-base);
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    margin: 0;
    gap: 4px;
  }

  :host(:not([selected]):hover) {
    color: var(--oryx-color-ink);
    border-color: var(--oryx-color-neutral-400);
  }

  :host([selected]) {
    border-color: var(--oryx-color-primary-300);
    color: var(--oryx-color-primary-300);
  }

  :host([selected][error]) {
    border-color: var(--oryx-color-error-300);
    color: var(--oryx-color-error-300);
  }

  :host(:not([selected])[error]:hover) {
    color: var(--oryx-color-error-300);
    background: none;
    border-color: var(--oryx-color-neutral-400);
  }

  :host(:not([selected])[error]) {
    border-color: var(--oryx-color-canvas-500);
    color: var(--oryx-color-error-300);
  }
`,e=r`
  :host {
    border-width: 2px;
  }
`,a=[{media:o,css:e}];export{t as baseStyles,a as screenStyles};
