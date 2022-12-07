import{c as x,H as g,t as l,n as u,j as m,r as b,m as v,a1 as A,y as a,f as C,q as D,K as r,aK as S,_ as y,g as _,h as E,ak as w}from"./index-4d2c92b7.js";import{C as j}from"./content.controller-33ee67c3.js";import{s as k}from"./subscribe.decorator-50a973f5.js";import{C as N}from"./component.mixin-6d7092a2.js";import{i as d}from"./i18n.directive-8e3ebbd9.js";function z(t){return`
    ${t.salutation}. ${t.firstName} ${t.lastName},
    ${t?.company?`${t.company},`:""}
    ${t.address1} ${t.address2} ${t?.address3},
    ${t.zipCode} ${t.city},
    ${t?.country}
    `}const L="oryx.address-change";var h;(function(t){t.Shipping="shipping",t.Billing="billing"})(h||(h={}));const T=x`
  :host {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .controls {
    display: flex;
    width: 100%;
    margin: 0 -3px;
  }

  .controls.selectable {
    padding-inline-start: 27px;
  }

  .controls > * {
    margin-inline-end: 10px;
  }

  slot[name='empty'] {
    --oryx-icon-size: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background: var(--oryx-color-canvas-200);
  }

  slot[name='empty'] oryx-icon {
    margin-bottom: 15px;
  }
`;let c=class extends N(){constructor(){super(...arguments),this.selectedAddress$=new g(1),this.handle$=this.selectedAddress$.pipe(l(e=>{e&&this.dispatchEvent(new CustomEvent(L,{bubbles:!0,composed:!0,detail:{address:e}}))}),u()),this.addresses$=m([b(w).getAddresses().pipe(u()),new j(this).getOptions()]).pipe(l(([e,s])=>{if(!s.selectable){this.selectedAddress$.next(null);return}const o=e?.find(i=>this.isDefault(i,s?.defaultType));this.selectedAddress$.next(o??e?.[0]??null)})),this.data$=m([this.addresses$,this.selectedAddress$]).pipe(v(([e,s])=>[...e,s]))}static{this.styles=T}isDefault(e,s="shipping"){return s==="shipping"?e?.isDefaultShipping??!1:e?.isDefaultBilling??!1}onChange(e){const s=e.target;this.addresses$.pipe(A(1),l(([o])=>{this.selectedAddress$.next(o?.find(i=>i.id===s.value)??null)})).subscribe()}render(){return a`${C(this.data$,([e,s,o])=>{const{selectable:i,editable:$,defaultType:f}=s;return!e||!e.length?a` <slot name="empty">
            <oryx-icon type="location" size="large"></oryx-icon>
            ${d("user.address.no-addresses")}
          </slot>`:a`${D(e,n=>n.id,n=>{const p=i?o?.id===n.id:!1;return a`<oryx-tile .selected=${p}>
              <div>
                <div class="details">
                  <oryx-radio>
                    ${r(i,()=>a`<input
                        name="address"
                        type="radio"
                        value="${S(n.id)?n.id:""}"
                        ?checked=${p}
                        @change=${this.onChange}
                      />`)}
                    ${z(n)}
                  </oryx-radio>
                  ${r(this.isDefault(n,f),()=>a`<oryx-chip
                        >${d("user.address.default")}</oryx-chip
                      >`)}
                </div>
                ${r($??!0,()=>a`<div
                      class="controls ${i?"selectable":""}"
                    >
                      <oryx-button type="text">
                        <button>${d("user.address.edit")}</button>
                      </oryx-button>
                    </div>`)}
              </div>
            </oryx-tile>`})}`})}`}};y([k(),_("design:type",Object)],c.prototype,"handle$",void 0);c=y([E()],c);export{c as AddressListComponent};
