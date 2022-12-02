import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.e698feb0.js";import{C as g}from"./content.controller.13788f6c.js";import{C as d}from"./checkout.mixin.3c1a18ca.js";import"./experience-composition-preview.component.5e5cd7b3.js";import"./experience-composition.component.73372c71.js";import{l as C}from"./layout.styles.d2cf89eb.js";import"./component.mixin.cf8fd244.js";import"./subscribe.decorator.adca8f3e.js";import"./observe.decorator.e3ab0c52.js";import"./state.87e1732e.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
