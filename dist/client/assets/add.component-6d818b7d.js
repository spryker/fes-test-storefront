import{Y as x,Z as b,$ as C,a0 as g,a1 as h,a2 as v,a3 as S,c as B,r as w,j as l,a4 as u,m as o,B as p,a5 as I,t as d,I as q,l as E,N as M,y as r,f as s,a6 as k,_ as $,g as z,h as Q,a7 as _,o as P}from"./index-4d2c92b7.js";import{s as j}from"./subscribe.decorator-50a973f5.js";import{C as A}from"./content.controller-33ee67c3.js";import{P as O}from"./product.controller-77c96ee5.js";import{P as R}from"./product.mixin-69145c94.js";import{B as T}from"./button.component-33baf70b.js";import{S as m}from"./common-0ee98dc0.js";import{i as L}from"./i18n.directive-8e3ebbd9.js";import{e as U,n as F}from"./ref-25dac95f.js";import{t as N,a as V}from"./timer-4623882a.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";function W(){return x(function(n,t){n.subscribe(b(t,C))})}function f(n,t){return t?function(i){return g(t.pipe(h(1),W()),i.pipe(f(n)))}:v(function(i,e){return n(i,e).pipe(h(1),S(i))})}function Y(n,t){t===void 0&&(t=V);var i=N(n,t);return f(function(){return i})}const Z=B`
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
`;let c=class extends R(){constructor(){super(...arguments),this.cartService=w(_),this.options$=new A(this).getOptions(),this.product$=new O(this).getProduct(),this.data$=l([this.options$,this.product$,this.cartService.getEntries()]).pipe(u({bufferSize:1,refCount:!0})),this.min$=this.data$.pipe(o(([t,i,e])=>this.calculateMin(i,e)),u({bufferSize:1,refCount:!0})),this.max$=this.data$.pipe(o(([t,i,e])=>this.calculateMax(i,e)),u({bufferSize:1,refCount:!0})),this.isBusy$=new p(!1),this.isQuantityInvalid$=new p(!1),this.isConfirmed$=new p(!1),this.isDisabled$=l([this.min$.pipe(o(t=>t===0)),this.isBusy$,this.isConfirmed$,this.isQuantityInvalid$]).pipe(o(t=>!!t.find(i=>!!i))),this.triggerEntry$=new I,this.quantityInputRef=U(),this.add$=this.triggerEntry$.pipe(d(()=>this.isBusy$.next(!0)),q(this.product$),E(([t,i])=>this.cartService.addEntry({sku:i.sku,quantity:t})),d(()=>{this.isBusy$.next(!1),this.isConfirmed$.next(!0)}),Y(800),d(()=>this.isConfirmed$.next(!1)),M(()=>(this.isBusy$.next(!1),P(null))))}static{this.styles=Z}render(){return r` ${s(this.data$,([t,i])=>i?.sku?r`${this.renderQuantity(t)} ${this.renderButton(t)}`:r``)}`}renderQuantity(t){return t.hideQuantityInput?r``:r`<oryx-cart-quantity-input
      ${F(this.quantityInputRef)}
      .min=${s(this.min$)}
      .value=${s(this.min$)}
      .max=${s(this.max$)}
      @update=${this.onUpdate}
      @submit=${this.onSubmit}
    ></oryx-cart-quantity-input>`}renderButton(t){return r` <oryx-button
      size=${m.small}
      ?loading=${s(this.isBusy$)}
      ?confirmed=${s(this.isConfirmed$)}
      type=${T.Primary}
      ?outline=${t.outlined}
    >
      <button
        ?disabled=${s(this.isDisabled$)}
        ?inert=${s(this.isBusy$)}
        @click=${this.onSubmit}
      >
        <oryx-icon .type=${k.CartAdd} size=${m.large}></oryx-icon>
        ${L("cart.add-to-cart")}
      </button>
    </oryx-button>`}calculateMin(t,i){const e=this.calculateMax(t,i),a=1;return e!==void 0&&e<a?0:a}calculateMax(t,i){const e=i.filter(a=>a.sku===t?.sku).map(a=>a.quantity).reduce((a,y)=>a+y,0);return t?.availability?.quantity?t?.availability?.quantity-e:void 0}onUpdate(t){this.isQuantityInvalid$.next(!!t.detail.isInvalid)}onSubmit(t){this.triggerEntry$.next(t.detail?.quantity??this.quantityInputRef.value?.value??1)}};$([j(),z("design:type",Object)],c.prototype,"add$",void 0);c=$([Q()],c);export{c as CartAddComponent};
