import{c as r,y as e}from"./index-4d2c92b7.js";import{C as o}from"./component.mixin-6d7092a2.js";const i=r`
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
`;class c extends o(){static{this.styles=i}render(){const t=this.options?.calculations?.sumPriceToPayAggregation;return e`
      <cart-entry-price .price="${t}" ?loading="${this.options?.updating}">
        Total price
      </cart-entry-price>
    `}}export{c as CartEntryTotalsComponent};
