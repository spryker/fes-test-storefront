import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.53aa1d0b.js";import{C as g}from"./content.controller.9d78db3a.js";import{C as d}from"./checkout.mixin.249e0340.js";import"./experience-composition-preview.component.244cc84c.js";import"./experience-composition.component.7fc47690.js";import{l as C}from"./layout.styles.57eefc14.js";import"./component.mixin.c08d8cd0.js";import"./subscribe.decorator.ff42e007.js";import"./observe.decorator.e3ab0c52.js";import"./state.8e51f0cd.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
