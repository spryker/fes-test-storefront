import{c as s,d as a,y as i,_ as e,v as o,g as t}from"./index-4d2c92b7.js";import"./chip.model-ebf28ca0.js";const l=s`
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
`;class r extends a{static{this.styles=[l]}render(){return i`<slot></slot>`}}e([o({reflect:!0}),t("design:type",String)],r.prototype,"appearance",void 0);e([o({reflect:!0}),t("design:type",Boolean)],r.prototype,"dense",void 0);export{r as ChipComponent};
