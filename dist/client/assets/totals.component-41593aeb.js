import{c as n,j as l,y as a,f as d,K as s,ai as c,_ as p,h as u}from"./index-4d2c92b7.js";import{C as x}from"./content.controller-33ee67c3.js";import{C as m}from"./cart.controller-82b16f68.js";import{C as y}from"./cart.mixin-23e99dc5.js";import"./component.mixin-6d7092a2.js";const h=n`
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
`;let o=class extends y(){constructor(){super(...arguments),this.cartTotals$=l([new m(this).getTotals(),new x(this).getOptions()])}static{this.styles=h}render(){return a`
      ${d(this.cartTotals$,([r,e])=>r?a`
          <h4>Summary</h4>
          ${this.renderSubtotal(e,r)}
          ${this.renderDiscounts(e,r)}
          ${this.renderExpense(e,r)}
          ${this.renderTax(e,r)}
          ${this.renderDelivery(e,r)}
          ${this.renderSummary(e,r)}
        `:a``)}
    `}renderSubtotal(r,e){return r.hideSubtotal?a``:this.renderSection("subtotal",a`
            Subtotal
            <span
              >(${e.itemsQuantity}
              item${e.itemsQuantity===1?"":"s"})</span
            >
          `,String(e.calculations?.subtotal))}renderDiscounts(r,e){return a`
      ${s(!r.hideDiscounts&&e.calculations.discountTotal,()=>a`
          <oryx-collapsible
            class="discounts"
            appearance="${"inline"}"
            header="Discounts"
            ?open=${!r.collapseDiscounts}
          >
            <span slot="aside">${e.calculations.discountTotal}</span>

            ${e?.discounts?.map(({displayName:t,amount:i})=>this.renderSection("discount",t,i))}
          </oryx-collapsible>
        `)}
    `}renderExpense(r,e){return e.calculations.expenseTotal&&!r.hideExpense?this.renderSection("expense","Expense",String(e.calculations.expenseTotal)):a``}renderTax(r,e){return e.calculations.taxTotal&&!r.hideTaxAmount?this.renderSection("tax","Tax",String(e.calculations.taxTotal)):a``}renderDelivery(r,e){return r.hideDelivery?a``:this.renderSection("delivery","Delivery",a`
            <small class="delivery-message">
              ${r?.deliveryMessage??""}
              <oryx-icon-button size="small">
                <a href="#" title="Click here to read about delivery options">
                  <oryx-icon type="info"></oryx-icon>
                </a>
              </oryx-icon-button>
            </small>
          `)}renderSummary(r,e){return this.renderSection("summary","Total",a` ${e.calculations.priceToPay}
      ${s(!r.hideTaxMessage,()=>a`<small class="tax-message">
            ${e.priceMode===c.GrossMode?"incl. tax":"excl. tax"}
          </small>`)}`)}renderSection(r,e,t){return a`
      <dl class=${r}>
        <dt>${e}</dt>
        <dd>${t}</dd>
      </dl>
    `}};o=p([u()],o);export{o as CartTotalsComponent};
