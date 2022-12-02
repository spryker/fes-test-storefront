import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.dab5f70a.js";import{C as g}from"./content.controller.124d65c4.js";import{C as d}from"./checkout.mixin.2df408b1.js";import"./experience-composition-preview.component.cfaa2ece.js";import"./experience-composition.component.5183b660.js";import{l as C}from"./layout.styles.f41b11e2.js";import"./component.mixin.bb013c5d.js";import"./subscribe.decorator.cfb427be.js";import"./observe.decorator.e3ab0c52.js";import"./state.fb8eba1e.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
