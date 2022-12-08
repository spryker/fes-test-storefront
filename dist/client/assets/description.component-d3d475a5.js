import{at as r,f as n,u as s,_ as a,h as p}from"./index-74abacf3.js";import{C as m}from"./content.controller-bfcf20c7.js";import{P as l}from"./product.controller-b8cabd6e.js";import{P as c}from"./product.mixin-c69d7d06.js";import"./context.controller-7e0d2701.js";import"./component.mixin-ae2cf780.js";function d(o){return o.split(/(\r?\n\s*){2}/).map(t=>t.trim()).filter(t=>t.length).map(t=>`<p>${t}</p>`).join("").split(/(\r?\n\s*){1}/).map(t=>t.startsWith(`
`)?"<br />":t.trim()).join("")}let i=class extends c(){constructor(){super(...arguments),this.options$=new m(this).getOptions(),this.product$=new l(this).getProduct()}render(){return r`
      ${n(this.options$,t=>r`<oryx-text
          .style=${`--line-clamp: ${t.truncateAfter??0}`}
          .hideToggle=${!!t.hideToggle}
          .defaultExpanded=${!!t.defaultExpanded}
        >
          ${n(this.product$,e=>r`${s(this.convert(e==null?void 0:e.description))}`)}
        </oryx-text>`)}
    `}convert(t){return d(t??"")}};i=a([p()],i);export{i as ProductDescriptionComponent};
