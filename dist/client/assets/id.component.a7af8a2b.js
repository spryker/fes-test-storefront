import{j as n,au as r,f as a,_ as i,h as m}from"./index.d896b0c8.js";import{C as p}from"./content.controller.3e9f2440.js";import{P as d}from"./product.controller.828cf3a5.js";import{P as h}from"./product.mixin.8facbf11.js";import"./context.controller.c92fa790.js";import"./component.mixin.09051c71.js";let s=class extends h(){constructor(){super(...arguments),this.product$=new d(this).getProduct(),this.options$=new p(this).getOptions(),this.data$=n([this.options$,this.product$])}render(){return r`
      ${a(this.data$,([e,t])=>{var o;return r`${(o=e.prefix)!=null?o:"SKU"}: ${t==null?void 0:t.sku}`})}
    `}};s=i([m()],s);export{s as ProductIdComponent};
//# sourceMappingURL=id.component.a7af8a2b.js.map
