import{Y as C,Z as g,$ as v,a0 as S,a1 as f,a2 as B,a3 as w,c as I,r as q,j as y,a4 as m,m as h,B as $,a5 as E,t as p,I as M,l as k,N as z,y as r,f as s,a6 as Q,_ as c,g as _,h as P,a7 as j,o as A}from"./index.e698feb0.js";import{s as O}from"./subscribe.decorator.adca8f3e.js";import{C as R}from"./content.controller.13788f6c.js";import{P as T}from"./product.controller.f0aa3f31.js";import{P as L}from"./product.mixin.f9280692.js";import{B as U}from"./button.component.8f6fbb7f.js";import{S as d}from"./common.49548711.js";import{i as F}from"./i18n.directive.007251a1.js";import{e as N,n as V}from"./ref.3e1f0433.js";import{t as W,a as Y}from"./timer.8a2779a8.js";import"./context.controller.d8f4a455.js";import"./component.mixin.cf8fd244.js";function Z(){return C(function(n,t){n.subscribe(g(t,v))})}function x(n,t){return t?function(i){return S(t.pipe(f(1),Z()),i.pipe(x(n)))}:B(function(i,e){return n(i,e).pipe(f(1),w(i))})}function D(n,t){t===void 0&&(t=Y);var i=W(n,t);return x(function(){return i})}const G=I`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 17px;
  }

  form {
    display: contents;
  }

  oryx-button {
    flex: auto;
  }

  button {
    --oryx-icon-size: 24px;

    height: 28px;
  }
`;let l=class extends L(){constructor(){super(...arguments),this.cartService=q(j),this.options$=new R(this).getOptions(),this.product$=new T(this).getProduct(),this.data$=y([this.options$,this.product$,this.cartService.getEntries()]).pipe(m({bufferSize:1,refCount:!0})),this.min$=this.data$.pipe(h(([t,i,e])=>this.calculateMin(i,e)),m({bufferSize:1,refCount:!0})),this.max$=this.data$.pipe(h(([t,i,e])=>this.calculateMax(i,e)),m({bufferSize:1,refCount:!0})),this.isBusy$=new $(!1),this.isQuantityInvalid$=new $(!1),this.isConfirmed$=new $(!1),this.isDisabled$=y([this.min$.pipe(h(t=>t===0)),this.isBusy$,this.isConfirmed$,this.isQuantityInvalid$]).pipe(h(t=>!!t.find(i=>!!i))),this.triggerEntry$=new E,this.quantityInputRef=N(),this.add$=this.triggerEntry$.pipe(p(()=>this.isBusy$.next(!0)),M(this.product$),k(([t,i])=>this.cartService.addEntry({sku:i.sku,quantity:t})),p(()=>{this.isBusy$.next(!1),this.isConfirmed$.next(!0)}),D(800),p(()=>this.isConfirmed$.next(!1)),z(()=>(this.isBusy$.next(!1),A(null))))}render(){return r` ${s(this.data$,([t,i])=>i!=null&&i.sku?r`${this.renderQuantity(t)} ${this.renderButton(t)}`:r``)}`}renderQuantity(t){return t.hideQuantityInput?r``:r`<oryx-cart-quantity-input
      ${V(this.quantityInputRef)}
      .min=${s(this.min$)}
      .value=${s(this.min$)}
      .max=${s(this.max$)}
      @update=${this.onUpdate}
      @submit=${this.onSubmit}
    ></oryx-cart-quantity-input>`}renderButton(t){return r` <oryx-button
      size=${d.small}
      ?loading=${s(this.isBusy$)}
      ?confirmed=${s(this.isConfirmed$)}
      type=${U.Primary}
      ?outline=${t.outlined}
    >
      <button
        ?disabled=${s(this.isDisabled$)}
        ?inert=${s(this.isBusy$)}
        @click=${this.onSubmit}
      >
        <oryx-icon .type=${Q.CartAdd} size=${d.large}></oryx-icon>
        ${F("cart.add-to-cart")}
      </button>
    </oryx-button>`}calculateMin(t,i){const e=this.calculateMax(t,i),a=1;return e!==void 0&&e<a?0:a}calculateMax(t,i){var a,o;const e=i.filter(u=>u.sku===(t==null?void 0:t.sku)).map(u=>u.quantity).reduce((u,b)=>u+b,0);return(a=t==null?void 0:t.availability)!=null&&a.quantity?((o=t==null?void 0:t.availability)==null?void 0:o.quantity)-e:void 0}onUpdate(t){this.isQuantityInvalid$.next(!!t.detail.isInvalid)}onSubmit(t){var i,e,a,o;this.triggerEntry$.next((o=(a=(i=t.detail)==null?void 0:i.quantity)!=null?a:(e=this.quantityInputRef.value)==null?void 0:e.value)!=null?o:1)}};l.styles=G;c([O(),_("design:type",Object)],l.prototype,"add$",void 0);l=c([P()],l);export{l as CartAddComponent};
