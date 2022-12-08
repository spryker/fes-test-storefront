import{c as l,r as c,B as h,y as a,f as m,j as p,_ as d,h as y,ap as u}from"./index-74abacf3.js";import{C as x}from"./component.mixin-ae2cf780.js";import{i as s}from"./i18n.directive-d23a7a29.js";const $=l`
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
`;var r;let o=(r=class extends x(){constructor(){super(...arguments),this.service=c(u),this.methods$=this.service.getMethods(),this.currentMethod$=new h(null)}render(){return a`${m(p([this.methods$,this.currentMethod$]),([e,t])=>e!=null&&e.length?a`${e.map((n,i)=>this.renderMethod(n,t?t===n.name:i===0))}`:this.renderEmpty())}`}renderMethod(e,t){return a`<oryx-tile ?selected="${t}">
      <oryx-radio>
        <input
          name="payment-method"
          type="radio"
          ?checked="${t}"
          @change="${()=>{this.currentMethod$.next(e.name)}}"
        />
        ${e.name}
        <small slot="subtext">
          ${s("checkout.payment.select-<method>",{method:e.name})}
        </small>
      </oryx-radio>
    </oryx-tile>`}renderEmpty(){return a`<p class="no-methods">
      ${s("checkout.payment.no-methods-available")}
    </p>`}},(()=>{r.styles=$})(),r);o=d([y()],o);export{o as CheckoutPaymentSelectorComponent};
