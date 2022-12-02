import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.175fafb9.js";import{C as g}from"./content.controller.9c48864b.js";import{C as d}from"./checkout.mixin.b2b58de5.js";import"./experience-composition-preview.component.07b6ff7d.js";import"./experience-composition.component.50263f64.js";import{l as C}from"./layout.styles.9e3dafe4.js";import"./component.mixin.527a540b.js";import"./subscribe.decorator.7a4aa6ea.js";import"./observe.decorator.e3ab0c52.js";import"./state.943d97d2.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
