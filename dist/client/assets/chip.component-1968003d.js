import{c as a,d as l,y as i,_ as r,v as t,g as s}from"./index-41c5945f.js";import"./chip.model-ebf28ca0.js";const n=a`
  :host {
    display: inline-block;
    padding-inline: 12px;
    line-height: 24px;
    flex-grow: 0;
    flex-shrink: 0;
    height: 24px;
    color: var(--c, var(--oryx-color-neutral-300));
    background-color: var(--bg, var(--oryx-color-canvas-300));
  }

  slot {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  :host([dense]) {
    padding-inline: 7px;
  }
`,o=class extends l{render(){return i`<slot></slot>`}};let e=o;(()=>{o.styles=[n]})();r([t({reflect:!0}),s("design:type",String)],e.prototype,"appearance",void 0);r([t({reflect:!0}),s("design:type",Boolean)],e.prototype,"dense",void 0);export{e as ChipComponent};
