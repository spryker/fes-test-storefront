import{au as e,f as i,u as a,_ as p,h as m}from"./index.7349b146.js";import{C as l}from"./content.controller.bcf90c83.js";import{P as c}from"./product.controller.8602e813.js";import{P as d}from"./product.mixin.d9e46d0d.js";import"./context.controller.2168a5d5.js";import"./component.mixin.6a3f9f94.js";function u(o){return o.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let s=class extends d(){constructor(){super(...arguments),this.options$=new l(this).getOptions(),this.product$=new c(this).getProduct()}render(){return e`
      ${i(this.options$,t=>{var n;return e`<oryx-text
          .style=${`--line-clamp: ${(n=t.truncateAfter)!=null?n:0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${i(this.product$,r=>e`${a(this.convert(r==null?void 0:r.description))}`)}
        </oryx-text>`})}
    `}convert(t){return u(t!=null?t:"")}};s=p([m()],s);export{s as ProductDescriptionComponent};
