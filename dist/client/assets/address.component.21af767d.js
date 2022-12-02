import{r,y as t,f as i,_ as a,g as o,aj as c,ak as n}from"./index.e698feb0.js";import{C as l}from"./component.mixin.cf8fd244.js";import{t as h}from"./state.87e1732e.js";import{i as m}from"./i18n.directive.007251a1.js";import{e as u,n as f}from"./ref.3e1f0433.js";class p extends l(){constructor(){super(...arguments),this.checkoutDataService=r(c),this.addressService=r(n),this.selectedAddress=null,this.addresses$=this.addressService.getAddresses(),this.formRef=u()}getFormElement(){var s,e;return(e=(s=this.formRef.value)==null?void 0:s.getForm)==null?void 0:e.call(s)}submit(s=!1){const e=this.getFormElement();if(!(e!=null&&e.checkValidity())&&!this.selectedAddress)return s?e==null||e.reportValidity():this.checkoutDataService.setAddressDetails(null),!1;const d=e?Object.fromEntries(new FormData(e).entries()):this.selectedAddress;return this.checkoutDataService.setAddressDetails(d),!0}handleAddressFromList(s){this.selectedAddress=s.detail.address}render(){return t`${i(this.addresses$,s=>s!=null&&s.length?t`
        <oryx-address-list
          .options=${{selectable:!0}}
          @oryx.address-change=${e=>this.handleAddressFromList(e)}
        ></oryx-address-list>
      `:t`
          <p>${m("checkout.address-details")}</p>
          <oryx-address-form ${f(this.formRef)}></oryx-address-form>
        `)}`}}a([h(),o("design:type",Object)],p.prototype,"selectedAddress",void 0);export{p as CheckoutAddressComponent};