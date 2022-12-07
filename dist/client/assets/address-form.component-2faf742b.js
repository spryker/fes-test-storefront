import{c as h,r as o,B as m,l as i,j as y,aG as u,y as s,f as c,_ as d,v,g as l,h as $,aH as g,aI as C,aJ as f,ak as S,o as n,m as p}from"./index-4d2c92b7.js";import{F as x}from"./form.mixin-6776c590.js";import{o as F}from"./observe.decorator-af7161d0.js";import"./component.mixin-6d7092a2.js";const b=h`
  :host {
    --oryx-layout-gap: 10px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oryx-layout-gap);
  }
`;let a=class extends x(){constructor(){super(...arguments),this.fieldRenderer=o(g),this.countryService=o(C),this.formService=o(f),this.addressService=o(S),this.country$=new m(this.country),this.activeCountry$=this.country$.pipe(i(e=>e?n(e):this.countryService.getAll().pipe(i(t=>t.length===1?n(t[0].iso2Code):this.addressService.getCurrentAddress().pipe(p(r=>r?.iso2Code??t[0].iso2Code)))))),this.data$=y([this.countryService.getAll(),this.activeCountry$]),this.form$=this.activeCountry$.pipe(i(e=>e?this.formService.getForm({country:e}).pipe(p(t=>t?.data?.options)):n([])))}static{this.styles=[b,u]}render(){return s`<form>
      ${c(this.data$,([e,t])=>s`
          ${e.length>1?s`<oryx-select class="w100" label="Country *">
                <select
                  name="country"
                  .value=${t}
                  @change=${this.onCountryChange}
                >
                  ${e.map(r=>s`<option
                      value=${r.iso2Code}
                      ?selected=${r.iso2Code===t}
                    >
                      ${r.name}
                    </option>`)}
                </select>
              </oryx-select>`:s``}
        `)}
      ${c(this.form$,e=>e?this.fieldRenderer.buildForm(e):s``)}
    </form>`}onCountryChange(e){const t=e.target;this.country=t.options[t.selectedIndex].value,this.countryService.set(this.country)}};d([v(),l("design:type",String)],a.prototype,"country",void 0);d([F(),l("design:type",Object)],a.prototype,"country$",void 0);a=d([$()],a);export{a as AddressFormComponent};
