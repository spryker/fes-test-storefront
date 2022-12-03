import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.571dc3d3.js";import{C as g}from"./content.controller.3fcf1e36.js";import{C as d}from"./checkout.mixin.55b5a62a.js";import"./experience-composition-preview.component.d14578a8.js";import"./experience-composition.component.bf2ff4be.js";import{l as C}from"./layout.styles.e3612be6.js";import"./component.mixin.181046f4.js";import"./subscribe.decorator.18c810d6.js";import"./observe.decorator.e3ab0c52.js";import"./state.62f02930.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
//# sourceMappingURL=login.component.57b3005e.js.map
