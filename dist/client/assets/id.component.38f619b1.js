import{j as n,ax as r,f as a,_ as i,h as m}from"./index.65290630.js";import{C as p}from"./content.controller.53d4125f.js";import{P as d}from"./product.controller.4d401941.js";import{P as h}from"./product.mixin.0ef1a236.js";import"./context.controller.86df9e5b.js";import"./component.mixin.d9d48422.js";let s=class extends h(){constructor(){super(...arguments),this.product$=new d(this).getProduct(),this.options$=new p(this).getOptions(),this.data$=n([this.options$,this.product$])}render(){return r`
      ${a(this.data$,([e,t])=>{var o;return r`${(o=e.prefix)!=null?o:"SKU"}: ${t==null?void 0:t.sku}`})}
    `}};s=i([m()],s);export{s as ProductIdComponent};
