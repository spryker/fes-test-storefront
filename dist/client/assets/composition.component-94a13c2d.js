import{c as p,r,j as d,y as t,al as l,f as h,K as m,_ as u,g as k,h as $,aj as y,am as C,a7 as g,M as v}from"./index-41c5945f.js";import{s as x}from"./subscribe.decorator-b8b77f67.js";import{C as b}from"./content.controller-bfde8771.js";import{C as f}from"./component.mixin-da8e468a.js";import{i as n}from"./i18n.directive-f3adb952.js";const S=p`
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
`;var s;let a=(s=class extends f(){constructor(){super(...arguments),this.checkoutDataService=r(y),this.orchestrationService=r(C),this.options$=new b(this).getOptions(),this.isEmptyCart$=r(g).isEmpty(),this.isAuthenticated$=r(v).isAuthenticated(),this.isGuestCheckout$=this.checkoutDataService.isGuestCheckout(),this.steps$=this.orchestrationService.getValidity(),this.checkout$=d([this.isEmptyCart$,this.isAuthenticated$,this.isGuestCheckout$,this.options$])}renderGuestCheckoutHeading(){return t`
      <header>
        <h1>${n("checkout.guest-checkout")}</h1>

        <oryx-button type="text">
          <button
            @click=${()=>{this.checkoutDataService.setIsGuestCheckout(!1)}}
          >
            ${n("checkout.checkout-as-register")}
          </button>
        </oryx-button>
      </header>
    `}renderStep(e){switch(e){case l.Shipping:return t`<checkout-shipment></checkout-shipment>`;default:return t``}}render(){return t` ${h(this.steps$,e=>t`
        ${e.map(({id:i,validity:o},c)=>t`
            <oryx-card>
              <h2 slot="header">${c+1}. ${i}</h2>
              <slot name="content"
                >${this.renderStep(i)}</slot
              >
            </oryx-card>
          `)}
      `)}
    ${h(this.checkout$,([e,i,o,c])=>e?t``:i||o?t`
          ${m(o,()=>t`${this.renderGuestCheckoutHeading()}`)}
          <checkout-delivery></checkout-delivery>
        `:t`
            <checkout-login
              @oryx.guest-submit=${()=>{this.checkoutDataService.setIsGuestCheckout()}}
              .options=${{disableGuest:c.disableGuest}}
            ></checkout-login>
          `)}`}},(()=>{s.styles=S})(),s);u([x(),k("design:type",Object)],a.prototype,"steps$",void 0);a=u([$()],a);export{a as CheckoutCompositionComponent};
