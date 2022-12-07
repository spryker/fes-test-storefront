import{c as s,r,j as a,y as t,f as i,ao as c,_ as l,h,a7 as m}from"./index.41f56078.js";import{C as p}from"./content.controller.980c45d6.js";import{C as u}from"./component.mixin.534dfd2f.js";const C=s`
  :host {
    display: contents;
  }
`;let e=class extends u(){constructor(){super(...arguments),this.contentController=new p(this),this.cartService=r(m),this.data$=a([this.cartService.isEmpty(),this.cartService.getLoadingState()])}render(){return t`
      ${i(this.data$,([n,o])=>n?t``:t`
          <content-link
            .options="${{type:c.Checkout,disabled:o,button:!0}}"
          >
            Checkout
          </content-link>
        `)}
    `}};e.styles=C;e=l([h()],e);export{e as CheckoutLinkComponent};
