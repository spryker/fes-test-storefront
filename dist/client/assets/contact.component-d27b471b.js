import{r as o,y as s,aj as a}from"./index-4d2c92b7.js";import{C as i}from"./component.mixin-6d7092a2.js";import{i as c}from"./i18n.directive-8e3ebbd9.js";import{e as n,n as m}from"./ref-25dac95f.js";class d extends i(){constructor(){super(...arguments),this.checkoutDataService=o(a),this.formRef=n()}getFormElement(){return this.formRef.value?.getForm?.()}submit(e=!1){const t=this.getFormElement();if(!t?.checkValidity())return e?t?.reportValidity():this.checkoutDataService.setAddressDetails(null),!1;const r=Object.fromEntries(new FormData(t).entries());return this.checkoutDataService.setContactDetails(r),!0}render(){return s`
      <p>${c("checkout.contact-details")}</p>
      <user-contact-form ${m(this.formRef)}></user-contact-form>
    `}}export{d as CheckoutContactComponent};
