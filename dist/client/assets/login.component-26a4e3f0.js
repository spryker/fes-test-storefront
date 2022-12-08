import{j as l,r as m,y as e,f as c,K as s,_ as p,h,M as d}from"./index-74abacf3.js";import{C as g}from"./content.controller-bfcf20c7.js";import{C}from"./checkout.mixin-6e62712d.js";import"./experience-composition-preview.component-c4d01090.js";import"./experience-composition.component-6d8af21c.js";import{l as $}from"./layout.styles-3e06a114.js";import"./component.mixin-ae2cf780.js";import"./subscribe.decorator-f722d0fb.js";import"./observe.decorator-62a61e42.js";import"./state-804e6978.js";import"./screen-c0aae3c9.js";var t;let i=(t=class extends C(){constructor(){super(...arguments),this.data$=l([m(d).isAuthenticated(),new g(this).getOptions()])}render(){return e`${c(this.data$,([a,n])=>e`
        ${s(!a,()=>{const{guestUrl:o,loginUrl:r,disableGuest:u}=n;return e` ${s(!u,()=>e`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}},(()=>{t.styles=$})(),t);i=p([h()],i);export{i as CheckoutLoginComponent};
