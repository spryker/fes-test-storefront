import{r as o,y as s,aj as a}from"./index.d896b0c8.js";import{C as i}from"./component.mixin.09051c71.js";import{i as c}from"./i18n.directive.5df8bbe6.js";import{e as n,n as m}from"./ref.4ae93579.js";class d extends i(){constructor(){super(...arguments),this.checkoutDataService=o(a),this.formRef=n()}getFormElement(){var e,t;return(t=(e=this.formRef.value)==null?void 0:e.getForm)==null?void 0:t.call(e)}submit(e=!1){const t=this.getFormElement();if(!(t!=null&&t.checkValidity()))return e?t==null||t.reportValidity():this.checkoutDataService.setAddressDetails(null),!1;const r=Object.fromEntries(new FormData(t).entries());return this.checkoutDataService.setContactDetails(r),!0}render(){return s`
      <p>${c("checkout.contact-details")}</p>
      <user-contact-form ${m(this.formRef)}></user-contact-form>
    `}}export{d as CheckoutContactComponent};
//# sourceMappingURL=contact.component.122d4543.js.map
