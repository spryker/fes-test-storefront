import{r as l,a8 as u,l as o,o as r,k as c,i as a}from"./index.53aa1d0b.js";import{C as p}from"./context.controller.209617e9.js";import{O as h}from"./content.controller.9d78db3a.js";class g{constructor(t,e=[]){this.host=t,this.include=e,this.productService=l(u,null),this.observe=new h(t),this.context=new p(t)}getProduct(){return this.observe.get("product").pipe(o(t=>t?r(t):this.context.get("sku",this.observe.get("sku")).pipe(o((e,n)=>{var i,s;return e?(s=(i=this.productService)==null?void 0:i.get({sku:e,include:this.include}).pipe(n?c(null):a))!=null?s:r(null):r(null)}))))}}export{g as P};
