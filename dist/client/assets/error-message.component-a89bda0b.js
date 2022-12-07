import{c as o,d as r,y as e,_ as s,v as t,g as a}from"./index-4d2c92b7.js";const i=o`
  :host {
    --oryx-icon-size: 15px;
    --oryx-icon-color: currentColor;

    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--oryx-color-error-300);
    font-size: 12px;
  }
`;class n extends r{static{this.styles=[i]}render(){return e`
      ${this.message?e`<oryx-icon type="warning"></oryx-icon> ${this.message}`:e`<slot></slot>`}
    `}}s([t(),a("design:type",String)],n.prototype,"message",void 0);export{n as ErrorMessageComponent};
