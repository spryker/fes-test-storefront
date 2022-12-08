import{a0 as k,a1 as y,a2 as P,aB as L,ax as i,as as h,r as E,m as u,a7 as T,t as m,a8 as A,n as R,M as w,l as I,j as O,T as q,Q as B,G as V,O as b,f as C,_ as p,g as d,v as S,h as M,aC as F,aD as j,o as f}from"./index.65290630.js";import{C as D}from"./content.controller.53d4125f.js";import{s as N}from"./subscribe.decorator.8b58ec29.js";import{C as _}from"./component.mixin.d9d48422.js";import"./common.49548711.js";import"./popover.component.ceac2744.js";import"./typeahead.component.b53b0b18.js";import"./typeahead.model.166b6c30.js";import"./typeahead.styles.ff43b24e.js";import{e as v,n as $}from"./ref.34276d00.js";import{b as z,s as Q}from"./oryx.styles.3ab95286.js";import{t as g}from"./timer.1a38a7fe.js";import"./input.styles.99c4a18e.js";import"./input.component.c24771d8.js";import"./query.util.f444d9cc.js";import"./getControl.74b403d8.js";import"./searchbox.controller.351d1723.js";import"./searchbox.styles.2d4277f9.js";import"./popover.model.e1bbffca.js";import"./popover.controller.1bcbe9af.js";function x(a){return k(function(t,e){var r=!1,s=null,o=null,n=function(){if(o==null||o.unsubscribe(),o=null,r){r=!1;var c=s;s=null,e.next(c)}};t.subscribe(y(e,function(c){o==null||o.unsubscribe(),r=!0,s=c,o=y(e,n,P),L(a(c)).subscribe(o)},function(){n(),e.complete()},void 0,function(){s=o=null}))})}class U{dispatchEvent(t,e){var r;(r=t.target)==null||r.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}muteMousedown(t){t.stopPropagation(),t.preventDefault()}renderControls(t){return i`
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
    `}}class G{processCompletions(t){return t.map(e=>({name:e,params:{q:e}}))}renderLink({title:t,options:e,type:r}){return e.length?i`
      <h5>${t}</h5>
      <ul>
        ${e.map(({name:s,url:o,params:n})=>i`
            <li>
              <content-link
                .options="${{type:r,id:o!=null?o:"",params:n!=null?n:null,text:s}}"
                close-popover
              ></content-link>
            </li>
          `)}
      </ul>
    `:i``}renderNothingFound({nothingFoundText:t}){return i`
      <div slot="empty">
        <oryx-icon type="search"></oryx-icon>
        <span>${t||"Nothing found\u2026"}</span>
      </div>
    `}renderLinksSection(t,e){const r=[{title:e.completionTitle||"Search suggestions",options:this.processCompletions(t.completion),type:h.ProductList},{title:e.categoriesTitle||"In categories",options:t.categories.map(({name:s,url:o})=>({name:s,url:o==null?void 0:o.substring(o.lastIndexOf("/")+1),params:{q:o==null?void 0:o.substring(o.lastIndexOf("/")+1)}})),type:h.Category},{title:e.cmsTitle||"In CMS pages",options:t.cmsPages,type:h.Page}];return i` <section>${r.map(s=>this.renderLink(s))}</section> `}renderProduct(t){return i`
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
    `}}class H{constructor(t){this.host=t,this.host.addController(this)}setScrollAttributes(t){if(!t){this.host.removeAttribute("scrollable-top"),this.host.removeAttribute("scrollable-bottom");return}const{height:e}=t.getBoundingClientRect();this.host.toggleAttribute("scrollable-top",!!Math.ceil(t.scrollTop)),this.host.toggleAttribute("scrollable-bottom",t.scrollHeight>Math.ceil(e+t.scrollTop))}}let l=class extends _(){constructor(){super(),this.defaultOptions={minChars:2,completionsCount:5,productsCount:5,categoriesCount:5,cmsCount:0},this.contentController=new D(this),this.suggestionService=E(F),this.options$=this.contentController.getOptions().pipe(u(t=>({...this.defaultOptions,...t})),T({refCount:!0,bufferSize:1}),m(t=>this.applyInputTexts(t))),this.scrollingAreaController=new H(this),this.queryControlsController=new U,this.renderSuggestionController=new G,this.triggerInputValue$=new A,this.suggestion$=this.triggerInputValue$.pipe(x(()=>g(300)),u(t=>t.trim()),R(),w(this.options$),I(([t,e])=>t&&(!e.minChars||t.length>=e.minChars)?this.suggestionService.get({query:t}).pipe(u(r=>{var o,n;return{suggestion:r&&{completion:r.completion.slice(0,e.completionsCount),products:(n=(o=r.products)==null?void 0:o.slice(0,e.productsCount))!=null?n:[],categories:r.categories.slice(0,e.categoriesCount),cmsPages:r.cmsPages.slice(0,e.cmsCount)},options:e}})):f({suggestion:null,options:e})),m(({suggestion:t})=>{this.stretched=this.hasCompleteData(t)})),this.controlButtons$=O([this.options$,this.triggerInputValue$]).pipe(u(([t,e])=>({options:t,showButtons:!!e}))),this.scrollEvent=q(()=>j(this,"containerScroll")).pipe(B(()=>f(null)),V(t=>t!==null),x(()=>g(20)),m(()=>{this.scrollingAreaController.setScrollAttributes(this.scrollContainerRef.value)})),this.query="",this.stretched=!1,this.inputRef=v(),this.scrollContainerRef=v(),this.clear=this.clear.bind(this),this.close=this.close.bind(this),this.dispatchContainerScroll=this.dispatchContainerScroll.bind(this)}firstUpdated(){this.query&&(this.inputRef.value.value=this.query,this.triggerInputValue$.next(this.query))}connectedCallback(){super.connectedCallback(),this.addEventListener("oryx.clear",this.clear),this.addEventListener("oryx.close",this.close)}disconnectedCallback(){this.removeEventListener("oryx.clear",this.clear),this.removeEventListener("oryx.close",this.close),super.disconnectedCallback()}clear(t){t.stopPropagation();const e=this.inputRef.value;e.value="",this.query="",this.triggerInputValue$.next("")}close(){var t;(t=this.renderRoot.querySelector("oryx-typeahead"))==null||t.removeAttribute("open")}onTypeahead(){this.query=this.inputRef.value.value,this.triggerInputValue$.next(this.query)}dispatchContainerScroll(t){var e;(e=t.target)==null||e.dispatchEvent(new CustomEvent("containerScroll",{bubbles:!0,composed:!0}))}applyInputTexts(t){var r,s;const{placeholder:e}=t;e&&((s=(r=this.inputRef)==null?void 0:r.value)==null||s.setAttribute("placeholder",e))}hasLinks(t){return!!((t==null?void 0:t.completion.length)||(t==null?void 0:t.cmsPages.length)||(t==null?void 0:t.categories.length))}hasProducts(t){var e;return!!((e=t==null?void 0:t.products)!=null&&e.length)}isNothingFound(t){return!this.hasLinks(t)&&!this.hasProducts(t)}hasCompleteData(t){return this.hasLinks(t)&&this.hasProducts(t)}renderSuggestion(t,e){return t?this.isNothingFound(t)?this.renderSuggestionController.renderNothingFound(e):i`
      <div slot="option">
        <div
          @scroll=${this.dispatchContainerScroll}
          ${$(this.scrollContainerRef)}
        >
          ${b(this.hasLinks(t),()=>this.renderSuggestionController.renderLinksSection(t,e))}
          ${b(this.hasProducts(t),()=>this.renderSuggestionController.renderProductsSection(t,e))}
        </div>
      </div>
    `:i``}render(){return i`
      <oryx-typeahead @oryx.typeahead=${this.onTypeahead}>
        <oryx-icon slot="prefix" type="search" size="medium"></oryx-icon>
        <input ${$(this.inputRef)} placeholder="Search" />
        ${C(this.suggestion$,({suggestion:t,options:e})=>i`${this.renderSuggestion(t,e)}`)}
        ${C(this.controlButtons$,({options:t,showButtons:e})=>e?this.queryControlsController.renderControls(t):i``)}
      </oryx-typeahead>
    `}};l.styles=[z,Q];p([N(),d("design:type",Object)],l.prototype,"scrollEvent",void 0);p([S({type:String}),d("design:type",Object)],l.prototype,"query",void 0);p([S({type:Boolean,reflect:!0}),d("design:type",Object)],l.prototype,"stretched",void 0);l=p([M(),d("design:paramtypes",[])],l);export{l as SearchBoxComponent};
