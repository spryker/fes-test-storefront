import{c as x,r as s,B as y,ap as n,t as v,y as t,f as h,O as p,j as g,_ as d,g as S,h as $,au as f,al as b,av as C,aq as k,ar as M}from"./index.65290630.js";import{s as T}from"./subscribe.decorator.8b58ec29.js";import{C as w}from"./component.mixin.d9d48422.js";import{i as l}from"./i18n.directive.8a4e8c6b.js";const _=x`
  :host {
    display: flex;
    flex-direction: column;
    gap: 10px;

    --oryx-tile-padding: 0;
  }

  .no-methods {
    text-align: center;
    line-height: 22px;

    --oryx-icon-size: 40px;
  }

  oryx-radio {
    flex: 1;
  }

  oryx-radio::part(label) {
    padding: 20px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .price {
    font-weight: 600;
    font-size: var(--oryx-font-size-medium);
    flex: 1;
    text-align: end;
  }

  .delivery {
    flex-basis: 100%;
    font-weight: 600;
    color: var(--oryx-color-neutral-200);
    margin-inline-start: calc(var(--oryx-radio-size, 18px) + 8px);
  }
`;let o=class extends w(){constructor(){super(...arguments),this.shipmentService=s(f),this.priceService=s(b),this.localeService=s(C),this.orchestrationService=s(k),this.carriers$=this.shipmentService.getCarriers(),this.currentMethod$=new y(null),this.selectedShipmentMethod$=this.shipmentService.getSelectedShipmentMethod(),this.submitTrigger$=this.orchestrationService.getTrigger(n.Shipping).pipe(v(e=>{e===M.Check&&this.orchestrationService.report(n.Shipping,this.submit())}))}submit(){const e=this.renderRoot.querySelector("input[checked]");return e?(this.shipmentService.setShipmentMethod(parseInt(e.value)),!0):!1}renderMethod(e,r=!1){return t`<oryx-tile ?selected="${r}">
      <div class="content">
        <oryx-radio>
          <input
            name="shipment-method"
            type="radio"
            .value="${e.id}"
            ?checked="${r}"
            @change="${()=>{this.currentMethod$.next(e.id),this.orchestrationService.report(n.Shipping,!0)}}"
          />${e.name}
          <span class="price">
            ${h(this.priceService.format(e.price),i=>t`${i}`)}
          </span>
          ${p(e.deliveryTime,()=>t`${h(this.localeService.formatDate(e.deliveryTime),i=>t`<small class="delivery">
                  ${l("checkout.delivered-at-<date>",{date:i})}
                </small>`)}`)}
        </oryx-radio>
      </div>
    </oryx-tile>`}renderEmpty(){return t`<oryx-icon type="carrier"></oryx-icon>
      <p class="no-methods">
        ${l("checkout.no-shipment-methods-available")}
      </p>`}render(){return t`${h(g([this.carriers$,this.selectedShipmentMethod$,this.currentMethod$]),([e,r,i])=>e!=null&&e.length?t`${e.map((c,m)=>t`${p(e.length>1,()=>t`<oryx-heading><h5>${c.name}</h5></oryx-heading>`)}
              ${c.shipmentMethods.map((a,u)=>this.renderMethod(a,i?i===a.id:r===0?m===0&&u===0:r==a.id))}`)}`:this.renderEmpty())}`}};o.styles=_;d([T(),S("design:type",Object)],o.prototype,"submitTrigger$",void 0);o=d([$()],o);export{o as CheckoutShipmentComponent};
