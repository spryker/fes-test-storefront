import{au as e,f as i,u as a,_ as p,h as m}from"./index.175fafb9.js";import{C as l}from"./content.controller.9c48864b.js";import{P as c}from"./product.controller.a79b9e84.js";import{P as d}from"./product.mixin.e3e348cf.js";import"./context.controller.5c88ce38.js";import"./component.mixin.527a540b.js";function u(o){return o.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let s=class extends d(){constructor(){super(...arguments),this.options$=new l(this).getOptions(),this.product$=new c(this).getProduct()}render(){return e`
      ${i(this.options$,t=>{var n;return e`<oryx-text
          .style=${`--line-clamp: ${(n=t.truncateAfter)!=null?n:0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${i(this.product$,r=>e`${a(this.convert(r==null?void 0:r.description))}`)}
        </oryx-text>`})}
    `}convert(t){return u(t!=null?t:"")}};s=p([m()],s);export{s as ProductDescriptionComponent};
