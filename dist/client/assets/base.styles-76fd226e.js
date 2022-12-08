import{z as n,c as t}from"./index-74abacf3.js";const e=n("[appearance=block]"),o=n("[appearance=inline]"),i=t`
  :host {
    display: block;
  }

  summary {
    outline: none;
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
  }

  details[open] slot[name='expanded'],
  details:not([open]) slot[name='collapsed'] {
    display: none;
  }

  oryx-icon-button {
    transition-duration: var(--oryx-transition-time-medium);
    transition-property: transform;
  }

  :is(oryx-icon-button, oryx-button) {
    display: flex;
    align-items: center;
    color: var(--oryx-color-primary-300);
  }

  :host(:not(${o})) :is(oryx-icon-button, oryx-button) {
    margin-inline-start: auto;

    /* we do not like to leverage standard UI of icon-button on the block appearance */
    pointer-events: none;
  }

  summary::marker,
  summary::-webkit-details-marker {
    display: none;
  }

  /** only apply pointer events at the icon button for inline appearance */
  :host(${o}) summary {
    pointer-events: none;
  }

  :host(${o}) :is(oryx-icon-button, oryx-button) {
    pointer-events: all;
  }

  :host(${e}) oryx-icon-button > span {
    padding: 2px;
  }

  slot[name='aside']::slotted(*) {
    margin-inline-start: auto;
  }
`;export{e as b,i as c,o as i};
