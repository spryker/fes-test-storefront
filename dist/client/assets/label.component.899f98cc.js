import{C as a}from"./content.controller.124d65c4.js";import{c as i,j as n,m as c,au as r,f as p}from"./index.dab5f70a.js";import{P as m}from"./product.controller.f93952f3.js";import{P as d}from"./product.mixin.7fc7d0f6.js";import"./context.controller.f68f8d28.js";import"./component.mixin.bb013c5d.js";const u=i`
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
