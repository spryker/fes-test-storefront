import{Y as v,Z as C,$ as S,a0 as B,a1 as y,a2 as w,a3 as I,c as q,r as E,j as d,a4 as l,m as h,B as m,a5 as M,t as $,I as k,l as z,N as Q,y as n,f as a,a6 as P,_ as x,g as _,h as j,a7 as O,o as R}from"./index-41c5945f.js";import{s as A}from"./subscribe.decorator-b8b77f67.js";import{C as T}from"./content.controller-bfde8771.js";import{P as L}from"./product.controller-987132f0.js";import{P as U}from"./product.mixin-b8d036c1.js";import{B as F}from"./button.component-e686ec25.js";import{S as c}from"./common-0ee98dc0.js";import{i as N}from"./i18n.directive-f3adb952.js";import{e as V,n as W}from"./ref-a6112978.js";import{t as Y,a as Z}from"./timer-45863111.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";function D(){return v(function(s,t){s.subscribe(C(t,S))})}function b(s,t){return t?function(i){return B(t.pipe(y(1),D()),i.pipe(b(s)))}:w(function(i,e){return s(i,e).pipe(y(1),I(i))})}function G(s,t){t===void 0&&(t=Z);var i=Y(s,t);return b(function(){return i})}const H=q`
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
`;var u;let p=(u=class extends U(){constructor(){super(...arguments),this.cartService=E(O),this.options$=new T(this).getOptions(),this.product$=new L(this).getProduct(),this.data$=d([this.options$,this.product$,this.cartService.getEntries()]).pipe(l({bufferSize:1,refCount:!0})),this.min$=this.data$.pipe(h(([t,i,e])=>this.calculateMin(i,e)),l({bufferSize:1,refCount:!0})),this.max$=this.data$.pipe(h(([t,i,e])=>this.calculateMax(i,e)),l({bufferSize:1,refCount:!0})),this.isBusy$=new m(!1),this.isQuantityInvalid$=new m(!1),this.isConfirmed$=new m(!1),this.isDisabled$=d([this.min$.pipe(h(t=>t===0)),this.isBusy$,this.isConfirmed$,this.isQuantityInvalid$]).pipe(h(t=>!!t.find(i=>!!i))),this.triggerEntry$=new M,this.quantityInputRef=V(),this.add$=this.triggerEntry$.pipe($(()=>this.isBusy$.next(!0)),k(this.product$),z(([t,i])=>this.cartService.addEntry({sku:i.sku,quantity:t})),$(()=>{this.isBusy$.next(!1),this.isConfirmed$.next(!0)}),G(800),$(()=>this.isConfirmed$.next(!1)),Q(()=>(this.isBusy$.next(!1),R(null))))}render(){return n` ${a(this.data$,([t,i])=>i!=null&&i.sku?n`${this.renderQuantity(t)} ${this.renderButton(t)}`:n``)}`}renderQuantity(t){return t.hideQuantityInput?n``:n`<oryx-cart-quantity-input
      ${W(this.quantityInputRef)}
      .min=${a(this.min$)}
      .value=${a(this.min$)}
      .max=${a(this.max$)}
      @update=${this.onUpdate}
      @submit=${this.onSubmit}
    ></oryx-cart-quantity-input>`}renderButton(t){return n` <oryx-button
      size=${c.small}
      ?loading=${a(this.isBusy$)}
      ?confirmed=${a(this.isConfirmed$)}
      type=${F.Primary}
      ?outline=${t.outlined}
    >
      <button
        ?disabled=${a(this.isDisabled$)}
        ?inert=${a(this.isBusy$)}
        @click=${this.onSubmit}
      >
        <oryx-icon .type=${P.CartAdd} size=${c.large}></oryx-icon>
        ${N("cart.add-to-cart")}
      </button>
    </oryx-button>`}calculateMin(t,i){const e=this.calculateMax(t,i),r=1;return e!==void 0&&e<r?0:r}calculateMax(t,i){var r,f;const e=i.filter(o=>o.sku===(t==null?void 0:t.sku)).map(o=>o.quantity).reduce((o,g)=>o+g,0);return(r=t==null?void 0:t.availability)!=null&&r.quantity?((f=t==null?void 0:t.availability)==null?void 0:f.quantity)-e:void 0}onUpdate(t){this.isQuantityInvalid$.next(!!t.detail.isInvalid)}onSubmit(t){var i,e;this.triggerEntry$.next(((i=t.detail)==null?void 0:i.quantity)??((e=this.quantityInputRef.value)==null?void 0:e.value)??1)}},(()=>{u.styles=H})(),u);x([A(),_("design:type",Object)],p.prototype,"add$",void 0);p=x([j()],p);export{p as CartAddComponent};
