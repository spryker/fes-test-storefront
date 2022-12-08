import{r as o,y as s,an as a}from"./index.65290630.js";import{C as i}from"./component.mixin.d9d48422.js";import{i as n}from"./i18n.directive.8a4e8c6b.js";import{e as c,n as m}from"./ref.34276d00.js";class p extends i(){constructor(){super(...arguments),this.checkoutDataService=o(a),this.formRef=c()}getFormElement(){var e,t;return(t=(e=this.formRef.value)==null?void 0:e.getForm)==null?void 0:t.call(e)}submit(e=!1){const t=this.getFormElement();if(!(t!=null&&t.checkValidity()))return e?t==null||t.reportValidity():this.checkoutDataService.setAddressDetails(null),!1;const r=Object.fromEntries(new FormData(t).entries());return this.checkoutDataService.setContactDetails(r),!0}render(){return s`
      <oryx-heading .tag=${"subtitle"}>
        ${n("checkout.contact-details")}
      </oryx-heading>

      <user-contact-form ${m(this.formRef)}></user-contact-form>
    `}}export{p as CheckoutContactComponent};
