import{at as r,f as n,u as s,_ as a,h as p}from"./index-41c5945f.js";import{C as m}from"./content.controller-bfde8771.js";import{P as l}from"./product.controller-987132f0.js";import{P as c}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";function d(o){return o.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let i=class extends c(){constructor(){super(...arguments),this.options$=new m(this).getOptions(),this.product$=new l(this).getProduct()}render(){return r`
      ${n(this.options$,t=>r`<oryx-text
          .style=${`--line-clamp: ${t.truncateAfter??0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${n(this.product$,e=>r`${s(this.convert(e==null?void 0:e.description))}`)}
        </oryx-text>`)}
    `}convert(t){return d(t??"")}};i=a([p()],i);export{i as ProductDescriptionComponent};
