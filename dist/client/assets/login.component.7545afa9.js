import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.0de56bf6.js";import{C as g}from"./content.controller.76e32ae1.js";import{C as d}from"./checkout.mixin.b7cbc4e1.js";import"./experience-composition-preview.component.9b9ff58e.js";import"./experience-composition.component.f2cbc9c7.js";import{l as C}from"./layout.styles.8fdf8964.js";import"./component.mixin.5ee5865e.js";import"./subscribe.decorator.f1a1c6ad.js";import"./observe.decorator.e3ab0c52.js";import"./state.d19febcb.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
