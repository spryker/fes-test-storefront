import{c as t}from"./index.7349b146.js";import{i as r,b as o}from"./base.styles.961e10c3.js";const s=t`
  :host(${r}) :is(oryx-icon-button, oryx-button) {
    transition-duration: 0.6s;
    transition-property: transform;
  }

  :host(${r}) details[open] oryx-icon-button {
    transform: rotate(-180deg);
  }

  :host(${r}) details[open] oryx-icon-button oryx-icon {
    transform: rotate(-180deg);
  }
`,e=t`
  :host(${o}) {
    border-radius: var(--oryx-border-radius-small);
    border: solid 1px var(--oryx-color-canvas-500);
    position: relative;
  }

  :host(${o}) :is(summary, summary + *) {
    padding-inline: 20px;
  }

  :host(${o}) slot[name='side-dish']::slotted(*) {
    margin-inline-start: 20px;
  }

  :host(${o}:hover) {
    box-shadow: var(--oryx-elevation-0) var(--oryx-elevation-color);
  }

  :host(${o}:active) {
    border-color: var(--oryx-color-primary-400);
  }

  :host(${o}) summary {
    padding-block: 16px 13px;
  }

  :host(${o}) summary::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: var(--oryx-border-radius-small);
  }

  /* 
    We isolate this style for both inline/block since "storybook-addon-pseudo-states"
    doesn't support us otherwise.
  */
  summary:focus-visible::after {
    box-shadow: var(--oryx-box-shadow-focus);
  }

  :host(${o}) oryx-icon-button {
    color: var(--oryx-color-ink);
  }

  :host(${o}) slot[name='header'] {
    font-size: 16px;
    font-weight: 600;
  }

  :host(${o}) slot:not([name]) {
    display: block;
    padding-block: 13px;
  }
`,i={styles:[s,e]};export{i as collapsibleStorefrontUI};
