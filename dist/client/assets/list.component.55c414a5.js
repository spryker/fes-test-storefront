import{C as o}from"./content.controller.53d4125f.js";import{r as e,l as i,m as c,y as s,f as p,ay as a,az as u}from"./index.65290630.js";import"./experience-composition-preview.component.a9b83069.js";import"./experience-composition.component.8956227e.js";import{l as m}from"./layout.styles.9233b97a.js";import{P as n}from"./product.mixin.0ef1a236.js";import{baseStyles as d}from"./list.styles.f982815e.js";import"./subscribe.decorator.8b58ec29.js";import"./observe.decorator.e3ab0c52.js";import"./component.mixin.d9d48422.js";import"./state.a1ea36ea.js";class h extends n(){constructor(){super(...arguments),this.productListService=e(a),this.productListPageService=e(u),this.options$=new o(this).getOptions(),this.products$=this.options$.pipe(i(t=>{const r=this.productListService.getSearchParams(t);return this.hasOptions(r)?this.productListService.get(r):this.productListPageService.get()}),c(t=>{var r;return(r=t==null?void 0:t.products)!=null?r:[]}))}renderProducts(t){return s`${t.map(r=>s`<product-card .sku=${r.sku}></product-card>`)}`}hasOptions(t){return Object.keys(t).some(r=>!!t[r])}render(){return s`
      ${p(this.products$,t=>this.renderProducts(t))}
    `}}h.styles=[m,d];export{h as ProductListComponent};
