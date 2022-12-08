import{c as b,H as v,t as p,n as m,j as y,r as C,m as A,a1 as D,y as a,f as S,q as E,K as r,aK as _,_ as f,g as w,h as j,ak as k}from"./index-74abacf3.js";import{C as N}from"./content.controller-bfcf20c7.js";import{s as z}from"./subscribe.decorator-f722d0fb.js";import{C as T}from"./component.mixin-ae2cf780.js";import{i as u}from"./i18n.directive-d23a7a29.js";function B(i){return`
    ${i.salutation}. ${i.firstName} ${i.lastName},
    ${i!=null&&i.company?`${i.company},`:""}
    ${i.address1} ${i.address2} ${i==null?void 0:i.address3},
    ${i.zipCode} ${i.city},
    ${i==null?void 0:i.country}
    `}const H="oryx.address-change";var $;(function(i){i.Shipping="shipping",i.Billing="billing"})($||($={}));const K=b`
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
`;var c;let s=(c=class extends T(){constructor(){super(...arguments),this.selectedAddress$=new v(1),this.handle$=this.selectedAddress$.pipe(p(t=>{t&&this.dispatchEvent(new CustomEvent(H,{bubbles:!0,composed:!0,detail:{address:t}}))}),m()),this.addresses$=y([C(k).getAddresses().pipe(m()),new N(this).getOptions()]).pipe(p(([t,e])=>{if(!e.selectable){this.selectedAddress$.next(null);return}const n=t==null?void 0:t.find(l=>this.isDefault(l,e==null?void 0:e.defaultType));this.selectedAddress$.next(n??(t==null?void 0:t[0])??null)})),this.data$=y([this.addresses$,this.selectedAddress$]).pipe(A(([t,e])=>[...t,e]))}isDefault(t,e="shipping"){return e==="shipping"?(t==null?void 0:t.isDefaultShipping)??!1:(t==null?void 0:t.isDefaultBilling)??!1}onChange(t){const e=t.target;this.addresses$.pipe(D(1),p(([n])=>{this.selectedAddress$.next((n==null?void 0:n.find(l=>l.id===e.value))??null)})).subscribe()}render(){return a`${S(this.data$,([t,e,n])=>{const{selectable:l,editable:x,defaultType:g}=e;return!t||!t.length?a` <slot name="empty">
            <oryx-icon type="location" size="large"></oryx-icon>
            ${u("user.address.no-addresses")}
          </slot>`:a`${E(t,o=>o.id,o=>{const h=l?(n==null?void 0:n.id)===o.id:!1;return a`<oryx-tile .selected=${h}>
              <div>
                <div class="details">
                  <oryx-radio>
                    ${r(l,()=>a`<input
                        name="address"
                        type="radio"
                        value="${_(o.id)?o.id:""}"
                        ?checked=${h}
                        @change=${this.onChange}
                      />`)}
                    ${B(o)}
                  </oryx-radio>
                  ${r(this.isDefault(o,g),()=>a`<oryx-chip
                        >${u("user.address.default")}</oryx-chip
                      >`)}
                </div>
                ${r(x??!0,()=>a`<div
                      class="controls ${l?"selectable":""}"
                    >
                      <oryx-button type="text">
                        <button>${u("user.address.edit")}</button>
                      </oryx-button>
                    </div>`)}
              </div>
            </oryx-tile>`})}`})}`}},(()=>{c.styles=K})(),c);f([z(),w("design:type",Object)],s.prototype,"handle$",void 0);s=f([j()],s);export{s as AddressListComponent};
