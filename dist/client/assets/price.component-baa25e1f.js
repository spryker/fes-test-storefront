import{C as o}from"./content.controller-bfcf20c7.js";import{c as n,r as l,l as p,y as e,f as h,K as c,ah as g,j as m}from"./index-74abacf3.js";import{P as f}from"./product.controller-b8cabd6e.js";import{P as $}from"./product.mixin-c69d7d06.js";import"./context.controller-7e0d2701.js";import"./component.mixin-ae2cf780.js";const v=n`
  :host {
    display: flex;
    gap: 10px;
    align-items: baseline;
    color: var(--oryx-color-highlight-300);
  }

  [part='original'] {
    position: relative;
    color: var(--oryx-color-neutral-400);
    font-size: 0.8em;
  }

  [part='original']::before {
    content: '';
    position: absolute;
    top: 50%;
    margin-inline-start: -5%;
    width: 110%;
    border-top: 1.5px solid var(--oryx-color-highlight-300);
    transform: rotate(-10deg);
  }
`,s=class extends $(){constructor(){super(...arguments),this.pricingService=l(g),this.options$=new o(this).getOptions(),this.product$=new f(this).getProduct(),this.price$=this.product$.pipe(p(i=>{var r,t;return m([this.pricingService.format((r=i==null?void 0:i.price)==null?void 0:r.defaultPrice),this.pricingService.format((t=i==null?void 0:i.price)==null?void 0:t.originalPrice),this.options$])}))}render(){return e`
      ${h(this.price$,([i,r,t])=>e`
          <span part=${`default${r?"":" default-original"}`}
            >${i}</span
          >
          ${c(r&&!(t!=null&&t.hideOriginal),()=>e`<span part="original">${r}</span>`)}
        `)}
    `}};let a=s;(()=>{s.styles=v})();export{a as ProductPriceComponent};
