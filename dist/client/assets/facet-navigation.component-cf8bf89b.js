import{C as $}from"./content.controller-bfde8771.js";import{c as g,m as S,r as c,a5 as y,j as v,k as w,y as l,K as m,f as x,aB as C,R as F}from"./index-41c5945f.js";import{C as A}from"./component.mixin-da8e468a.js";import"./experience-composition-preview.component-9bef1f27.js";import"./experience-composition.component-2ff75422.js";import{l as L}from"./layout.styles-e5516ea1.js";import"./subscribe.decorator-b8b77f67.js";import"./observe.decorator-62a61e42.js";import"./state-2f3bc3a1.js";import"./screen-c0aae3c9.js";const b=g`
  oryx-collapsible {
    width: 100%;
    border: none;
  }

  li:has(ul) {
    display: contents;
  }
`,a=class extends A(){constructor(){super(...arguments),this.defaultOptions={valueRenderLimit:5,expandedItemsCount:5},this.options$=new $(this).getOptions().pipe(S(e=>({...this.defaultOptions,...e}))),this.facetListService=c(C),this.routerService=c(F),this.renderedFacetElements=new Map,this.facetVisibilityChange=new y,this.facets$=v([this.facetListService.get(),this.options$,this.facetVisibilityChange.pipe(w(null)),this.routerService.activatedRouter()])}renderFacets(e,t,s,i){return l`${e.map((r,o)=>(this.renderedFacetElements.set(r.parameter,{renderedItemsCount:0,isShowAll:r.parameter===(s==null?void 0:s.parameter)?s.isShowAll:!1}),l`
        <oryx-collapsible
          ?open=${o<t.expandedItemsCount}
          .appearance="inline"
          .toggleAppearance="iconButton"
          .header=${r.name}
        >
          ${m(Array.isArray(r.values),()=>l`
              ${this.renderFacetValues(r.values,r.parameter,t.valueRenderLimit,i)}
              ${this.renderShowHideAllButtons(r.parameter,this.getFacetValueLength(r.values))}
            `,()=>this.renderRangeValue(r.values))}
        </oryx-collapsible>
      `))}`}renderFacetValues(e,t,s,i){var o;const r=(o=this.renderedFacetElements)==null?void 0:o.get(t);return l`
      <ul>
        ${e==null?void 0:e.map(n=>{var h,u,d;if(!(this.checkValueRenderLimit(t,s)&&!(r!=null&&r.isShowAll)))return this.renderedFacetElements.set(t,{renderedItemsCount:((h=this.renderedFacetElements)==null?void 0:h.get(t).renderedItemsCount)+1,isShowAll:(r==null?void 0:r.isShowAll)??!1}),l`<li>
              <oryx-link>
                <a
                  href="${this.routerService.getUrl(i.route,{...i.extras,queryParams:{...((u=i.extras)==null?void 0:u.queryParams)??{},[t.toLowerCase()]:`${n.value??n.name}`}})}"
                >
                  ${n.name??n.value} (${n.count})
                </a>
              </oryx-link>
            </li>
            ${m((d=n.children)==null?void 0:d.length,()=>l`<li>
                  ${this.renderFacetValues(n.children,t,s,i)}
                </li>`)}`})}
      </ul>
    `}renderRangeValue(e){return l` ${e.max} ${e.max} `}render(){return l`
      ${x(this.facets$,([e,t,s,i])=>this.renderFacets(e??[],t,s,i))}
    `}getFacetValueLength(e){let t=e.length;const s=i=>{i.forEach(r=>{var o,n;(o=r.children)!=null&&o.length&&(t+=(n=r.children)==null?void 0:n.length,s(r.children))})};return s(e),t}checkValueRenderLimit(e,t){return this.renderedFacetElements.get(e).renderedItemsCount>=t}renderShowHideAllButtons(e,t){const s=this.renderedFacetElements.get(e);if(!(s.renderedItemsCount>=t&&!(s!=null&&s.isShowAll)))return s.isShowAll?l`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!1)}
        >
          Hide all
        </button>`:l`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!0)}
        >
          Show all (${t})
        </button>`}provideFacetVisibilityChange(e,t){this.facetVisibilityChange.next({parameter:e,isShowAll:t})}};let p=a;(()=>{a.styles=[L,b]})();export{p as SearchFacetNavigationComponent};
