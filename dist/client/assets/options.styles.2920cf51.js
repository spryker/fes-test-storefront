import{m as n}from"./screen.63347f27.js";import{c as o}from"./index.53aa1d0b.js";const i=o`
  :host {
    display: block;
  }

  :host(:not([show-options])) ul {
    display: none;
  }

  :host > span {
    display: flex;
    align-items: center;
    padding-block: var(--oryx-space-2);
    border-block-start: 2px solid var(--oryx-color-canvas-300);
  }

  oryx-button {
    --_color-text: var(--oryx-color-primary-300);

    margin-inline-start: var(--oryx-space-2);
  }

  ul {
    margin: 0;
    padding-block-end: var(--oryx-space-2);
    padding-inline: 0;
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li:not(:last-child) {
    margin-bottom: var(--oryx-space);
  }

  li span {
    margin-inline-end: var(--oryx-space);
  }
`,a=o`
  :host {
    margin-inline-end: calc(-1 * var(--oryx-space-4));
  }

  ul {
    padding-inline-end: var(--oryx-space-4);
  }
`,s=[{media:n,css:a}];export{i as optionsBaseStyles,s as optionsScreenStyles};
