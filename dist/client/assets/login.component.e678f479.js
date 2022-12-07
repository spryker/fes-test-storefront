import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.41f56078.js";import{C as g}from"./content.controller.980c45d6.js";import{C as d}from"./checkout.mixin.18f7dc31.js";import"./experience-composition-preview.component.013f0de3.js";import"./experience-composition.component.be33016d.js";import{l as C}from"./layout.styles.8532e86c.js";import"./component.mixin.534dfd2f.js";import"./subscribe.decorator.3c5accf2.js";import"./observe.decorator.e3ab0c52.js";import"./state.7dcfc272.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
