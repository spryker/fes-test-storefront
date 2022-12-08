import{j as l,r as m,y as e,f as c,K as s,_ as p,h,M as d}from"./index-41c5945f.js";import{C as g}from"./content.controller-bfde8771.js";import{C}from"./checkout.mixin-1591b8fb.js";import"./experience-composition-preview.component-9bef1f27.js";import"./experience-composition.component-2ff75422.js";import{l as $}from"./layout.styles-e5516ea1.js";import"./component.mixin-da8e468a.js";import"./subscribe.decorator-b8b77f67.js";import"./observe.decorator-62a61e42.js";import"./state-2f3bc3a1.js";import"./screen-c0aae3c9.js";var t;let i=(t=class extends C(){constructor(){super(...arguments),this.data$=l([m(d).isAuthenticated(),new g(this).getOptions()])}render(){return e`${c(this.data$,([a,n])=>e`
        ${s(!a,()=>{const{guestUrl:o,loginUrl:r,disableGuest:u}=n;return e` ${s(!u,()=>e`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}},(()=>{t.styles=$})(),t);i=p([h()],i);export{i as CheckoutLoginComponent};
