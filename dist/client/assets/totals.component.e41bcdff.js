import{c as l,j as d,y as a,f as c,K as i,ai as u,_ as x,h as p}from"./index.175fafb9.js";import{C as m}from"./content.controller.9c48864b.js";import{C as y}from"./cart.controller.19cff8c0.js";import{C as h}from"./cart.mixin.ea7e01dc.js";import"./component.mixin.527a540b.js";const g=l`
  :host {
    --oryx-icon-size-small: 15px;

    background-color: var(--oryx-color-canvas-200);
    border-radius: var(--oryx-border-radius-small);
    font-size: var(--oryx-font-size-medium);
    line-height: 1.5;
  }

  h4 {
    padding-top: var(--oryx-space-4);
  }

  :host > * {
    padding-inline: var(--oryx-space-4);
  }

  :host > dl:last-child {
    margin-top: var(--oryx-space-2);
    padding-top: var(--oryx-space-3);
    padding-bottom: var(--oryx-space-4);
    border-top: solid 1px var(--oryx-color-canvas-500);
    font-weight: 600;
  }

  :host > dl:last-child dd {
    font-size: var(--oryx-font-size-large);
  }

  small {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--oryx-color-neutral-200);
  }

  small.tax-message {
    font-size: var(--oryx-font-size-medium);
    font-weight: 500;
    display: block;
  }

  h4,
  dl,
  dt,
  dd,
  p {
    margin: 0;
  }

  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: var(--oryx-space-2);
  }

  dd {
    justify-self: end;
    text-align: end;
  }

  [slot='aside'],
  oryx-collapsible dd {
    color: var(--oryx-color-highlight-300);
  }

  dl,
  oryx-collapsible {
    margin-top: var(--oryx-space-4);
  }

  oryx-collapsible :is(dt, dd) {
    font-size: 1rem;
  }

  oryx-collapsible dl {
    margin-top: var(--oryx-space-2);
  }
`;let t=class extends h(){constructor(){super(...arguments),this.cartTotals$=d([new y(this).getTotals(),new m(this).getOptions()])}render(){return a`
      ${c(this.cartTotals$,([r,e])=>r?a`
          <h4>Summary</h4>
          ${this.renderSubtotal(e,r)}
          ${this.renderDiscounts(e,r)}
          ${this.renderExpense(e,r)}
          ${this.renderTax(e,r)}
          ${this.renderDelivery(e,r)}
          ${this.renderSummary(e,r)}
        `:a``)}
    `}renderSubtotal(r,e){var s;return r.hideSubtotal?a``:this.renderSection("subtotal",a`
            Subtotal
            <span
              >(${e.itemsQuantity}
              item${e.itemsQuantity===1?"":"s"})</span
            >
          `,String((s=e.calculations)==null?void 0:s.subtotal))}renderDiscounts(r,e){return a`
      ${i(!r.hideDiscounts&&e.calculations.discountTotal,()=>{var s;return a`
          <oryx-collapsible
            class="discounts"
            appearance="${"inline"}"
            header="Discounts"
            ?open=${!r.collapseDiscounts}
          >
            <span slot="aside">${e.calculations.discountTotal}</span>

            ${(s=e==null?void 0:e.discounts)==null?void 0:s.map(({displayName:o,amount:n})=>this.renderSection("discount",o,n))}
          </oryx-collapsible>
        `})}
    `}renderExpense(r,e){return e.calculations.expenseTotal&&!r.hideExpense?this.renderSection("expense","Expense",String(e.calculations.expenseTotal)):a``}renderTax(r,e){return e.calculations.taxTotal&&!r.hideTaxAmount?this.renderSection("tax","Tax",String(e.calculations.taxTotal)):a``}renderDelivery(r,e){var s;return r.hideDelivery?a``:this.renderSection("delivery","Delivery",a`
            <small class="delivery-message">
              ${(s=r==null?void 0:r.deliveryMessage)!=null?s:""}
              <oryx-icon-button size="small">
                <a href="#" title="Click here to read about delivery options">
                  <oryx-icon type="info"></oryx-icon>
                </a>
              </oryx-icon-button>
            </small>
          `)}renderSummary(r,e){return this.renderSection("summary","Total",a` ${e.calculations.priceToPay}
      ${i(!r.hideTaxMessage,()=>a`<small class="tax-message">
            ${e.priceMode===u.GrossMode?"incl. tax":"excl. tax"}
          </small>`)}`)}renderSection(r,e,s){return a`
      <dl class=${r}>
        <dt>${e}</dt>
        <dd>${s}</dd>
      </dl>
    `}};t.styles=g;t=x([p()],t);export{t as CartTotalsComponent};
