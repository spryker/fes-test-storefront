import{r as l,a7 as c,ah as h,l as r,m as p,o as s,j as v,A as f}from"./index.53aa1d0b.js";import{O as g}from"./content.controller.9d78db3a.js";class b{constructor(e){this.host=e,this.cartService=l(c),this.pricingService=l(h),this.observe=new g(e)}getTotalQuantity(){return this.observe.get("cartId").pipe(r(e=>this.cartService.getCart({cartId:e})),p(e=>this.cumulateQuantity(e)))}getTotals(){return this.observe.get("cartId").pipe(r(e=>this.cartService.getCart({cartId:e})),r(e=>e!=null&&e.products?s(e).pipe(r(()=>v([this.formatTotals(e),this.formatDiscounts(e),s({itemsQuantity:this.cumulateQuantity(e),priceMode:e.priceMode})]).pipe(p(([i,t,o])=>({calculations:i,...t&&{discounts:t},...o}))))):s(null)))}cumulateQuantity(e){var i,t;return(t=(i=e==null?void 0:e.products)==null?void 0:i.reduce((o,{quantity:a})=>o+a,0))!=null?t:null}formatDiscounts(e){return s(e).pipe(r(i=>{var t;return((t=i.discounts)!=null?t:[]).reduce((o,a)=>o.pipe(r(u=>this.pricingService.format(-a.amount).pipe(f(n=>n!==null),p(n=>[...u,{...a,amount:n}])))),s([]))}))}formatTotals(e){return s(e).pipe(r(i=>{var t;return Object.entries((t=i.totals)!=null?t:{}).reduce((o,[a,u])=>o.pipe(r(n=>u?(a==="discountTotal"&&(u=-u),this.pricingService.format(u).pipe(p(m=>({...n,[a]:m})))):s({...n}))),s({}))}))}}export{b as C};
