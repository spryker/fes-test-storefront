import{C as a}from"./content.controller.53d4125f.js";import{c as i,j as n,m as c,ax as r,f as p}from"./index.65290630.js";import{P as m}from"./product.controller.4d401941.js";import{P as d}from"./product.mixin.0ef1a236.js";import"./context.controller.86df9e5b.js";import"./component.mixin.d9d48422.js";const u=i`
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
