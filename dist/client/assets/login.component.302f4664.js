import{j as u,r as l,y as t,f as m,O as s,_ as c,h as p,P as h}from"./index.65290630.js";import{C as g}from"./content.controller.53d4125f.js";import{C as d}from"./checkout.mixin.56be02c5.js";import"./experience-composition-preview.component.a9b83069.js";import"./experience-composition.component.8956227e.js";import{l as C}from"./layout.styles.9233b97a.js";import"./component.mixin.d9d48422.js";import"./subscribe.decorator.8b58ec29.js";import"./observe.decorator.e3ab0c52.js";import"./state.a1ea36ea.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([l(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${m(this.data$,([n,i])=>t`
        ${s(!n,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=i;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
