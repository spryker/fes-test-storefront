import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.7349b146.js";import{C as g}from"./content.controller.bcf90c83.js";import{C as d}from"./checkout.mixin.ea58c6d1.js";import"./experience-composition-preview.component.105286e1.js";import"./experience-composition.component.0b48940b.js";import{l as C}from"./layout.styles.a5918a4c.js";import"./component.mixin.6a3f9f94.js";import"./subscribe.decorator.a0932f99.js";import"./observe.decorator.e3ab0c52.js";import"./state.4b38a422.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
