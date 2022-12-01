import{C as o}from"./content.controller.2f1fd9c8.js";import{c as s,r as a,l as n,y as e,f as l,K as p,ah as c,j as h}from"./index.4dee5cd5.js";import{P as m}from"./product.controller.30fcb264.js";import{P as g}from"./product.mixin.0505c424.js";import"./context.controller.c080d1c5.js";import"./component.mixin.d2c5a023.js";const f=s`
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
`;class $ extends g(){constructor(){super(...arguments),this.pricingService=a(c),this.options$=new o(this).getOptions(),this.product$=new m(this).getProduct(),this.price$=this.product$.pipe(n(i=>{var r,t;return h([this.pricingService.format((r=i==null?void 0:i.price)==null?void 0:r.defaultPrice),this.pricingService.format((t=i==null?void 0:i.price)==null?void 0:t.originalPrice),this.options$])}))}render(){return e`
      ${l(this.price$,([i,r,t])=>e`
          <span part=${`default${r?"":" default-original"}`}
            >${i}</span
          >
          ${p(r&&!(t!=null&&t.hideOriginal),()=>e`<span part="original">${r}</span>`)}
        `)}
    `}}$.styles=f;export{$ as ProductPriceComponent};
