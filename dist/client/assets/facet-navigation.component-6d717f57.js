import{C as h}from"./content.controller-33ee67c3.js";import{c as d,m as c,r as l,a5 as u,j as m,k as p,y as s,K as o,f as g,aB as $,R as C}from"./index-4d2c92b7.js";import{C as y}from"./component.mixin-6d7092a2.js";import"./experience-composition-preview.component-f7d2d25e.js";import"./experience-composition.component-ff3b35e3.js";import{l as F}from"./layout.styles-1c4c0b88.js";import"./subscribe.decorator-50a973f5.js";import"./observe.decorator-af7161d0.js";import"./state-464c8ba0.js";import"./screen-c0aae3c9.js";const S=d`
  oryx-collapsible {
    width: 100%;
    border: none;
  }

  li:has(ul) {
    display: contents;
  }
`;class R extends y(){constructor(){super(...arguments),this.defaultOptions={valueRenderLimit:5,expandedItemsCount:5},this.options$=new h(this).getOptions().pipe(c(e=>({...this.defaultOptions,...e}))),this.facetListService=l($),this.routerService=l(C),this.renderedFacetElements=new Map,this.facetVisibilityChange=new u,this.facets$=m([this.facetListService.get(),this.options$,this.facetVisibilityChange.pipe(p(null)),this.routerService.activatedRouter()])}static{this.styles=[F,S]}renderFacets(e,t,n,i){return s`${e.map((r,a)=>(this.renderedFacetElements.set(r.parameter,{renderedItemsCount:0,isShowAll:r.parameter===n?.parameter?n.isShowAll:!1}),s`
        <oryx-collapsible
          ?open=${a<t.expandedItemsCount}
          .appearance="inline"
          .toggleAppearance="iconButton"
          .header=${r.name}
        >
          ${o(Array.isArray(r.values),()=>s`
              ${this.renderFacetValues(r.values,r.parameter,t.valueRenderLimit,i)}
              ${this.renderShowHideAllButtons(r.parameter,this.getFacetValueLength(r.values))}
            `,()=>this.renderRangeValue(r.values))}
        </oryx-collapsible>
      `))}`}renderFacetValues(e,t,n,i){const r=this.renderedFacetElements?.get(t);return s`
      <ul>
        ${e?.map(a=>{if(!(this.checkValueRenderLimit(t,n)&&!r?.isShowAll))return this.renderedFacetElements.set(t,{renderedItemsCount:this.renderedFacetElements?.get(t).renderedItemsCount+1,isShowAll:r?.isShowAll??!1}),s`<li>
              <oryx-link>
                <a
                  href="${this.routerService.getUrl(i.route,{...i.extras,queryParams:{...i.extras?.queryParams??{},[t.toLowerCase()]:`${a.value??a.name}`}})}"
                >
                  ${a.name??a.value} (${a.count})
                </a>
              </oryx-link>
            </li>
            ${o(a.children?.length,()=>s`<li>
                  ${this.renderFacetValues(a.children,t,n,i)}
                </li>`)}`})}
      </ul>
    `}renderRangeValue(e){return s` ${e.max} ${e.max} `}render(){return s`
      ${g(this.facets$,([e,t,n,i])=>this.renderFacets(e??[],t,n,i))}
    `}getFacetValueLength(e){let t=e.length;const n=i=>{i.forEach(r=>{r.children?.length&&(t+=r.children?.length,n(r.children))})};return n(e),t}checkValueRenderLimit(e,t){return this.renderedFacetElements.get(e).renderedItemsCount>=t}renderShowHideAllButtons(e,t){const n=this.renderedFacetElements.get(e);if(!(n.renderedItemsCount>=t&&!n?.isShowAll))return n.isShowAll?s`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!1)}
        >
          Hide all
        </button>`:s`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!0)}
        >
          Show all (${t})
        </button>`}provideFacetVisibilityChange(e,t){this.facetVisibilityChange.next({parameter:e,isShowAll:t})}}export{R as SearchFacetNavigationComponent};
