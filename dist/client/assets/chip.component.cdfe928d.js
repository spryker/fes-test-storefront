import{c as a,d as s,y as i,_ as o,v as r,g as t}from"./index.357aef3f.js";import"./chip.model.1f5952d8.js";const l=a`
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
`;class e extends s{render(){return i`<slot></slot>`}}e.styles=[l];o([r({reflect:!0}),t("design:type",String)],e.prototype,"appearance",void 0);o([r({reflect:!0}),t("design:type",Boolean)],e.prototype,"dense",void 0);export{e as ChipComponent};
