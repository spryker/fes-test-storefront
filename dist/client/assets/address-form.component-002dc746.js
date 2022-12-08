import{c as y,r as i,B as m,l as n,j as u,aG as v,y as o,f as l,_ as p,v as $,g as d,h as g,aH as C,aI as S,aJ as f,ak as x,o as c,m as h}from"./index-41c5945f.js";import{F as b}from"./form.mixin-9f7e252a.js";import{o as F}from"./observe.decorator-62a61e42.js";import"./component.mixin-da8e468a.js";const A=y`
  :host {
    --oryx-layout-gap: 10px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oryx-layout-gap);
  }
`;var r;let a=(r=class extends b(){constructor(){super(...arguments),this.fieldRenderer=i(C),this.countryService=i(S),this.formService=i(f),this.addressService=i(x),this.country$=new m(this.country),this.activeCountry$=this.country$.pipe(n(e=>e?c(e):this.countryService.getAll().pipe(n(t=>t.length===1?c(t[0].iso2Code):this.addressService.getCurrentAddress().pipe(h(s=>(s==null?void 0:s.iso2Code)??t[0].iso2Code)))))),this.data$=u([this.countryService.getAll(),this.activeCountry$]),this.form$=this.activeCountry$.pipe(n(e=>e?this.formService.getForm({country:e}).pipe(h(t=>{var s;return(s=t==null?void 0:t.data)==null?void 0:s.options})):c([])))}render(){return o`<form>
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
    </form>`}onCountryChange(e){const t=e.target;this.country=t.options[t.selectedIndex].value,this.countryService.set(this.country)}},(()=>{r.styles=[A,v]})(),r);p([$(),d("design:type",String)],a.prototype,"country",void 0);p([F(),d("design:type",Object)],a.prototype,"country$",void 0);a=p([g()],a);export{a as AddressFormComponent};
