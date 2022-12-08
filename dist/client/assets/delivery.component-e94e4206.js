import{c as h,r as o,al as e,t as u,y as s,f as m,K as d,_ as f,g as l,M as p,am as b,an as c}from"./index-74abacf3.js";import{s as k}from"./subscribe.decorator-f722d0fb.js";import{C as y}from"./component.mixin-ae2cf780.js";import{i as a}from"./i18n.directive-d23a7a29.js";const g=h`
  section {
    margin-block-end: 30px;
  }
`,i=class extends y(){constructor(){super(...arguments),this.isAuthenticated$=o(p).isAuthenticated(),this.orchestrationService=o(b),this.submitTrigger$=this.orchestrationService.getTrigger(e.Delivery).pipe(u(t=>{console.log(t),t===c.Check&&this.checkAndSubmit(),t===c.Report&&this.report()}))}get forms(){return this.renderRoot.querySelectorAll("section > *")}checkAndSubmit(){let t=!0;for(const n of this.forms)n.submit()||(t=!1);this.orchestrationService.report(e.Delivery,t)}report(){for(const t of this.forms)if(!t.submit(!0))break}render(){return s`${m(this.isAuthenticated$,t=>s`
        <h3>${a("checkout.delivery-details")}</h3>

        <section>
          ${d(!t,()=>s`<checkout-contact></checkout-contact>`)}
          <checkout-address></checkout-address>
        </section>

        <oryx-button>
          <button
            @click=${()=>this.orchestrationService.submit(e.Delivery)}
          >
            ${a("checkout.use-this-address")}
          </button>
        </oryx-button>
      `)}`}};let r=i;(()=>{i.styles=g})();f([k(),l("design:type",Object)],r.prototype,"submitTrigger$",void 0);export{r as CheckoutDeliveryComponent};
