import{c as v,r as a,B as y,al as n,t as g,y as t,f as h,K as l,j as S,_ as m,g as $,h as f,aq as b,ah as k,ar as C,am as M,an as T}from"./index-41c5945f.js";import{s as z}from"./subscribe.decorator-b8b77f67.js";import{C as w}from"./component.mixin-da8e468a.js";import{i as d}from"./i18n.directive-f3adb952.js";const _=v`
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
`;var s;let c=(s=class extends w(){constructor(){super(...arguments),this.shipmentService=a(b),this.priceService=a(k),this.localeService=a(C),this.orchestrationService=a(M),this.carriers$=this.shipmentService.getCarriers(),this.currentMethod$=new y(null),this.selectedShipmentMethod$=this.shipmentService.getSelectedShipmentMethod(),this.submitTrigger$=this.orchestrationService.getTrigger(n.Shipping).pipe(g(e=>{e===T.Check&&this.orchestrationService.report(n.Shipping,this.submit())}))}submit(){const e=this.renderRoot.querySelector("input[checked]");return e?(this.shipmentService.setShipmentMethod(parseInt(e.value)),!0):!1}renderMethod(e,r=!1){return t`<oryx-tile ?selected="${r}">
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
          ${l(e.deliveryTime,()=>t`${h(this.localeService.formatDate(e.deliveryTime),i=>t`<small class="delivery">
                  ${d("checkout.delivered-at-<date>",{date:i})}
                </small>`)}`)}
        </oryx-radio>
      </div>
    </oryx-tile>`}renderEmpty(){return t`<oryx-icon type="carrier"></oryx-icon>
      <p class="no-methods">
        ${d("checkout.no-shipment-methods-available")}
      </p>`}render(){return t`${h(S([this.carriers$,this.selectedShipmentMethod$,this.currentMethod$]),([e,r,i])=>e!=null&&e.length?t`${e.map((p,u)=>t`${l(e.length>1,()=>t`<h3>${p.name}</h3>`)}
              ${p.shipmentMethods.map((o,x)=>this.renderMethod(o,i?i===o.id:r===0?u===0&&x===0:r==o.id))}`)}`:this.renderEmpty())}`}},(()=>{s.styles=_})(),s);m([z(),$("design:type",Object)],c.prototype,"submitTrigger$",void 0);c=m([f()],c);export{c as CheckoutShipmentComponent};
