import{j as n,au as r,f as a,_ as i,h as m}from"./index.571dc3d3.js";import{C as p}from"./content.controller.3fcf1e36.js";import{P as d}from"./product.controller.c153b0d1.js";import{P as h}from"./product.mixin.2cd0b7fd.js";import"./context.controller.c8fc4a2b.js";import"./component.mixin.181046f4.js";let s=class extends h(){constructor(){super(...arguments),this.product$=new d(this).getProduct(),this.options$=new p(this).getOptions(),this.data$=n([this.options$,this.product$])}render(){return r`
      ${a(this.data$,([e,t])=>{var o;return r`${(o=e.prefix)!=null?o:"SKU"}: ${t==null?void 0:t.sku}`})}
    `}};s=i([m()],s);export{s as ProductIdComponent};
//# sourceMappingURL=id.component.4197537a.js.map
