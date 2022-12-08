import{c as o,r,j as a,y as t,f as i,as as c,_ as l,h,aa as m}from"./index.65290630.js";import{C as p}from"./content.controller.53d4125f.js";import{C as u}from"./component.mixin.d9d48422.js";const C=o`
  :host {
    display: contents;
  }
`;let e=class extends u(){constructor(){super(...arguments),this.contentController=new p(this),this.cartService=r(m),this.data$=a([this.cartService.isEmpty(),this.cartService.getLoadingState()])}render(){return t`
      ${i(this.data$,([n,s])=>n?t``:t`
          <content-link
            .options="${{type:c.Checkout,disabled:s,button:!0}}"
          >
            Checkout
          </content-link>
        `)}
    `}};e.styles=C;e=l([h()],e);export{e as CheckoutLinkComponent};
