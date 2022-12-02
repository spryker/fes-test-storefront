import{c as i,r as l,B as c,y as r,f as h,j as m,_ as p,h as d,aq as y}from"./index.53aa1d0b.js";import{C as u}from"./component.mixin.c08d8cd0.js";import{i as o}from"./i18n.directive.67a5825a.js";const x=i`
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
`;let n=class extends u(){constructor(){super(...arguments),this.service=l(y),this.methods$=this.service.getMethods(),this.currentMethod$=new c(null)}render(){return r`${h(m([this.methods$,this.currentMethod$]),([e,t])=>e!=null&&e.length?r`${e.map((a,s)=>this.renderMethod(a,t?t===a.name:s===0))}`:this.renderEmpty())}`}renderMethod(e,t){return r`<oryx-tile ?selected="${t}">
      <oryx-radio>
        <input
          name="payment-method"
          type="radio"
          ?checked="${t}"
          @change="${()=>{this.currentMethod$.next(e.name)}}"
        />
        ${e.name}
        <small slot="subtext">
          ${o("checkout.payment.select-<method>",{method:e.name})}
        </small>
      </oryx-radio>
    </oryx-tile>`}renderEmpty(){return r`<p class="no-methods">
      ${o("checkout.payment.no-methods-available")}
    </p>`}};n.styles=x;n=p([d()],n);export{n as CheckoutPaymentSelectorComponent};
