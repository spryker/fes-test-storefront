import{c as u,j as m,y as a,f as x,N as p,O as y,am as h,_ as g,h as $}from"./index.65290630.js";import{C as v}from"./content.controller.53d4125f.js";import{i as t}from"./i18n.directive.8a4e8c6b.js";import{C as b}from"./cart.controller.84c526da.js";import{C as f}from"./cart.mixin.39b3a34b.js";import"./component.mixin.d9d48422.js";const T=u`
  :host {
    --oryx-icon-size-small: 15px;
  }

  h2 {
    margin-bottom: var(--oryx-space-4);
  }

  h2,
  section > * {
    padding-inline: var(--oryx-space-4);
  }

  section {
    display: flex;
    flex-direction: column;
    row-gap: var(--oryx-space-4);
    background-color: var(--oryx-color-canvas-200);
    padding-block: var(--oryx-space-4);
    border-radius: var(--oryx-border-radius-small);
  }

  section > oryx-heading {
    display: flex;
    justify-content: space-between;
  }

  section > oryx-heading > span {
    text-align: end;
  }

  .summary,
  .summary + oryx-heading {
    padding-top: var(--oryx-space-2);
    border-top: solid 1px var(--oryx-color-canvas-500);
  }

  small {
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--oryx-color-neutral-300);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr max-content;
    row-gap: var(--oryx-space-2);
    list-style: none;
    color: var(--oryx-color-neutral-300);
    margin: 0;
  }

  li {
    display: contents;
  }

  oryx-collapsible > ul {
    padding: var(--oryx-space-2) 0 0 0;
  }

  :not(oryx-collapsible) > ul {
    margin-top: -10px;
    padding-inline: var(--oryx-space-4);
  }

  .discount oryx-heading[slot='aside'],
  .discounts span:last-child {
    color: var(--oryx-color-highlight-300);
    white-space: nowrap;
  }
`;let s=class extends f(){constructor(){super(...arguments),this.cartTotals$=m([new b(this).getTotals(),new v(this).getOptions()])}render(){return a`
      ${x(this.cartTotals$,([e,r])=>e?a`
          <oryx-heading md-mimic="h4">
            <h2>${t("cart.totals.summary")}</h2>
          </oryx-heading>
          <section>
            ${this.renderSubtotal(r,e)}
            ${this.renderDiscounts(r,e)}
            ${this.renderExpense(r,e)}
            ${this.renderTax(r,e)}
            ${this.renderDelivery(r,e)}
            ${this.renderSummary(r,e)}
          </section>
        `:a``)}
    `}renderSubtotal(e,r){var n;return e.hideSubtotal?a``:this.renderSection("subtotal",a`${t("cart.totals.subtotal")}`,String((n=r.calculations)==null?void 0:n.subtotal))}renderDiscounts(e,r){var i,l;if(e.hideDiscounts||!r.calculations.discountTotal)return a``;const n=this.renderSection("discounts",a`${t("cart.totals.discount")}`,String(r.calculations.discountTotal));if(e.discountRowsAppearance==="none"||!((i=r.discounts)!=null&&i.length))return n;const o=a`<ul class="discounts">
      ${(l=r.discounts)==null?void 0:l.map(({displayName:c,amount:d})=>a`<li>
            <span>${c}</span>
            <span>${d}</span>
          </li>`)}
    </ul>`;return e.discountRowsAppearance==="inline"?a`${n}${o}`:a`<oryx-collapsible
      class="discount"
      appearance="${"inline"}"
      ?open=${e.discountRowsAppearance!=="collapsed"}
    >
      <oryx-heading slot="header" md-mimic="h6">
        <h3>${t("cart.totals.discount")}</h3>
      </oryx-heading>
      <oryx-heading slot="aside" md-mimic="h6" mimic="h3">
        ${r.calculations.discountTotal}
      </oryx-heading>
      ${o}
    </oryx-collapsible>`}renderExpense(e,r){return r.calculations.expenseTotal&&!e.hideExpense?this.renderSection("expense",a`${t("cart.totals.expense")}`,String(r.calculations.expenseTotal)):a``}renderTax(e,r){return r.calculations.taxTotal&&!e.hideTaxAmount?this.renderSection("tax","Tax",String(r.calculations.taxTotal)):a``}renderDelivery(e,r){return e.hideDelivery?a``:this.renderSection("delivery",a`${t("cart.totals.delivery")}`,a`
            <small class="delivery-message">
              ${p(e==null?void 0:e.deliveryMessage)}
              <oryx-icon-button size="small">
                <a href="#" title=${t("cart.totals.delivery-message")}>
                  <oryx-icon type="info"></oryx-icon>
                </a>
              </oryx-icon-button>
            </small>
          `)}renderSummary(e,r){return this.renderSection("summary",a`${t("cart.totals.total")}`,a` ${r.calculations.priceToPay}
      ${y(!e.hideTaxMessage,()=>a`<small class="tax-message">
            ${r.priceMode===h.GrossMode?t("cart.totals.tax-included"):t("cart.totals.tax-excluded")}
          </small>`)}`)}renderSection(e,r,n){return a`
      <oryx-heading md-mimic="h6" mimic="h3" class=${e}>
        <h3>${r}</h3>
        <span>${n}</span>
      </oryx-heading>
    `}};s.styles=T;s=g([$()],s);export{s as CartTotalsComponent};
