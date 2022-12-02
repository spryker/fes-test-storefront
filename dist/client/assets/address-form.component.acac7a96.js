import{c as y,r as i,B as m,l as a,j as u,y as o,f as l,aH as v,_ as c,v as $,g as h,h as g,aI as C,aJ as S,aK as f,ak as x,o as n,m as d}from"./index.53aa1d0b.js";import{F}from"./form.mixin.7838e134.js";import{o as b}from"./observe.decorator.e3ab0c52.js";import"./component.mixin.c08d8cd0.js";const A=y`
  :host {
    --oryx-layout-gap: 10px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oryx-layout-gap);
  }
`;let r=class extends F(){constructor(){super(...arguments),this.fieldRenderer=i(C),this.countryService=i(S),this.formService=i(f),this.addressService=i(x),this.country$=new m(this.country),this.activeCountry$=this.country$.pipe(a(e=>e?n(e):this.countryService.getAll().pipe(a(t=>t.length===1?n(t[0].iso2Code):this.addressService.getCurrentAddress().pipe(d(s=>{var p;return(p=s==null?void 0:s.iso2Code)!=null?p:t[0].iso2Code})))))),this.data$=u([this.countryService.getAll(),this.activeCountry$]),this.form$=this.activeCountry$.pipe(a(e=>e?this.formService.getForm({country:e}).pipe(d(t=>{var s;return(s=t==null?void 0:t.data)==null?void 0:s.options})):n([])))}render(){return o`<form>
      ${l(this.data$,([e,t])=>o`
          ${e.length>1?o`<oryx-select class="w100" label="Country *">
                <select
                  name="country"
                  .value=${t}
                  @change=${this.onCountryChange}
                >
                  ${e.map(s=>o`<option
                      value=${s.iso2Code}
                      ?selected=${s.iso2Code===t}
                    >
                      ${s.name}
                    </option>`)}
                </select>
              </oryx-select>`:o``}
        `)}
      ${l(this.form$,e=>e?this.fieldRenderer.buildForm(e):o``)}
    </form>`}onCountryChange(e){const t=e.target;this.country=t.options[t.selectedIndex].value,this.countryService.set(this.country)}};r.styles=[A,v];c([$(),h("design:type",String)],r.prototype,"country",void 0);c([b(),h("design:type",Object)],r.prototype,"country$",void 0);r=c([g()],r);export{r as AddressFormComponent};
