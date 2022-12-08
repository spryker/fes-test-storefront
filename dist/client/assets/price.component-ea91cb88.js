import{c as n,d as p,r as c,B as l,l as d,y as o,f as h,_ as i,v as a,g as t,ah as y}from"./index-41c5945f.js";import{o as g}from"./observe.decorator-62a61e42.js";import{s as f}from"./subscribe.decorator-b8b77f67.js";const m=n`
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
`,r=class extends p{constructor(){super(...arguments),this.loading=!1,this.pricingService=c(y),this.price$=new l(this.price),this.formattedPrice$=this.price$.pipe(d(s=>this.pricingService.format(s)))}render(){return o`
      <slot></slot>
      ${h(this.formattedPrice$,s=>o`<span part="price">${s}</span>`)}
    `}};let e=r;(()=>{r.styles=m})();i([a(),t("design:type",Number)],e.prototype,"price",void 0);i([a({type:Boolean,reflect:!0}),t("design:type",Object)],e.prototype,"loading",void 0);i([g(),t("design:type",Object)],e.prototype,"price$",void 0);i([f(),t("design:type",Object)],e.prototype,"formattedPrice$",void 0);export{e as CartEntryPriceComponent};
