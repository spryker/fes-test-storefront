import{c as i,r as h,B as c,y as r,f as l,j as m,_ as d,h as p,ap as y}from"./index-4d2c92b7.js";import{C as u}from"./component.mixin-6d7092a2.js";import{i as a}from"./i18n.directive-8e3ebbd9.js";const x=i`
  :host {
    --oryx-tile-padding: 0;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .no-methods {
    text-align: center;
    line-height: 22px;
  }

  oryx-radio::part(label) {
    padding: 20px;
  }
`;let n=class extends u(){constructor(){super(...arguments),this.service=h(y),this.methods$=this.service.getMethods(),this.currentMethod$=new c(null)}static{this.styles=x}render(){return r`${l(m([this.methods$,this.currentMethod$]),([e,t])=>e?.length?r`${e.map((o,s)=>this.renderMethod(o,t?t===o.name:s===0))}`:this.renderEmpty())}`}renderMethod(e,t){return r`<oryx-tile ?selected="${t}">
      <oryx-radio>
        <input
          name="payment-method"
          type="radio"
          ?checked="${t}"
          @change="${()=>{this.currentMethod$.next(e.name)}}"
        />
        ${e.name}
        <small slot="subtext">
          ${a("checkout.payment.select-<method>",{method:e.name})}
        </small>
      </oryx-radio>
    </oryx-tile>`}renderEmpty(){return r`<p class="no-methods">
      ${a("checkout.payment.no-methods-available")}
    </p>`}};n=d([p()],n);export{n as CheckoutPaymentSelectorComponent};
