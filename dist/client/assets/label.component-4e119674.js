import{C as n}from"./content.controller-bfde8771.js";import{c,j as p,m,at as r,f as d}from"./index-41c5945f.js";import{P as h}from"./product.controller-987132f0.js";import{P as u}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";const x=c`
  :host {
    display: flex;
    gap: var(--oryx-space);
    padding: var(--oryx-space);
  }
`,s=class extends u(){constructor(){super(...arguments),this.options$=new n(this).getOptions(),this.product$=new h(this).getProduct(),this.labels$=p([this.options$,this.product$]).pipe(m(([e,t])=>this.filterLabels(e,t==null?void 0:t.labels)))}render(){return r`
      ${d(this.labels$,e=>r`${e==null?void 0:e.map(t=>r`<oryx-chip .appearance=${t.appearance}>
              ${t.name}
            </oryx-chip>`)}`)}
    `}filterLabels(e,t=[]){return t==null?void 0:t.filter(i=>{var a;return!e.included&&!e.excluded||((a=e.included)==null?void 0:a.toLowerCase().includes(i.name.toLowerCase()))||e.excluded&&!e.excluded.toLowerCase().includes(i.name.toLowerCase())})}};let o=s;(()=>{s.styles=[x]})();export{o as ProductLabelsComponent};
