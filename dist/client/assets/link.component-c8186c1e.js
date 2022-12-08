import{c as o,r as a,j as i,y as e,f as c,ao as l,_ as h,h as m,a7 as p}from"./index-41c5945f.js";import{C as u}from"./content.controller-bfde8771.js";import{C}from"./component.mixin-da8e468a.js";const d=o`
  :host {
    display: contents;
  }
`;var t;let s=(t=class extends C(){constructor(){super(...arguments),this.contentController=new u(this),this.cartService=a(p),this.data$=i([this.cartService.isEmpty(),this.cartService.getLoadingState()])}render(){return e`
      ${c(this.data$,([n,r])=>n?e``:e`
          <content-link
            .options="${{type:l.Checkout,disabled:r,button:!0}}"
          >
            Checkout
          </content-link>
        `)}
    `}},(()=>{t.styles=d})(),t);s=h([m()],s);export{s as CheckoutLinkComponent};
