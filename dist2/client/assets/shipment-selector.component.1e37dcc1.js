import{c as m,r as s,B as x,y as t,f as n,K as h,j as v,_ as y,h as u,ar as $,ah as f,as as S}from"./index.53aa1d0b.js";import{C as g}from"./component.mixin.c08d8cd0.js";import{i as l}from"./i18n.directive.67a5825a.js";const C=m`
  :host {
    display: flex;
    flex-direction: column;
    gap: 10px;
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

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .price {
    font-weight: 600;
    font-size: var(--oryx-font-size-medium);
  }

  .delivery {
    flex-basis: 100%;
    font-weight: 600;
    color: var(--oryx-color-neutral-200);
    margin-inline-start: calc(var(--oryx-radio-size, 18px) + 8px);
  }
`;let a=class extends g(){constructor(){super(...arguments),this.shipmentService=s($),this.priceService=s(f),this.localeService=s(S),this.carriers$=this.shipmentService.getCarriers(),this.currentMethod$=new x(null),this.selectedShipmentMethod$=this.shipmentService.getSelectedShipmentMethod()}renderMethod(e,r=!1){return t`<oryx-tile ?selected="${r}">
      <div class="content">
        <oryx-radio>
          <input
            name="shipment-method"
            type="radio"
            ?checked="${r}"
            @change="${()=>{this.currentMethod$.next(e.id)}}"
          />${e.name}
        </oryx-radio>
        <span class="price">
          ${n(this.priceService.format(e.price),i=>t`${i}`)}
        </span>
        ${h(e.deliveryTime,()=>t`${n(this.localeService.formatDate(e.deliveryTime),i=>t`<small class="delivery">
                ${l("checkout.delivered-at-<date>",{date:i})}
              </small>`)}`)}
      </div>
    </oryx-tile>`}render(){return t`${n(v([this.carriers$,this.selectedShipmentMethod$,this.currentMethod$]),([e,r,i])=>e!=null&&e.length?t`${e.map((c,p)=>t`${h(e.length>1,()=>t`<h3>${c.name}</h3>`)}
          ${c.shipmentMethods.map((o,d)=>this.renderMethod(o,i?i===o.id:r===0?p===0&&d===0:r==o.id))}`)}`:t`<oryx-icon type="carrier"></oryx-icon>
            <div class="no-methods">
              ${l("checkout.no-shipment-methods-available")}
            </div>`)}`}};a.styles=C;a=y([u()],a);export{a as CheckoutShipmentSelectorComponent};
