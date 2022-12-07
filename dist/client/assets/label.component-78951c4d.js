import{C as a}from"./content.controller-33ee67c3.js";import{c as o,j as i,m as n,at as r,f as c}from"./index-4d2c92b7.js";import{P as l}from"./product.controller-77c96ee5.js";import{P as p}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";const d=o`
  :host {
    display: flex;
    gap: var(--oryx-space);
    padding: var(--oryx-space);
  }
`;class y extends p(){constructor(){super(...arguments),this.options$=new a(this).getOptions(),this.product$=new l(this).getProduct(),this.labels$=i([this.options$,this.product$]).pipe(n(([e,t])=>this.filterLabels(e,t?.labels)))}static{this.styles=[d]}render(){return r`
      ${c(this.labels$,e=>r`${e?.map(t=>r`<oryx-chip .appearance=${t.appearance}>
              ${t.name}
            </oryx-chip>`)}`)}
    `}filterLabels(e,t=[]){return t?.filter(s=>!e.included&&!e.excluded||e.included?.toLowerCase().includes(s.name.toLowerCase())||e.excluded&&!e.excluded.toLowerCase().includes(s.name.toLowerCase()))}}export{y as ProductLabelsComponent};
