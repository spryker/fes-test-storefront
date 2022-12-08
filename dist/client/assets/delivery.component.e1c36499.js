import{c as n,r as s,ap as t,t as h,y as r,f as u,O as m,_ as d,g as p,P as l,aq as f,ar as o}from"./index.65290630.js";import{s as y}from"./subscribe.decorator.8b58ec29.js";import{C as b}from"./component.mixin.d9d48422.js";import{i}from"./i18n.directive.8a4e8c6b.js";const k=n`
  section {
    margin-block-end: 30px;
  }
`;class c extends b(){constructor(){super(...arguments),this.isAuthenticated$=s(l).isAuthenticated(),this.orchestrationService=s(f),this.submitTrigger$=this.orchestrationService.getTrigger(t.Delivery).pipe(h(e=>{console.log(e),e===o.Check&&this.checkAndSubmit(),e===o.Report&&this.report()}))}get forms(){return this.renderRoot.querySelectorAll("section > *")}checkAndSubmit(){let e=!0;for(const a of this.forms)a.submit()||(e=!1);this.orchestrationService.report(t.Delivery,e)}report(){for(const e of this.forms)if(!e.submit(!0))break}render(){return r`${u(this.isAuthenticated$,e=>r`
        <oryx-heading>
          <h5>${i("checkout.delivery-details")}</h5>
        </oryx-heading>

        <section>
          ${m(!e,()=>r`<checkout-contact></checkout-contact>`)}
          <checkout-address></checkout-address>
        </section>

        <oryx-button>
          <button
            @click=${()=>this.orchestrationService.submit(t.Delivery)}
          >
            ${i("checkout.use-this-address")}
          </button>
        </oryx-button>
      `)}`}}c.styles=k;d([y(),p("design:type",Object)],c.prototype,"submitTrigger$",void 0);export{c as CheckoutDeliveryComponent};
