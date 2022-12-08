import{a0 as C,a1 as g,a2 as v,a3 as S,a4 as f,a5 as B,a6 as w,c as q,r as I,j as y,a7 as m,m as h,B as $,a8 as M,t as p,M as E,l as Q,Q as k,y as r,f as s,a9 as z,_ as c,g as _,h as P,aa as j,o as A}from"./index.65290630.js";import{s as O}from"./subscribe.decorator.8b58ec29.js";import{C as R}from"./content.controller.53d4125f.js";import{P as T}from"./product.controller.4d401941.js";import{P as L}from"./product.mixin.0ef1a236.js";import{B as U}from"./button.component.1761ef50.js";import{S as d}from"./common.49548711.js";import{i as F}from"./i18n.directive.8a4e8c6b.js";import{e as V,n as W}from"./ref.34276d00.js";import{t as D,a as G}from"./timer.1a38a7fe.js";import"./context.controller.86df9e5b.js";import"./component.mixin.d9d48422.js";function H(){return C(function(n,t){n.subscribe(g(t,v))})}function x(n,t){return t?function(i){return S(t.pipe(f(1),H()),i.pipe(x(n)))}:B(function(i,e){return n(i,e).pipe(f(1),w(i))})}function J(n,t){t===void 0&&(t=G);var i=D(n,t);return x(function(){return i})}const K=q`
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
`;let l=class extends L(){constructor(){super(...arguments),this.cartService=I(j),this.options$=new R(this).getOptions(),this.product$=new T(this).getProduct(),this.data$=y([this.options$,this.product$,this.cartService.getEntries()]).pipe(m({bufferSize:1,refCount:!0})),this.min$=this.data$.pipe(h(([t,i,e])=>this.calculateMin(i,e)),m({bufferSize:1,refCount:!0})),this.max$=this.data$.pipe(h(([t,i,e])=>this.calculateMax(i,e)),m({bufferSize:1,refCount:!0})),this.isBusy$=new $(!1),this.isQuantityInvalid$=new $(!1),this.isConfirmed$=new $(!1),this.isDisabled$=y([this.min$.pipe(h(t=>t===0)),this.isBusy$,this.isConfirmed$,this.isQuantityInvalid$]).pipe(h(t=>!!t.find(i=>!!i))),this.triggerEntry$=new M,this.quantityInputRef=V(),this.add$=this.triggerEntry$.pipe(p(()=>this.isBusy$.next(!0)),E(this.product$),Q(([t,i])=>this.cartService.addEntry({sku:i.sku,quantity:t})),p(()=>{this.isBusy$.next(!1),this.isConfirmed$.next(!0)}),J(800),p(()=>this.isConfirmed$.next(!1)),k(()=>(this.isBusy$.next(!1),A(null))))}render(){return r` ${s(this.data$,([t,i])=>i!=null&&i.sku?r`${this.renderQuantity(t)} ${this.renderButton(t)}`:r``)}`}renderQuantity(t){return t.hideQuantityInput?r``:r`<oryx-cart-quantity-input
      ${W(this.quantityInputRef)}
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
        <oryx-icon .type=${z.CartAdd} size=${d.large}></oryx-icon>
        ${F("cart.add-to-cart")}
      </button>
    </oryx-button>`}calculateMin(t,i){const e=this.calculateMax(t,i),a=1;return e!==void 0&&e<a?0:a}calculateMax(t,i){var a,o;const e=i.filter(u=>u.sku===(t==null?void 0:t.sku)).map(u=>u.quantity).reduce((u,b)=>u+b,0);return(a=t==null?void 0:t.availability)!=null&&a.quantity?((o=t==null?void 0:t.availability)==null?void 0:o.quantity)-e:void 0}onUpdate(t){this.isQuantityInvalid$.next(!!t.detail.isInvalid)}onSubmit(t){var i,e,a,o;this.triggerEntry$.next((o=(a=(i=t.detail)==null?void 0:i.quantity)!=null?a:(e=this.quantityInputRef.value)==null?void 0:e.value)!=null?o:1)}};l.styles=K;c([O(),_("design:type",Object)],l.prototype,"add$",void 0);l=c([P()],l);export{l as CartAddComponent};
