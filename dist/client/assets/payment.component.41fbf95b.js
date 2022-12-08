import{c as m,r as o,B as p,ap as a,t as l,y as r,f as u,j as d,_ as c,g as y,h as g,at as x,aq as $,ar as v}from"./index.65290630.js";import{s as b}from"./subscribe.decorator.8b58ec29.js";import{C as k}from"./component.mixin.d9d48422.js";import{i as n}from"./i18n.directive.8a4e8c6b.js";const C=m`
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
`;let s=class extends k(){constructor(){super(...arguments),this.service=o(x),this.orchestrationService=o($),this.methods$=this.service.getMethods(),this.currentMethod$=new p(null),this.submitTrigger$=this.orchestrationService.getTrigger(a.Payment).pipe(l(e=>{e===v.Check&&this.orchestrationService.report(a.Payment,this.submit())}))}submit(){const e=this.renderRoot.querySelector("input[checked]");return e?(this.service.setPaymentMethod(e.value),!0):!1}render(){return r`${u(d([this.methods$,this.currentMethod$]),([e,t])=>e!=null&&e.length?r`${e.map((i,h)=>this.renderMethod(i,t?t===i.name:h===0))}`:this.renderEmpty())}`}renderMethod(e,t){return r`<oryx-tile ?selected="${t}">
      <oryx-radio>
        <input
          name="payment-method"
          type="radio"
          ?checked="${t}"
          @change="${()=>{this.currentMethod$.next(e.name),this.orchestrationService.report(a.Payment,!0)}}"
        />
        ${e.name}
        <small slot="subtext">
          ${n("checkout.payment.select-<method>",{method:e.name})}
        </small>
      </oryx-radio>
    </oryx-tile>`}renderEmpty(){return r`<p class="no-methods">
      ${n("checkout.payment.no-methods-available")}
    </p>`}};s.styles=C;c([b(),y("design:type",Object)],s.prototype,"submitTrigger$",void 0);s=c([g()],s);export{s as CheckoutPaymentComponent};
