import{c as n,y as i}from"./index.dab5f70a.js";import{C as a}from"./component.mixin.bb013c5d.js";const s=n`
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
`;class c extends a(){render(){var t,r,e;const o=(r=(t=this.options)==null?void 0:t.calculations)==null?void 0:r.sumPriceToPayAggregation;return i`
      <cart-entry-price .price="${o}" ?loading="${(e=this.options)==null?void 0:e.updating}">
        Total price
      </cart-entry-price>
    `}}c.styles=s;export{c as CartEntryTotalsComponent};
