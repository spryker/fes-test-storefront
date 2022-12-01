import{c as a,d as n,y as i,_ as r,v as e,g as t}from"./index.4dee5cd5.js";const s=a`
  :host {
    --oryx-icon-size: 12px;

    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
    height: 24px;
    gap: 5px;
    padding-inline-start: 10px;
    color: var(--oryx-color-ink);
    background: var(--oryx-color-canvas-500);
    border-radius: var(--oryx-border-radius-large);
    pointer-events: none;
  }

  slot {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    all: unset;
    cursor: pointer;
    pointer-events: all;
    padding-inline: 7px;
    height: inherit;
    border-start-end-radius: var(--oryx-border-radius-large);
    border-end-end-radius: var(--oryx-border-radius-large);
    color: var(--oryx-color-canvas-100);
    background: var(--oryx-color-neutral-200);
  }

  button:focus-visible,
  button:hover {
    background: var(--oryx-color-neutral-300);
    transition: var(--oryx-transition-time) background;
  }

  button:focus-visible {
    outline: 1px solid var(--oryx-color-canvas-100);
    outline-offset: -1px;
    box-shadow: 0 0 3px var(--oryx-color-primary-300);
  }

  :host([disabled]) * {
    color: var(--oryx-color-neutral-300);
  }

  button:disabled {
    background: inherit;
    pointer-events: none;
    cursor: default;
  }
`,c="oryx.close";class o extends n{constructor(){super(...arguments),this.removeButtonAriaLabel="Remove tag"}render(){return i`
      <slot></slot>
      <button
        ?disabled=${this.disabled}
        aria-label=${this.removeButtonAriaLabel}
      >
        <oryx-icon type="close"></oryx-icon>
      </button>
    `}}o.styles=[s];r([e({type:Boolean,reflect:!0}),t("design:type",Boolean)],o.prototype,"disabled",void 0);r([e(),t("design:type",Object)],o.prototype,"removeButtonAriaLabel",void 0);export{c as CLOSE_EVENT,o as TagComponent};
