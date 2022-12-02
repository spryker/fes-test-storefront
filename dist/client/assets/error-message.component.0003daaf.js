import{c as r,d as s,y as e,_ as t,v as a,g as n}from"./index.e698feb0.js";const i=r`
  :host {
    --oryx-icon-size: 15px;
    --oryx-icon-color: currentColor;

    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--oryx-color-error-300);
    font-size: 12px;
  }
`;class o extends s{render(){return e`
      ${this.message?e`<oryx-icon type="warning"></oryx-icon> ${this.message}`:e`<slot></slot>`}
    `}}o.styles=[i];t([a(),n("design:type",String)],o.prototype,"message",void 0);export{o as ErrorMessageComponent};
