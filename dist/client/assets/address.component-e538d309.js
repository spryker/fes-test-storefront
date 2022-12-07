import{r,y as t,f as a,_ as i,g as o,aj as c,ak as n}from"./index-4d2c92b7.js";import{C as l}from"./component.mixin-6d7092a2.js";import{t as m}from"./state-464c8ba0.js";import{i as h}from"./i18n.directive-8e3ebbd9.js";import{e as u,n as f}from"./ref-25dac95f.js";class p extends l(){constructor(){super(...arguments),this.checkoutDataService=r(c),this.addressService=r(n),this.selectedAddress=null,this.addresses$=this.addressService.getAddresses(),this.formRef=u()}getFormElement(){return this.formRef.value?.getForm?.()}submit(s=!1){const e=this.getFormElement();if(!e?.checkValidity()&&!this.selectedAddress)return s?e?.reportValidity():this.checkoutDataService.setAddressDetails(null),!1;const d=e?Object.fromEntries(new FormData(e).entries()):this.selectedAddress;return this.checkoutDataService.setAddressDetails(d),!0}handleAddressFromList(s){this.selectedAddress=s.detail.address}render(){return t`${a(this.addresses$,s=>s?.length?t`
        <oryx-address-list
          .options=${{selectable:!0}}
          @oryx.address-change=${e=>this.handleAddressFromList(e)}
        ></oryx-address-list>
      `:t`
          <p>${h("checkout.address-details")}</p>
          <oryx-address-form ${f(this.formRef)}></oryx-address-form>
        `)}`}}i([m(),o("design:type",Object)],p.prototype,"selectedAddress",void 0);export{p as CheckoutAddressComponent};
