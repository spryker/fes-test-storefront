import{c as o,y as a}from"./index-74abacf3.js";import{C as n}from"./component.mixin-ae2cf780.js";const p=o`
  :host {
    display: flex;
    justify-content: flex-end;
    padding: 7px var(--oryx-space-4);
    background: var(--oryx-color-canvas-200);
  }

  cart-entry-price::part(price) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }
`,t=class extends n(){render(){var i,r,e;const s=(r=(i=this.options)==null?void 0:i.calculations)==null?void 0:r.sumPriceToPayAggregation;return a`
      <cart-entry-price .price="${s}" ?loading="${(e=this.options)==null?void 0:e.updating}">
        Total price
      </cart-entry-price>
    `}};let c=t;(()=>{t.styles=p})();export{c as CartEntryTotalsComponent};
