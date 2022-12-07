import{c as u,r as i,j as p,y as t,al as d,f as a,K as m,_ as n,g as k,h as l,aj as $,am as y,a7 as C,M as g}from"./index.41f56078.js";import{s as v}from"./subscribe.decorator.3c5accf2.js";import{C as x}from"./content.controller.980c45d6.js";import{C as b}from"./component.mixin.534dfd2f.js";import{i as h}from"./i18n.directive.5ac487c1.js";const f=u`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: var(--oryx-space-4);
  }

  h1 {
    margin: 0;
    font-size: 22px;
    line-height: 30px;
    font-weight: 500;
  }

  oryx-card {
    margin: 15px 0;
  }
`;let o=class extends b(){constructor(){super(...arguments),this.checkoutDataService=i($),this.orchestrationService=i(y),this.options$=new x(this).getOptions(),this.isEmptyCart$=i(C).isEmpty(),this.isAuthenticated$=i(g).isAuthenticated(),this.isGuestCheckout$=this.checkoutDataService.isGuestCheckout(),this.steps$=this.orchestrationService.getValidity(),this.checkout$=p([this.isEmptyCart$,this.isAuthenticated$,this.isGuestCheckout$,this.options$])}renderGuestCheckoutHeading(){return t`
      <header>
        <h1>${h("checkout.guest-checkout")}</h1>

        <oryx-button type="text">
          <button
            @click=${()=>{this.checkoutDataService.setIsGuestCheckout(!1)}}
          >
            ${h("checkout.checkout-as-register")}
          </button>
        </oryx-button>
      </header>
    `}renderStep(e){switch(e){case d.Shipping:return t`<checkout-shipment></checkout-shipment>`;default:return t``}}render(){return t` ${a(this.steps$,e=>t`
        ${e.map(({id:s,validity:r},c)=>t`
            <oryx-card>
              <h2 slot="header">${c+1}. ${s}</h2>
              <slot name="content"
                >${this.renderStep(s)}</slot
              >
            </oryx-card>
          `)}
      `)}
    ${a(this.checkout$,([e,s,r,c])=>e?t``:s||r?t`
          ${m(r,()=>t`${this.renderGuestCheckoutHeading()}`)}
          <checkout-delivery></checkout-delivery>
        `:t`
            <checkout-login
              @oryx.guest-submit=${()=>{this.checkoutDataService.setIsGuestCheckout()}}
              .options=${{disableGuest:c.disableGuest}}
            ></checkout-login>
          `)}`}};o.styles=f;n([v(),k("design:type",Object)],o.prototype,"steps$",void 0);o=n([l()],o);export{o as CheckoutCompositionComponent};
