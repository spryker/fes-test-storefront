import{c as s,r,j as a,y as t,f as i,ap as c,_ as l,h,a7 as p}from"./index.e698feb0.js";import{C as m}from"./content.controller.13788f6c.js";import{C as u}from"./component.mixin.cf8fd244.js";const C=s`
  :host {
    display: contents;
  }
`;let e=class extends u(){constructor(){super(...arguments),this.contentController=new m(this),this.cartService=r(p),this.data$=a([this.cartService.isEmpty(),this.cartService.getLoadingState()])}render(){return t`
      ${i(this.data$,([n,o])=>n?t``:t`
          <content-link
            .options="${{type:c.Checkout,disabled:o,button:!0}}"
          >
            Checkout
          </content-link>
        `)}
    `}};e.styles=C;e=l([h()],e);export{e as CheckoutLinkComponent};