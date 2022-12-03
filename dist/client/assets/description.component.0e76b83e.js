import{au as e,f as i,u as a,_ as p,h as m}from"./index.571dc3d3.js";import{C as l}from"./content.controller.3fcf1e36.js";import{P as c}from"./product.controller.c153b0d1.js";import{P as d}from"./product.mixin.2cd0b7fd.js";import"./context.controller.c8fc4a2b.js";import"./component.mixin.181046f4.js";function u(o){return o.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let s=class extends d(){constructor(){super(...arguments),this.options$=new l(this).getOptions(),this.product$=new c(this).getProduct()}render(){return e`
      ${i(this.options$,t=>{var n;return e`<oryx-text
          .style=${`--line-clamp: ${(n=t.truncateAfter)!=null?n:0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${i(this.product$,r=>e`${a(this.convert(r==null?void 0:r.description))}`)}
        </oryx-text>`})}
    `}convert(t){return u(t!=null?t:"")}};s=p([m()],s);export{s as ProductDescriptionComponent};
//# sourceMappingURL=description.component.0e76b83e.js.map
