import{c as o,r,j as a,y as t,f as i,ao as c,_ as h,h as l,a7 as m}from"./index-4d2c92b7.js";import{C as p}from"./content.controller-33ee67c3.js";import{C as u}from"./component.mixin-6d7092a2.js";const C=o`
  :host {
    display: contents;
  }
`;let e=class extends u(){constructor(){super(...arguments),this.contentController=new p(this),this.cartService=r(m),this.data$=a([this.cartService.isEmpty(),this.cartService.getLoadingState()])}static{this.styles=C}render(){return t`
      ${i(this.data$,([n,s])=>n?t``:t`
          <content-link
            .options="${{type:c.Checkout,disabled:s,button:!0}}"
          >
            Checkout
          </content-link>
        `)}
    `}};e=h([l()],e);export{e as CheckoutLinkComponent};
