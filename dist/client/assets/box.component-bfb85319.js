import{Y as k,Z as g,$ as P,ax as L,at as s,ao as u,r as E,m as h,a4 as A,t as m,a5 as T,n as I,I as R,l as w,j as O,O as q,N as B,A as V,K as y,f as b,_ as p,g as d,v as S,h as M,ay as F,az as N,o as C}from"./index-4d2c92b7.js";import{C as j}from"./content.controller-33ee67c3.js";import{s as _}from"./subscribe.decorator-50a973f5.js";import{C as z}from"./component.mixin-6d7092a2.js";import"./common-0ee98dc0.js";import"./popover.component-907eb365.js";import"./typeahead.component-38617a9f.js";import"./typeahead.model-c998e806.js";import"./typeahead.styles-f3f9a55e.js";import{e as f,n as v}from"./ref-25dac95f.js";import{b as D,s as U}from"./oryx.styles-1ddd0ad7.js";import{t as $}from"./timer-4623882a.js";import"./input.styles-6d634215.js";import"./screen-c0aae3c9.js";import"./input.component-77513b1c.js";import"./query.util-00243645.js";import"./getControl-ea6b3b29.js";import"./searchbox.controller-e0fbc498.js";import"./searchbox.styles-887a8527.js";import"./popover.model-91d12e3a.js";import"./popover.controller-b201d380.js";function x(n){return k(function(t,e){var r=!1,i=null,o=null,a=function(){if(o?.unsubscribe(),o=null,r){r=!1;var c=i;i=null,e.next(c)}};t.subscribe(g(e,function(c){o?.unsubscribe(),r=!0,i=c,o=g(e,a,P),L(n(c)).subscribe(o)},function(){a(),e.complete()},void 0,function(){i=o=null}))})}class H{dispatchEvent(t,e){t.target?.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}muteMousedown(t){t.stopPropagation(),t.preventDefault()}renderControls(t){return s`
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
    `}}class K{processCompletions(t){return t.map(e=>({name:e,params:{q:e}}))}renderLink({title:t,options:e,type:r}){return e.length?s`
      <h5>${t}</h5>
      <ul>
        ${e.map(({name:i,url:o,params:a})=>s`
            <li>
              <content-link
                .options="${{type:r,id:o??"",params:a??null,text:i}}"
                close-popover
              ></content-link>
            </li>
          `)}
      </ul>
    `:s``}renderNothingFound({nothingFoundText:t}){return s`
      <div slot="empty">
        <oryx-icon type="search"></oryx-icon>
        <span>${t||"Nothing found…"}</span>
      </div>
    `}renderLinksSection(t,e){const r=[{title:e.completionTitle||"Search suggestions",options:this.processCompletions(t.completion),type:u.ProductList},{title:e.categoriesTitle||"In categories",options:t.categories.map(({name:i,url:o})=>({name:i,url:o?.substring(o.lastIndexOf("/")+1),params:{q:o?.substring(o.lastIndexOf("/")+1)}})),type:u.Category},{title:e.cmsTitle||"In CMS pages",options:t.cmsPages,type:u.Page}];return s` <section>${r.map(i=>this.renderLink(i))}</section> `}renderProduct(t){return s`
      <content-link
        class="product"
        .options="${{type:u.Product,id:t.sku,label:t.name}}"
        close-popover
      >
        <product-media
          .product=${t}
          .options=${{container:"thumbnail"}}
        ></product-media>
        <product-title .product=${t}></product-title>
        <product-price .product=${t}></product-price>
      </content-link>
    `}renderProductsSection(t,e){return s`
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
    `}}class Q{constructor(t){this.host=t,this.host.addController(this)}setScrollAttributes(t){if(!t){this.host.removeAttribute("scrollable-top"),this.host.removeAttribute("scrollable-bottom");return}const{height:e}=t.getBoundingClientRect();this.host.toggleAttribute("scrollable-top",!!Math.ceil(t.scrollTop)),this.host.toggleAttribute("scrollable-bottom",t.scrollHeight>Math.ceil(e+t.scrollTop))}}let l=class extends z(){constructor(){super(),this.defaultOptions={minChars:2,completionsCount:5,productsCount:5,categoriesCount:5,cmsCount:0},this.contentController=new j(this),this.suggestionService=E(F),this.options$=this.contentController.getOptions().pipe(h(t=>({...this.defaultOptions,...t})),A({refCount:!0,bufferSize:1}),m(t=>this.applyInputTexts(t))),this.scrollingAreaController=new Q(this),this.queryControlsController=new H,this.renderSuggestionController=new K,this.triggerInputValue$=new T,this.suggestion$=this.triggerInputValue$.pipe(x(()=>$(300)),h(t=>t.trim()),I(),R(this.options$),w(([t,e])=>t&&(!e.minChars||t.length>=e.minChars)?this.suggestionService.get({query:t}).pipe(h(r=>({suggestion:r&&{completion:r.completion.slice(0,e.completionsCount),products:r.products?.slice(0,e.productsCount)??[],categories:r.categories.slice(0,e.categoriesCount),cmsPages:r.cmsPages.slice(0,e.cmsCount)},options:e}))):C({suggestion:null,options:e})),m(({suggestion:t})=>{this.stretched=this.hasCompleteData(t)})),this.controlButtons$=O([this.options$,this.triggerInputValue$]).pipe(h(([t,e])=>({options:t,showButtons:!!e}))),this.scrollEvent=q(()=>N(this,"containerScroll")).pipe(B(()=>C(null)),V(t=>t!==null),x(()=>$(20)),m(()=>{this.scrollingAreaController.setScrollAttributes(this.scrollContainerRef.value)})),this.query="",this.stretched=!1,this.inputRef=f(),this.scrollContainerRef=f(),this.clear=this.clear.bind(this),this.close=this.close.bind(this),this.dispatchContainerScroll=this.dispatchContainerScroll.bind(this)}static{this.styles=[D,U]}firstUpdated(){this.query&&(this.inputRef.value.value=this.query,this.triggerInputValue$.next(this.query))}connectedCallback(){super.connectedCallback(),this.addEventListener("oryx.clear",this.clear),this.addEventListener("oryx.close",this.close)}disconnectedCallback(){this.removeEventListener("oryx.clear",this.clear),this.removeEventListener("oryx.close",this.close),super.disconnectedCallback()}clear(t){t.stopPropagation();const e=this.inputRef.value;e.value="",this.query="",this.triggerInputValue$.next("")}close(){this.renderRoot.querySelector("oryx-typeahead")?.removeAttribute("open")}onTypeahead(){this.query=this.inputRef.value.value,this.triggerInputValue$.next(this.query)}dispatchContainerScroll(t){t.target?.dispatchEvent(new CustomEvent("containerScroll",{bubbles:!0,composed:!0}))}applyInputTexts(t){const{placeholder:e}=t;e&&this.inputRef?.value?.setAttribute("placeholder",e)}hasLinks(t){return!!(t?.completion.length||t?.cmsPages.length||t?.categories.length)}hasProducts(t){return!!t?.products?.length}isNothingFound(t){return!this.hasLinks(t)&&!this.hasProducts(t)}hasCompleteData(t){return this.hasLinks(t)&&this.hasProducts(t)}renderSuggestion(t,e){return t?this.isNothingFound(t)?this.renderSuggestionController.renderNothingFound(e):s`
      <div slot="option">
        <div
          @scroll=${this.dispatchContainerScroll}
          ${v(this.scrollContainerRef)}
        >
          ${y(this.hasLinks(t),()=>this.renderSuggestionController.renderLinksSection(t,e))}
          ${y(this.hasProducts(t),()=>this.renderSuggestionController.renderProductsSection(t,e))}
        </div>
      </div>
    `:s``}render(){return s`
      <oryx-typeahead @oryx.typeahead=${this.onTypeahead}>
        <oryx-icon slot="prefix" type="search" size="medium"></oryx-icon>
        <input ${v(this.inputRef)} placeholder="Search" />
        ${b(this.suggestion$,({suggestion:t,options:e})=>s`${this.renderSuggestion(t,e)}`)}
        ${b(this.controlButtons$,({options:t,showButtons:e})=>e?this.queryControlsController.renderControls(t):s``)}
      </oryx-typeahead>
    `}};p([_(),d("design:type",Object)],l.prototype,"scrollEvent",void 0);p([S({type:String}),d("design:type",Object)],l.prototype,"query",void 0);p([S({type:Boolean,reflect:!0}),d("design:type",Object)],l.prototype,"stretched",void 0);l=p([M(),d("design:paramtypes",[])],l);export{l as SearchBoxComponent};
