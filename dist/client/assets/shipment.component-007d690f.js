import{c as x,r as s,B as v,al as o,t as y,y as t,f as n,K as p,j as g,_ as d,g as S,h as $,aq as f,ah as b,ar as C,am as k,an as M}from"./index-4d2c92b7.js";import{s as T}from"./subscribe.decorator-50a973f5.js";import{C as z}from"./component.mixin-6d7092a2.js";import{i as l}from"./i18n.directive-8e3ebbd9.js";const w=x`
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

  h3 {
    line-height: 24px;
    margin: 0;
    font-size: var(--oryx-font-size-medium);
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
`;let c=class extends z(){constructor(){super(...arguments),this.shipmentService=s(f),this.priceService=s(b),this.localeService=s(C),this.orchestrationService=s(k),this.carriers$=this.shipmentService.getCarriers(),this.currentMethod$=new v(null),this.selectedShipmentMethod$=this.shipmentService.getSelectedShipmentMethod(),this.submitTrigger$=this.orchestrationService.getTrigger(o.Shipping).pipe(y(e=>{e===M.Check&&this.orchestrationService.report(o.Shipping,this.submit())}))}static{this.styles=w}submit(){const e=this.renderRoot.querySelector("input[checked]");return e?(this.shipmentService.setShipmentMethod(parseInt(e.value)),!0):!1}renderMethod(e,r=!1){return t`<oryx-tile ?selected="${r}">
      <div class="content">
        <oryx-radio>
          <input
            name="shipment-method"
            type="radio"
            .value="${e.id}"
            ?checked="${r}"
            @change="${()=>{this.currentMethod$.next(e.id),this.orchestrationService.report(o.Shipping,!0)}}"
          />${e.name}
          <span class="price">
            ${n(this.priceService.format(e.price),i=>t`${i}`)}
          </span>
          ${p(e.deliveryTime,()=>t`${n(this.localeService.formatDate(e.deliveryTime),i=>t`<small class="delivery">
                  ${l("checkout.delivered-at-<date>",{date:i})}
                </small>`)}`)}
        </oryx-radio>
      </div>
    </oryx-tile>`}renderEmpty(){return t`<oryx-icon type="carrier"></oryx-icon>
      <p class="no-methods">
        ${l("checkout.no-shipment-methods-available")}
      </p>`}render(){return t`${n(g([this.carriers$,this.selectedShipmentMethod$,this.currentMethod$]),([e,r,i])=>e?.length?t`${e.map((h,m)=>t`${p(e.length>1,()=>t`<h3>${h.name}</h3>`)}
              ${h.shipmentMethods.map((a,u)=>this.renderMethod(a,i?i===a.id:r===0?m===0&&u===0:r==a.id))}`)}`:this.renderEmpty())}`}};d([T(),S("design:type",Object)],c.prototype,"submitTrigger$",void 0);c=d([$()],c);export{c as CheckoutShipmentComponent};
