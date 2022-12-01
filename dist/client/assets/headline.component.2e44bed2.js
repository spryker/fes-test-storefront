import{c as t,d as e,y as o}from"./index.4dee5cd5.js";const h=t`
  :host {
    display: block;
  }

  ::slotted(h1),
  ::slotted(h2),
  ::slotted(h3),
  ::slotted(h4),
  ::slotted(h5),
  ::slotted(h6) {
    margin-block: 0;
  }

  ::slotted(h1) {
    font-size: var(--oryx-font-size-h1);
    line-height: var(--oryx-line-height-h1);
    font-weight: var(--oryx-font-weight-semibold);
  }

  ::slotted(h2) {
    font-size: var(--oryx-font-size-h2);
    line-height: var(--oryx-line-height-h2);
    font-weight: var(--oryx-font-weight-semibold);
  }

  ::slotted(h3) {
    font-size: var(--oryx-font-size-h3);
    line-height: var(--oryx-line-height-h3);
    font-weight: var(--oryx-font-weight-medium);
  }

  ::slotted(h4) {
    font-size: var(--oryx-font-size-h4);
    line-height: var(--oryx-line-height-h4);
    font-weight: var(--oryx-font-weight-medium);
  }

  ::slotted(h5) {
    font-size: var(--oryx-font-size-h5);
    line-height: var(--oryx-line-height-h5);
    font-weight: var(--oryx-font-weight-semibold);
  }

  ::slotted(h6) {
    font-size: var(--oryx-font-size-h6);
    line-height: var(--oryx-line-height-h6);
    font-weight: var(--oryx-font-weight-medium);
  }
`;class i extends e{render(){return o`<slot></slot>`}}i.styles=h;export{i as HeadlineComponent};
