import{c as n,r,an as e,t as h,y as s,f as u,K as m,_ as d,g as l,M as p,al as f,ao as o}from"./index.53aa1d0b.js";import{s as b}from"./subscribe.decorator.ff42e007.js";import{C as k}from"./component.mixin.c08d8cd0.js";import{i}from"./i18n.directive.67a5825a.js";const y=n`
  section {
    margin-block-end: 30px;
  }
`;class c extends k(){constructor(){super(...arguments),this.isAuthenticated$=r(p).isAuthenticated(),this.orchestrationService=r(f),this.submitTrigger$=this.orchestrationService.getTrigger(e.Delivery).pipe(h(t=>{console.log(t),t===o.Check&&this.checkAndSubmit(),t===o.Report&&this.report()}))}get forms(){return this.renderRoot.querySelectorAll("section > *")}checkAndSubmit(){let t=!0;for(const a of this.forms)a.submit()||(t=!1);this.orchestrationService.report(e.Delivery,t)}report(){for(const t of this.forms)if(!t.submit(!0))break}render(){return s`${u(this.isAuthenticated$,t=>s`
        <h3>${i("checkout.delivery-details")}</h3>

        <section>
          ${m(!t,()=>s`<checkout-contact></checkout-contact>`)}
          <checkout-address></checkout-address>
        </section>

        <oryx-button>
          <button
            @click=${()=>this.orchestrationService.submit(e.Delivery)}
          >
            ${i("checkout.use-this-address")}
          </button>
        </oryx-button>
      `)}`}}c.styles=y;d([b(),l("design:type",Object)],c.prototype,"submitTrigger$",void 0);export{c as CheckoutDeliveryComponent};
