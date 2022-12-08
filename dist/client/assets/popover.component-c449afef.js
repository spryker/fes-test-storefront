import{c as s,d as e,y as t}from"./index-41c5945f.js";const a=s`
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
`,i=s`
  :host {
    background-color: var(--oryx-color-canvas-100);
    box-shadow: var(--oryx-elevation-2) var(--oryx-elevation-color);
    border-radius: var(--oryx-border-radius-small);
    transition: transform var(--oryx-transition-time) ease-in-out;
  }
`,o=class extends e{render(){return t`<slot></slot>`}};let r=o;(()=>{o.styles=[a,i]})();export{r as PopoverComponent};
