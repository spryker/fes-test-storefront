import{c as u,t as l,m as c,y as e,f as p,q as m,_ as n,g as d,h as b}from"./index-4d2c92b7.js";import{C as h}from"./content.controller-33ee67c3.js";import{s as v}from"./subscribe.decorator-50a973f5.js";import{P as y}from"./product.controller-77c96ee5.js";import{P as f}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";const g=u`
  :host {
    --column-count: 2;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: var(--column-count);
  }

  li {
    break-inside: avoid;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-bottom: 20px;
  }

  li > div {
    margin: 0;
    color: var(--oryx-color-neutral-300);
    font-size: 14px;
  }

  li > div:first-child {
    font-weight: bold;
    font-size: 16px;
    color: var(--oryx-color-ink);
  }
`;let i=class extends f(){constructor(){super(...arguments),this.product$=new y(this).getProduct(),this.options$=new h(this).getOptions(),this.optionsObserver=this.options$.pipe(l(t=>{if(!t?.columnCount){this.removeAttribute("style");return}this.setAttribute("style",`--column-count: ${t.columnCount}`)})),this.attributes$=this.product$.pipe(c(t=>{if(!t)return[];const{attributes:o,attributeNames:a={}}=t,s=[];for(const r in o)s.push({key:r,label:a[r],value:o[r]});return s}))}static{this.styles=g}render(){return e`
      ${p(this.attributes$,t=>e`
          <ul>
            ${m(t,o=>o.key,o=>e`
                <li>
                  <div>${o.label}</div>
                  <div>${o.value}</div>
                </li>
              `)}
          </ul>
        `)}
    `}};n([v(),d("design:type",Object)],i.prototype,"optionsObserver",void 0);i=n([b()],i);export{i as ProductAttributesComponent};
