import{j as u,r as m,y as t,f as l,K as r,_ as c,h as p,M as h}from"./index-4d2c92b7.js";import{C as g}from"./content.controller-33ee67c3.js";import{C as d}from"./checkout.mixin-958aa597.js";import"./experience-composition-preview.component-f7d2d25e.js";import"./experience-composition.component-ff3b35e3.js";import{l as C}from"./layout.styles-1c4c0b88.js";import"./component.mixin-6d7092a2.js";import"./subscribe.decorator-50a973f5.js";import"./observe.decorator-af7161d0.js";import"./state-464c8ba0.js";import"./screen-c0aae3c9.js";let s=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}static{this.styles=C}render(){return t`${l(this.data$,([i,n])=>t`
        ${r(!i,()=>{const{guestUrl:e,loginUrl:o,disableGuest:a}=n;return t` ${r(!a,()=>t`<checkout-guest
                .options="${{...e&&{url:e}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...o&&{url:o}}}"
            ></auth-login>`})}
      `)}`}};s=c([p()],s);export{s as CheckoutLoginComponent};
