import{C as a}from"./content.controller.bcf90c83.js";import{c as i,j as n,m as c,au as r,f as p}from"./index.7349b146.js";import{P as m}from"./product.controller.8602e813.js";import{P as d}from"./product.mixin.d9e46d0d.js";import"./context.controller.2168a5d5.js";import"./component.mixin.6a3f9f94.js";const u=i`
  :host {
    display: flex;
    gap: var(--oryx-space);
    padding: var(--oryx-space);
  }
`;class h extends d(){constructor(){super(...arguments),this.options$=new a(this).getOptions(),this.product$=new m(this).getProduct(),this.labels$=n([this.options$,this.product$]).pipe(c(([e,t])=>this.filterLabels(e,t==null?void 0:t.labels)))}render(){return r`
      ${p(this.labels$,e=>r`${e==null?void 0:e.map(t=>r`<oryx-chip .appearance=${t.appearance}>
              ${t.name}
            </oryx-chip>`)}`)}
    `}filterLabels(e,t=[]){return t==null?void 0:t.filter(o=>{var s;return!e.included&&!e.excluded||((s=e.included)==null?void 0:s.toLowerCase().includes(o.name.toLowerCase()))||e.excluded&&!e.excluded.toLowerCase().includes(o.name.toLowerCase())})}}h.styles=[u];export{h as ProductLabelsComponent};
