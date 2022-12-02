import{C as S}from"./content.controller.13788f6c.js";import{c as v,m as C,r as g,a5 as y,j as F,k as w,y as l,K as $,f as x,aC as A,R as L}from"./index.e698feb0.js";import{C as b}from"./component.mixin.cf8fd244.js";import"./experience-composition-preview.component.5e5cd7b3.js";import"./experience-composition.component.73372c71.js";import{l as V}from"./layout.styles.d2cf89eb.js";import"./subscribe.decorator.adca8f3e.js";import"./observe.decorator.e3ab0c52.js";import"./state.87e1732e.js";import"./screen.63347f27.js";const I=v`
  oryx-collapsible {
    width: 100%;
    border: none;
  }

  li:has(ul) {
    display: contents;
  }
`;class k extends b(){constructor(){super(...arguments),this.defaultOptions={valueRenderLimit:5,expandedItemsCount:5},this.options$=new S(this).getOptions().pipe(C(e=>({...this.defaultOptions,...e}))),this.facetListService=g(A),this.routerService=g(L),this.renderedFacetElements=new Map,this.facetVisibilityChange=new y,this.facets$=F([this.facetListService.get(),this.options$,this.facetVisibilityChange.pipe(w(null)),this.routerService.activatedRouter()])}renderFacets(e,t,n,s){return l`${e.map((r,o)=>(this.renderedFacetElements.set(r.parameter,{renderedItemsCount:0,isShowAll:r.parameter===(n==null?void 0:n.parameter)?n.isShowAll:!1}),l`
        <oryx-collapsible
          ?open=${o<t.expandedItemsCount}
          .appearance="inline"
          .toggleAppearance="iconButton"
          .header=${r.name}
        >
          ${$(Array.isArray(r.values),()=>l`
              ${this.renderFacetValues(r.values,r.parameter,t.valueRenderLimit,s)}
              ${this.renderShowHideAllButtons(r.parameter,this.getFacetValueLength(r.values))}
            `,()=>this.renderRangeValue(r.values))}
        </oryx-collapsible>
      `))}`}renderFacetValues(e,t,n,s){var o;const r=(o=this.renderedFacetElements)==null?void 0:o.get(t);return l`
      <ul>
        ${e==null?void 0:e.map(i=>{var a,h,u,d,c,m,p;if(!(this.checkValueRenderLimit(t,n)&&!(r!=null&&r.isShowAll)))return this.renderedFacetElements.set(t,{renderedItemsCount:((a=this.renderedFacetElements)==null?void 0:a.get(t).renderedItemsCount)+1,isShowAll:(h=r==null?void 0:r.isShowAll)!=null?h:!1}),l`<li>
              <oryx-link>
                <a
                  href="${this.routerService.getUrl(s.route,{...s.extras,queryParams:{...(d=(u=s.extras)==null?void 0:u.queryParams)!=null?d:{},[t.toLowerCase()]:`${(c=i.value)!=null?c:i.name}`}})}"
                >
                  ${(m=i.name)!=null?m:i.value} (${i.count})
                </a>
              </oryx-link>
            </li>
            ${$((p=i.children)==null?void 0:p.length,()=>l`<li>
                  ${this.renderFacetValues(i.children,t,n,s)}
                </li>`)}`})}
      </ul>
    `}renderRangeValue(e){return l` ${e.max} ${e.max} `}render(){return l`
      ${x(this.facets$,([e,t,n,s])=>this.renderFacets(e!=null?e:[],t,n,s))}
    `}getFacetValueLength(e){let t=e.length;const n=s=>{s.forEach(r=>{var o,i;(o=r.children)!=null&&o.length&&(t+=(i=r.children)==null?void 0:i.length,n(r.children))})};return n(e),t}checkValueRenderLimit(e,t){return this.renderedFacetElements.get(e).renderedItemsCount>=t}renderShowHideAllButtons(e,t){const n=this.renderedFacetElements.get(e);if(!(n.renderedItemsCount>=t&&!(n!=null&&n.isShowAll)))return n.isShowAll?l`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!1)}
        >
          Hide all
        </button>`:l`<button
          @click=${()=>this.provideFacetVisibilityChange(e,!0)}
        >
          Show all (${t})
        </button>`}provideFacetVisibilityChange(e,t){this.facetVisibilityChange.next({parameter:e,isShowAll:t})}}k.styles=[V,I];export{k as SearchFacetNavigationComponent};
