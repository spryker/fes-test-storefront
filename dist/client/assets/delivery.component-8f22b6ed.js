import{c as a,r,al as e,t as n,y as s,f as h,K as u,_ as m,g as d,M as l,am as p,an as o}from"./index-4d2c92b7.js";import{s as f}from"./subscribe.decorator-50a973f5.js";import{C as b}from"./component.mixin-6d7092a2.js";import{i}from"./i18n.directive-8e3ebbd9.js";const k=a`
  section {
    margin-block-end: 30px;
  }
`;class y extends b(){constructor(){super(...arguments),this.isAuthenticated$=r(l).isAuthenticated(),this.orchestrationService=r(p),this.submitTrigger$=this.orchestrationService.getTrigger(e.Delivery).pipe(n(t=>{console.log(t),t===o.Check&&this.checkAndSubmit(),t===o.Report&&this.report()}))}static{this.styles=k}get forms(){return this.renderRoot.querySelectorAll("section > *")}checkAndSubmit(){let t=!0;for(const c of this.forms)c.submit()||(t=!1);this.orchestrationService.report(e.Delivery,t)}report(){for(const t of this.forms)if(!t.submit(!0))break}render(){return s`${h(this.isAuthenticated$,t=>s`
        <h3>${i("checkout.delivery-details")}</h3>

        <section>
          ${u(!t,()=>s`<checkout-contact></checkout-contact>`)}
          <checkout-address></checkout-address>
        </section>

        <oryx-button>
          <button
            @click=${()=>this.orchestrationService.submit(e.Delivery)}
          >
            ${i("checkout.use-this-address")}
          </button>
        </oryx-button>
      `)}`}}m([f(),d("design:type",Object)],y.prototype,"submitTrigger$",void 0);export{y as CheckoutDeliveryComponent};
