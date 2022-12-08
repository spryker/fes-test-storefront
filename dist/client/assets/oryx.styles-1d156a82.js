import{m as t}from"./screen-c0aae3c9.js";import{c as o}from"./index-74abacf3.js";const a=o`
  oryx-typeahead {
    --oryx-popover-maxheight: 480px;
    --oryx-border-radius: 2px;
    --oryx-popover-vertical-offset: 0;
    --oryx-popover-distance: 62px;

    max-width: 400px;
  }

  [slot='option'] {
    position: relative;
    display: flex;
    overflow: hidden;
  }

  [slot='option'] > * {
    position: relative;
    align-items: flex-start;
    flex-grow: 1;
    overflow: auto;
  }

  h5 {
    font-size: 16px;
    font-weight: var(--oryx-font-medium);
  }

  h5,
  li:not(:last-child) {
    margin: 0 0 10px;
  }

  ul {
    list-style: none;
    padding-inline: 0;
    margin: 0;
  }

  ul:not(:last-child) {
    margin-bottom: 20px;
  }

  section {
    padding: 20px;
  }

  section:first-child:not(:only-child) {
    padding-bottom: 0;
  }

  [slot='empty'] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8f8f8f;
    padding: 30px;
    box-sizing: border-box;
  }

  [slot='empty'] oryx-icon {
    color: #b2b2b2;
  }

  [slot='empty'] span {
    font-weight: 400;
    line-height: 17px;
    margin-inline-start: 10px;
  }

  [slot='option']::before,
  [slot='option']::after {
    display: none;
    content: '';
    position: absolute;
    inset-inline-start: 0;
    width: 100%;
    z-index: 1;
  }

  [slot='option']::before {
    top: 0;
  }

  [slot='option']::after {
    bottom: 0;
  }

  :host([scrollable-top]) [slot='option']::before,
  :host([scrollable-bottom]) [slot='option']::after {
    display: block;
  }

  oryx-typeahead:not([open]) oryx-icon-button[slot='suffix'] {
    display: none;
  }

  .product {
    position: relative;
    display: block;
    padding-block: 5px;
    padding-inline: 65px 5px;
    text-decoration: none;
    min-height: 60px;
    box-sizing: border-box;
    margin-bottom: 5px;
  }

  product-media {
    --image-max-width: 50px;
    --image-max-height: 50px;

    position: absolute;
    top: 5px;
    inset-inline-start: 5px;
  }
`,i=o`
  :host([stretched]) {
    --oryx-popover-width: auto;
  }

  oryx-typeahead {
    --oryx-popover-distance: 48px;
  }

  oryx-icon-button[slot='suffix'] {
    display: none;
  }

  :host([stretched]) [slot='option'] > * {
    min-width: 530px;
    display: flex;
  }

  section {
    flex: 1 1 auto;
  }

  section:first-child:not(:only-child) {
    padding-bottom: 20px;
  }
`,l=[{media:t,css:i}],s=o`
  [slot='prefix'] {
    color: var(--oryx-color-neutral-400);
  }

  input::placeholder {
    color: var(--oryx-color-neutral-300);
  }

  input {
    padding-block: 16px;
    height: 56px;
  }

  oryx-button[slot='suffix'] {
    --_color-text: var(--oryx-color-primary-300);
  }

  oryx-icon-button[slot='suffix'] {
    --oryx-icon-button-color: var(--oryx-color-neutral-400);
  }

  oryx-icon-button[slot='suffix'] oryx-icon {
    --oryx-icon-size: 16px;
  }

  [slot='option']::before,
  [slot='option']::after {
    height: 30px;
  }

  [slot='option']::before {
    /* stylelint-disable-next-line */
    background: linear-gradient(180deg, #fff 0, #fff0 100%);
  }

  [slot='option']::after {
    /* stylelint-disable-next-line */
    background: linear-gradient(0deg, #fff 0, #fff0 100%);
  }

  content-link::part(link) {
    padding: 0;
    white-space: normal;
    border-radius: 0;
  }

  .product {
    transition: background var(--oryx-transition-time);
    background: transparent;
    color: var(--oryx-color-neutral-300);
  }

  .product:hover {
    background: var(--oryx-color-canvas-200);
  }

  .product product-title {
    margin-bottom: 4px;
  }
`,e=o`
  input {
    padding-block: 9px;
    height: 42px;
  }
`,p=[{media:t,css:e}];export{l as a,a as b,e as c,p as d,s};
