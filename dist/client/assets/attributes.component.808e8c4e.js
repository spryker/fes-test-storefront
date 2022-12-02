import{c as a,t as l,m as c,y as i,f as m,q as p,_ as n,g as d,h as b}from"./index.0de56bf6.js";import{C as h}from"./content.controller.76e32ae1.js";import{s as v}from"./subscribe.decorator.f1a1c6ad.js";import{P as y}from"./product.controller.e31c6526.js";import{P as f}from"./product.mixin.e8275ace.js";import"./context.controller.a49bc7fe.js";import"./component.mixin.5ee5865e.js";const g=a`
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
`;let o=class extends f(){constructor(){super(...arguments),this.product$=new y(this).getProduct(),this.options$=new h(this).getOptions(),this.optionsObserver=this.options$.pipe(l(t=>{if(!(t!=null&&t.columnCount)){this.removeAttribute("style");return}this.setAttribute("style",`--column-count: ${t.columnCount}`)})),this.attributes$=this.product$.pipe(c(t=>{if(!t)return[];const{attributes:r,attributeNames:u={}}=t,s=[];for(const e in r)s.push({key:e,label:u[e],value:r[e]});return s}))}render(){return i`
      ${m(this.attributes$,t=>i`
          <ul>
            ${p(t,r=>r.key,r=>i`
                <li>
                  <div>${r.label}</div>
                  <div>${r.value}</div>
                </li>
              `)}
          </ul>
        `)}
    `}};o.styles=g;n([v(),d("design:type",Object)],o.prototype,"optionsObserver",void 0);o=n([b()],o);export{o as ProductAttributesComponent};
