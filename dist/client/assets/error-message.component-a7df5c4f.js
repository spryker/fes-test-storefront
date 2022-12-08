import{c as t,d as r,y as s,_ as i,v as a,g as c}from"./index-74abacf3.js";const l=t`
  :host {
    --oryx-icon-size: 15px;
    --oryx-icon-color: currentColor;

    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--oryx-color-error-300);
    font-size: 12px;
  }
`,o=class extends r{render(){return s`
      ${this.message?s`<oryx-icon type="warning"></oryx-icon> ${this.message}`:s`<slot></slot>`}
    `}};let e=o;(()=>{o.styles=[l]})();i([a(),c("design:type",String)],e.prototype,"message",void 0);export{e as ErrorMessageComponent};
