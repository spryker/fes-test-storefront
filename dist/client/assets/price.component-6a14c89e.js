import{c as a,d as n,r as p,B as c,l,y as s,f as d,_ as e,v as o,g as t,ah as y}from"./index-4d2c92b7.js";import{o as h}from"./observe.decorator-af7161d0.js";import{s as m}from"./subscribe.decorator-50a973f5.js";const g=a`
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
`;class r extends n{constructor(){super(...arguments),this.loading=!1,this.pricingService=p(y),this.price$=new c(this.price),this.formattedPrice$=this.price$.pipe(l(i=>this.pricingService.format(i)))}static{this.styles=g}render(){return s`
      <slot></slot>
      ${d(this.formattedPrice$,i=>s`<span part="price">${i}</span>`)}
    `}}e([o(),t("design:type",Number)],r.prototype,"price",void 0);e([o({type:Boolean,reflect:!0}),t("design:type",Object)],r.prototype,"loading",void 0);e([h(),t("design:type",Object)],r.prototype,"price$",void 0);e([m(),t("design:type",Object)],r.prototype,"formattedPrice$",void 0);export{r as CartEntryPriceComponent};
