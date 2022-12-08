import{c as u,t as c,m,y as i,f as p,q as d,_ as a,g as b,h}from"./index-41c5945f.js";import{C as v}from"./content.controller-bfde8771.js";import{s as y}from"./subscribe.decorator-b8b77f67.js";import{P as f}from"./product.controller-987132f0.js";import{P as g}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";const x=u`
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
