import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.d896b0c8.js";import{C as g}from"./content.controller.3e9f2440.js";import{C as d}from"./checkout.mixin.39f3394b.js";import"./experience-composition-preview.component.88ebca56.js";import"./experience-composition.component.37d643a4.js";import{l as C}from"./layout.styles.c0b4bd07.js";import"./component.mixin.09051c71.js";import"./subscribe.decorator.15a5c786.js";import"./observe.decorator.e3ab0c52.js";import"./state.b6e10818.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
//# sourceMappingURL=login.component.24443060.js.map
