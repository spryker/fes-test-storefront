import{c as u,t as c,m,y as i,f as p,q as d,_ as a,g as b,h}from"./index-74abacf3.js";import{C as v}from"./content.controller-bfcf20c7.js";import{s as y}from"./subscribe.decorator-f722d0fb.js";import{P as f}from"./product.controller-b8cabd6e.js";import{P as g}from"./product.mixin-c69d7d06.js";import"./context.controller-7e0d2701.js";import"./component.mixin-ae2cf780.js";const x=u`
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
`;var e;let s=(e=class extends g(){constructor(){super(...arguments),this.product$=new f(this).getProduct(),this.options$=new v(this).getOptions(),this.optionsObserver=this.options$.pipe(c(t=>{if(!(t!=null&&t.columnCount)){this.removeAttribute("style");return}this.setAttribute("style",`--column-count: ${t.columnCount}`)})),this.attributes$=this.product$.pipe(m(t=>{if(!t)return[];const{attributes:r,attributeNames:l={}}=t,n=[];for(const o in r)n.push({key:o,label:l[o],value:r[o]});return n}))}render(){return i`
      ${p(this.attributes$,t=>i`
          <ul>
            ${d(t,r=>r.key,r=>i`
                <li>
                  <div>${r.label}</div>
                  <div>${r.value}</div>
                </li>
              `)}
          </ul>
        `)}
    `}},(()=>{e.styles=x})(),e);a([y(),b("design:type",Object)],s.prototype,"optionsObserver",void 0);s=a([h()],s);export{s as ProductAttributesComponent};
