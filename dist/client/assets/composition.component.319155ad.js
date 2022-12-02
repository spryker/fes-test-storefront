import{c as $,r as o,m as k,j as c,y as t,f as h,K as n,_ as l,g as m,h as y,aj as C,al as g,a7 as v,M as b,am as f}from"./index.0de56bf6.js";import{s as S}from"./subscribe.decorator.f1a1c6ad.js";import{C as x}from"./content.controller.76e32ae1.js";import{C as D}from"./component.mixin.5ee5865e.js";import{i as u}from"./i18n.directive.541950d4.js";const G=$`
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
`;let r=class extends D(){constructor(){super(...arguments),this.checkoutDataService=o(C),this.orchestrationService=o(g),this.options$=new x(this).getOptions(),this.isEmptyCart$=o(v).isEmpty(),this.isAuthenticated$=o(b).isAuthenticated(),this.isGuestCheckout$=this.checkoutDataService.isGuestCheckout(),this.steps$=this.orchestrationService.getValidity(),this.deliveryCompleted$=this.steps$.pipe(k(i=>{var e;return((e=i.find(s=>s.id==="delivery"))==null?void 0:e.validity)===f.Valid})),this.testData$=c([this.checkoutDataService.getContactDetails(),this.checkoutDataService.getAddressDetails()]),this.checkout$=c([this.isEmptyCart$,this.isAuthenticated$,this.isGuestCheckout$,this.deliveryCompleted$,this.options$,this.testData$])}renderGuestCheckoutHeading(){return t`
      <header>
        <h1>${u("checkout.guest-checkout")}</h1>

        <oryx-button type="text">
          <button
            @click=${()=>{this.checkoutDataService.setIsGuestCheckout(!1)}}
          >
            ${u("checkout.checkout-as-register")}
          </button>
        </oryx-button>
      </header>
    `}render(){return t` <!-- TODO: just for demonstration -->
      ${h(this.steps$,i=>t`
          <ul>
            ${i.map(({id:e,validity:s})=>t` <li>${e}: ${s}</li> `)}
          </ul>
        `)}
      ${h(this.checkout$,([i,e,s,p,d,a])=>i?t``:e||s?t`
            ${n(s,()=>t`${this.renderGuestCheckoutHeading()}`)}
            ${n(p,()=>t`
                <h3>2. Shipping</h3>
                <p style="word-break: break-all;">
                  ${JSON.stringify(a[0])}
                </p>

                <p style="word-break: break-all;">
                  ${JSON.stringify(a[1])}
                </p>
              `,()=>t` <checkout-delivery></checkout-delivery> `)}
          `:t`
              <checkout-login
                @oryx.guest-submit=${()=>{this.checkoutDataService.setIsGuestCheckout()}}
                .options=${{disableGuest:d.disableGuest}}
              ></checkout-login>
            `)}`}};r.styles=G;l([S(),m("design:type",Object)],r.prototype,"steps$",void 0);r=l([y()],r);export{r as CheckoutCompositionComponent};
