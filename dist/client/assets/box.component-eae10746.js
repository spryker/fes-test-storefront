import{Y as P,Z as b,$ as L,ax as E,at as i,ao as h,r as A,m as p,a4 as T,t as y,a5 as I,n as R,I as w,l as O,j as q,O as V,N as B,A as M,K as f,f as C,_ as d,g as m,v as k,h as F,ay as N,az as j,o as v}from"./index-41c5945f.js";import{C as z}from"./content.controller-bfde8771.js";import{s as D}from"./subscribe.decorator-b8b77f67.js";import{C as _}from"./component.mixin-da8e468a.js";import"./common-0ee98dc0.js";import"./popover.component-c449afef.js";import"./typeahead.component-81369a14.js";import"./typeahead.model-c998e806.js";import"./typeahead.styles-97be0c04.js";import{e as $,n as g}from"./ref-a6112978.js";import{b as U,s as H}from"./oryx.styles-30c39636.js";import{t as x}from"./timer-45863111.js";import"./input.styles-dce2c601.js";import"./screen-c0aae3c9.js";import"./input.component-729fa045.js";import"./query.util-87342f84.js";import"./getControl-bdad11f5.js";import"./searchbox.controller-5f002bd8.js";import"./searchbox.styles-7e993ee0.js";import"./popover.model-91d12e3a.js";import"./popover.controller-82a090e4.js";function S(a){return P(function(t,e){var o=!1,s=null,r=null,c=function(){if(r==null||r.unsubscribe(),r=null,o){o=!1;var u=s;s=null,e.next(u)}};t.subscribe(b(e,function(u){r==null||r.unsubscribe(),o=!0,s=u,r=b(e,c,L),E(a(u)).subscribe(r)},function(){c(),e.complete()},void 0,function(){s=r=null}))})}class K{dispatchEvent(t,e){var o;(o=t.target)==null||o.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}muteMousedown(t){t.stopPropagation(),t.preventDefault()}renderControls(t){return i`
      <oryx-button slot="suffix" type="text">
        <button
          @click=${e=>this.dispatchEvent(e,"oryx.clear")}
          @mousedown=${this.muteMousedown}
        >
          ${t.clearButtonTitle||"Clear"}
        </button>
      </oryx-button>

      <oryx-icon-button slot="suffix" size="small">
        <button
          aria-label=${t.closeButtonArialLabel||"Close results"}
          @click=${e=>this.dispatchEvent(e,"oryx.close")}
          @mousedown=${this.muteMousedown}
        >
          <oryx-icon type="close"></oryx-icon>
        </button>
      </oryx-icon-button>
    `}}class Q{processCompletions(t){return t.map(e=>({name:e,params:{q:e}}))}renderLink({title:t,options:e,type:o}){return e.length?i`
      <h5>${t}</h5>
      <ul>
        ${e.map(({name:s,url:r,params:c})=>i`
            <li>
              <content-link
                .options="${{type:o,id:r??"",params:c??null,text:s}}"
                close-popover
              ></content-link>
            </li>
          `)}
      </ul>
    `:i``}renderNothingFound({nothingFoundText:t}){return i`
      <div slot="empty">
        <oryx-icon type="search"></oryx-icon>
        <span>${t||"Nothing found…"}</span>
      </div>
    `}renderLinksSection(t,e){const o=[{title:e.completionTitle||"Search suggestions",options:this.processCompletions(t.completion),type:h.ProductList},{title:e.categoriesTitle||"In categories",options:t.categories.map(({name:s,url:r})=>({name:s,url:r==null?void 0:r.substring(r.lastIndexOf("/")+1),params:{q:r==null?void 0:r.substring(r.lastIndexOf("/")+1)}})),type:h.Category},{title:e.cmsTitle||"In CMS pages",options:t.cmsPages,type:h.Page}];return i` <section>${o.map(s=>this.renderLink(s))}</section> `}renderProduct(t){return i`
      <content-link
        class="product"
        .options="${{type:h.Product,id:t.sku,label:t.name}}"
        close-popover
      >
        <product-media
          .product=${t}
          .options=${{container:"thumbnail"}}
        ></product-media>
        <product-title .product=${t}></product-title>
        <product-price .product=${t}></product-price>
      </content-link>
    `}renderProductsSection(t,e){return i`
      <section>
        <h5>${e.productsTitle||"Products"}</h5>
        ${t.products.map(this.renderProduct)}
        <!-- TODO link to PLP -->
        <oryx-button outline>
          <a href="#"
            >${e.viewAllProductsButtonTitle||"View all products"}</a
          >
        </oryx-button>
      </section>
    `}}class Y{constructor(t){this.host=t,this.host.addController(this)}setScrollAttributes(t){if(!t){this.host.removeAttribute("scrollable-top"),this.host.removeAttribute("scrollable-bottom");return}const{height:e}=t.getBoundingClientRect();this.host.toggleAttribute("scrollable-top",!!Math.ceil(t.scrollTop)),this.host.toggleAttribute("scrollable-bottom",t.scrollHeight>Math.ceil(e+t.scrollTop))}}var l;let n=(l=class extends _(){constructor(){super(),this.defaultOptions={minChars:2,completionsCount:5,productsCount:5,categoriesCount:5,cmsCount:0},this.contentController=new z(this),this.suggestionService=A(N),this.options$=this.contentController.getOptions().pipe(p(t=>({...this.defaultOptions,...t})),T({refCount:!0,bufferSize:1}),y(t=>this.applyInputTexts(t))),this.scrollingAreaController=new Y(this),this.queryControlsController=new K,this.renderSuggestionController=new Q,this.triggerInputValue$=new I,this.suggestion$=this.triggerInputValue$.pipe(S(()=>x(300)),p(t=>t.trim()),R(),w(this.options$),O(([t,e])=>t&&(!e.minChars||t.length>=e.minChars)?this.suggestionService.get({query:t}).pipe(p(o=>{var r;return{suggestion:o&&{completion:o.completion.slice(0,e.completionsCount),products:((r=o.products)==null?void 0:r.slice(0,e.productsCount))??[],categories:o.categories.slice(0,e.categoriesCount),cmsPages:o.cmsPages.slice(0,e.cmsCount)},options:e}})):v({suggestion:null,options:e})),y(({suggestion:t})=>{this.stretched=this.hasCompleteData(t)})),this.controlButtons$=q([this.options$,this.triggerInputValue$]).pipe(p(([t,e])=>({options:t,showButtons:!!e}))),this.scrollEvent=V(()=>j(this,"containerScroll")).pipe(B(()=>v(null)),M(t=>t!==null),S(()=>x(20)),y(()=>{this.scrollingAreaController.setScrollAttributes(this.scrollContainerRef.value)})),this.query="",this.stretched=!1,this.inputRef=$(),this.scrollContainerRef=$(),this.clear=this.clear.bind(this),this.close=this.close.bind(this),this.dispatchContainerScroll=this.dispatchContainerScroll.bind(this)}firstUpdated(){this.query&&(this.inputRef.value.value=this.query,this.triggerInputValue$.next(this.query))}connectedCallback(){super.connectedCallback(),this.addEventListener("oryx.clear",this.clear),this.addEventListener("oryx.close",this.close)}disconnectedCallback(){this.removeEventListener("oryx.clear",this.clear),this.removeEventListener("oryx.close",this.close),super.disconnectedCallback()}clear(t){t.stopPropagation();const e=this.inputRef.value;e.value="",this.query="",this.triggerInputValue$.next("")}close(){var t;(t=this.renderRoot.querySelector("oryx-typeahead"))==null||t.removeAttribute("open")}onTypeahead(){this.query=this.inputRef.value.value,this.triggerInputValue$.next(this.query)}dispatchContainerScroll(t){var e;(e=t.target)==null||e.dispatchEvent(new CustomEvent("containerScroll",{bubbles:!0,composed:!0}))}applyInputTexts(t){var o,s;const{placeholder:e}=t;e&&((s=(o=this.inputRef)==null?void 0:o.value)==null||s.setAttribute("placeholder",e))}hasLinks(t){return!!((t==null?void 0:t.completion.length)||(t==null?void 0:t.cmsPages.length)||(t==null?void 0:t.categories.length))}hasProducts(t){var e;return!!((e=t==null?void 0:t.products)!=null&&e.length)}isNothingFound(t){return!this.hasLinks(t)&&!this.hasProducts(t)}hasCompleteData(t){return this.hasLinks(t)&&this.hasProducts(t)}renderSuggestion(t,e){return t?this.isNothingFound(t)?this.renderSuggestionController.renderNothingFound(e):i`
      <div slot="option">
        <div
          @scroll=${this.dispatchContainerScroll}
          ${g(this.scrollContainerRef)}
        >
          ${f(this.hasLinks(t),()=>this.renderSuggestionController.renderLinksSection(t,e))}
          ${f(this.hasProducts(t),()=>this.renderSuggestionController.renderProductsSection(t,e))}
        </div>
      </div>
    `:i``}render(){return i`
      <oryx-typeahead @oryx.typeahead=${this.onTypeahead}>
        <oryx-icon slot="prefix" type="search" size="medium"></oryx-icon>
        <input ${g(this.inputRef)} placeholder="Search" />
        ${C(this.suggestion$,({suggestion:t,options:e})=>i`${this.renderSuggestion(t,e)}`)}
        ${C(this.controlButtons$,({options:t,showButtons:e})=>e?this.queryControlsController.renderControls(t):i``)}
      </oryx-typeahead>
    `}},(()=>{l.styles=[U,H]})(),l);d([D(),m("design:type",Object)],n.prototype,"scrollEvent",void 0);d([k({type:String}),m("design:type",Object)],n.prototype,"query",void 0);d([k({type:Boolean,reflect:!0}),m("design:type",Object)],n.prototype,"stretched",void 0);n=d([F(),m("design:paramtypes",[])],n);export{n as SearchBoxComponent};
