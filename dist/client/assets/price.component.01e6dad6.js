import{c as a,d as n,r as p,B as c,l,y as o,f as d,_ as t,v as s,g as r,ah as y}from"./index.571dc3d3.js";import{o as m}from"./observe.decorator.e3ab0c52.js";import{s as g}from"./subscribe.decorator.18c810d6.js";const h=a`
  :host {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  slot {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    margin-inline-end: 2px;
    color: var(--oryx-color-neutral-400);
  }

  span {
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    display: none;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--oryx-border-radius-small);
    background: var(--oryx-color-canvas-500);
  }

  :host([loading]) span::before {
    display: block;
  }
`;class e extends n{constructor(){super(...arguments),this.loading=!1,this.pricingService=p(y),this.price$=new c(this.price),this.formattedPrice$=this.price$.pipe(l(i=>this.pricingService.format(i)))}render(){return o`
      <slot></slot>
      ${d(this.formattedPrice$,i=>o`<span part="price">${i}</span>`)}
    `}}e.styles=h;t([s(),r("design:type",Number)],e.prototype,"price",void 0);t([s({type:Boolean,reflect:!0}),r("design:type",Object)],e.prototype,"loading",void 0);t([m(),r("design:type",Object)],e.prototype,"price$",void 0);t([g(),r("design:type",Object)],e.prototype,"formattedPrice$",void 0);export{e as CartEntryPriceComponent};
//# sourceMappingURL=price.component.01e6dad6.js.map
