import{c as o,d as r,y as e}from"./index.53aa1d0b.js";const s=o`
  :host {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    position: absolute;
    user-select: none;
    transform-origin: left top;
    transform: scaleY(var(--oryx-popover-visible, 0));
    z-index: var(--oryx-popover-z-index, 2);
  }

  :host([show]) {
    --oryx-popover-visible: 1;
  }
`,t=o`
  :host {
    background-color: var(--oryx-color-canvas-100);
    box-shadow: var(--oryx-elevation-2) var(--oryx-elevation-color);
    border-radius: var(--oryx-border-radius-small);
    transition: transform var(--oryx-transition-time) ease-in-out;
  }
`;class a extends r{render(){return e`<slot></slot>`}}a.styles=[s,t];export{a as PopoverComponent};
