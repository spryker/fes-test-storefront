import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.4dee5cd5.js";import{C as g}from"./content.controller.2f1fd9c8.js";import{C as d}from"./checkout.mixin.a9764760.js";import"./experience-composition-preview.component.79c3ac6f.js";import"./experience-composition.component.bad024d7.js";import{l as C}from"./layout.styles.ae99e215.js";import"./component.mixin.d2c5a023.js";import"./subscribe.decorator.9a239dd0.js";import"./observe.decorator.e3ab0c52.js";import"./state.2e407978.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
