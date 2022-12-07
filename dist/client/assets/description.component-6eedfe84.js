import{at as r,f as o,u as s,_ as p,h as a}from"./index-4d2c92b7.js";import{C as c}from"./content.controller-33ee67c3.js";import{P as d}from"./product.controller-77c96ee5.js";import{P as m}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";function l(e){return e.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let n=class extends m(){constructor(){super(...arguments),this.options$=new c(this).getOptions(),this.product$=new d(this).getProduct()}render(){return r`
      ${o(this.options$,t=>r`<oryx-text
          .style=${`--line-clamp: ${t.truncateAfter??0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${o(this.product$,i=>r`${s(this.convert(i?.description))}`)}
        </oryx-text>`)}
    `}convert(t){return l(t??"")}};n=p([a()],n);export{n as ProductDescriptionComponent};
