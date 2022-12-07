import{c as g,H as b,t as r,n as h,j as y,r as v,m as C,a1 as A,y as c,f as D,q as S,K as u,aK as _,_ as x,g as E,h as w,ak as j}from"./index.41f56078.js";import{C as k}from"./content.controller.980c45d6.js";import{s as N}from"./subscribe.decorator.3c5accf2.js";import{C as z}from"./component.mixin.534dfd2f.js";import{i as s}from"./i18n.directive.5ac487c1.js";function L(i){return`
    ${i.salutation}. ${i.firstName} ${i.lastName},
    ${i!=null&&i.company?`${i.company},`:""}
    ${i.address1} ${i.address2} ${i==null?void 0:i.address3},
    ${i.zipCode} ${i.city},
    ${i==null?void 0:i.country}
    `}const T="oryx.address-change";var $;(function(i){i.Shipping="shipping",i.Billing="billing"})($||($={}));const B=g`
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
`;let p=class extends z(){constructor(){super(...arguments),this.selectedAddress$=new b(1),this.handle$=this.selectedAddress$.pipe(r(t=>{t&&this.dispatchEvent(new CustomEvent(T,{bubbles:!0,composed:!0,detail:{address:t}}))}),h()),this.addresses$=y([v(j).getAddresses().pipe(h()),new k(this).getOptions()]).pipe(r(([t,n])=>{var o;if(!n.selectable){this.selectedAddress$.next(null);return}const e=t==null?void 0:t.find(l=>this.isDefault(l,n==null?void 0:n.defaultType));this.selectedAddress$.next((o=e!=null?e:t==null?void 0:t[0])!=null?o:null)})),this.data$=y([this.addresses$,this.selectedAddress$]).pipe(C(([t,n])=>[...t,n]))}isDefault(t,n="shipping"){var e,o;return n==="shipping"?(e=t==null?void 0:t.isDefaultShipping)!=null?e:!1:(o=t==null?void 0:t.isDefaultBilling)!=null?o:!1}onChange(t){const n=t.target;this.addresses$.pipe(A(1),r(([e])=>{var o;this.selectedAddress$.next((o=e==null?void 0:e.find(l=>l.id===n.value))!=null?o:null)})).subscribe()}render(){return c`${D(this.data$,([t,n,e])=>{const{selectable:o,editable:l,defaultType:f}=n;return!t||!t.length?c` <slot name="empty">
            <oryx-icon type="location" size="large"></oryx-icon>
            ${s("user.address.no-addresses")}
          </slot>`:c`${S(t,a=>a.id,a=>{const m=o?(e==null?void 0:e.id)===a.id:!1;return c`<oryx-tile .selected=${m}>
              <div>
                <div class="details">
                  <oryx-radio>
                    ${u(o,()=>c`<input
                        name="address"
                        type="radio"
                        value="${_(a.id)?a.id:""}"
                        ?checked=${m}
                        @change=${this.onChange}
                      />`)}
                    ${L(a)}
                  </oryx-radio>
                  ${u(this.isDefault(a,f),()=>c`<oryx-chip
                        >${s("user.address.default")}</oryx-chip
                      >`)}
                </div>
                ${u(l!=null?l:!0,()=>c`<div
                      class="controls ${o?"selectable":""}"
                    >
                      <oryx-button type="text">
                        <button>${s("user.address.edit")}</button>
                      </oryx-button>
                    </div>`)}
              </div>
            </oryx-tile>`})}`})}`}};p.styles=B;x([N(),E("design:type",Object)],p.prototype,"handle$",void 0);p=x([w()],p);export{p as AddressListComponent};
