import{C as e}from"./content.controller-33ee67c3.js";import{c as s,r as a,l as n,y as i,f as p,K as c,ah as l,j as h}from"./index-4d2c92b7.js";import{P as m}from"./product.controller-77c96ee5.js";import{P as g}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";const d=s`
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
`;class C extends g(){constructor(){super(...arguments),this.pricingService=a(l),this.options$=new e(this).getOptions(),this.product$=new m(this).getProduct(),this.price$=this.product$.pipe(n(t=>h([this.pricingService.format(t?.price?.defaultPrice),this.pricingService.format(t?.price?.originalPrice),this.options$])))}static{this.styles=d}render(){return i`
      ${p(this.price$,([t,r,o])=>i`
          <span part=${`default${r?"":" default-original"}`}
            >${t}</span
          >
          ${c(r&&!o?.hideOriginal,()=>i`<span part="original">${r}</span>`)}
        `)}
    `}}export{C as ProductPriceComponent};
