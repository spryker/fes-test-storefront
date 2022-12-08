import{c as p,r as o,j as m,y as t,ap as a,f as n,O as k,_ as u,g as d,h as y,an as l,aq as $,aa as C,P as g}from"./index.65290630.js";import{s as v}from"./subscribe.decorator.8b58ec29.js";import{C as S}from"./content.controller.53d4125f.js";import{C as b}from"./component.mixin.d9d48422.js";import{i as h}from"./i18n.directive.8a4e8c6b.js";const x=p`
  oryx-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;let i=class extends b(){constructor(){super(...arguments),this.checkoutDataService=o(l),this.orchestrationService=o($),this.options$=new S(this).getOptions(),this.isEmptyCart$=o(C).isEmpty(),this.isAuthenticated$=o(g).isAuthenticated(),this.isGuestCheckout$=this.checkoutDataService.isGuestCheckout(),this.steps$=this.orchestrationService.getValidity(),this.checkout$=m([this.isEmptyCart$,this.isAuthenticated$,this.isGuestCheckout$,this.options$])}renderGuestCheckoutHeading(){return t`
      <oryx-heading>
        <h3>${h("checkout.guest-checkout")}</h3>
        <oryx-button type="text">
          <button
            @click=${()=>{this.checkoutDataService.setIsGuestCheckout(!1)}}
          >
            ${h("checkout.checkout-as-register")}
          </button>
        </oryx-button>
      </oryx-heading>
    `}renderStep(e){switch(e){case a.Shipping:return t`<checkout-shipment></checkout-shipment>`;case a.Payment:return t`<checkout-payment></checkout-payment>`;default:return t``}}render(){return t` ${n(this.steps$,e=>t`
        ${e.map(({id:s,validity:r},c)=>t`
            <oryx-card>
              <h2 slot="header">${c+1}. ${s}</h2>
              <slot name="content"
                >${this.renderStep(s)}</slot
              >
            </oryx-card>
          `)}
      `)}
    ${n(this.checkout$,([e,s,r,c])=>e?t``:s||r?t`
          ${k(r,()=>t`${this.renderGuestCheckoutHeading()}`)}
          <checkout-delivery></checkout-delivery>
        `:t`
            <checkout-login
              @oryx.guest-submit=${()=>{this.checkoutDataService.setIsGuestCheckout()}}
              .options=${{disableGuest:c.disableGuest}}
            ></checkout-login>
          `)}`}};i.styles=x;u([v(),d("design:type",Object)],i.prototype,"steps$",void 0);i=u([y()],i);export{i as CheckoutCompositionComponent};
