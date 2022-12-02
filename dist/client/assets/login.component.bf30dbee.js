import{j as u,r as m,y as t,f as l,K as s,_ as c,h as p,M as h}from"./index.357aef3f.js";import{C as g}from"./content.controller.dc7b3608.js";import{C as d}from"./checkout.mixin.29a1d4a2.js";import"./experience-composition-preview.component.59380383.js";import"./experience-composition.component.eb816254.js";import{l as C}from"./layout.styles.dc54c3c9.js";import"./component.mixin.b43923fd.js";import"./subscribe.decorator.1317af6f.js";import"./observe.decorator.e3ab0c52.js";import"./state.c6af47bc.js";import"./screen.63347f27.js";let e=class extends d(){constructor(){super(...arguments),this.data$=u([m(h).isAuthenticated(),new g(this).getOptions()])}render(){return t`${l(this.data$,([i,n])=>t`
        ${s(!i,()=>{const{guestUrl:o,loginUrl:r,disableGuest:a}=n;return t` ${s(!a,()=>t`<checkout-guest
                .options="${{...o&&{url:o}}}"
              ></checkout-guest>`)}
            <auth-login
              .options="${{title:"Have an account? Login",disableRedirect:!0,showRememberMe:!0,...r&&{url:r}}}"
            ></auth-login>`})}
      `)}`}};e.styles=C;e=c([p()],e);export{e as CheckoutLoginComponent};
