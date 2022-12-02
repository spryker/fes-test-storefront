import{Y as k,Z as y,$ as P,ay as L,au as i,ap as h,r as A,m as u,a4 as E,t as m,a5 as T,n as I,I as R,l as w,j as O,O as q,N as B,A as V,K as b,f as C,_ as p,g as d,v as S,h as M,az as F,aA as N,o as f}from"./index.e698feb0.js";import{C as j}from"./content.controller.13788f6c.js";import{s as _}from"./subscribe.decorator.adca8f3e.js";import{C as z}from"./component.mixin.cf8fd244.js";import"./common.49548711.js";import"./popover.component.3680107c.js";import"./typeahead.component.64cf10e2.js";import"./typeahead.model.166b6c30.js";import"./typeahead.styles.027377a5.js";import{e as v,n as $}from"./ref.3e1f0433.js";import{b as D,s as U}from"./oryx.styles.a3678b90.js";import{t as g}from"./timer.8a2779a8.js";import"./input.styles.5b91542a.js";import"./screen.63347f27.js";import"./input.component.194faeb6.js";import"./query.util.676a5241.js";import"./getControl.3e3c444e.js";import"./searchbox.controller.f2a8c90a.js";import"./searchbox.styles.317d3e09.js";import"./popover.model.e1bbffca.js";import"./popover.controller.e6fd9ac4.js";function x(a){return k(function(t,e){var r=!1,s=null,o=null,n=function(){if(o==null||o.unsubscribe(),o=null,r){r=!1;var c=s;s=null,e.next(c)}};t.subscribe(y(e,function(c){o==null||o.unsubscribe(),r=!0,s=c,o=y(e,n,P),L(a(c)).subscribe(o)},function(){n(),e.complete()},void 0,function(){s=o=null}))})}class H{dispatchEvent(t,e){var r;(r=t.target)==null||r.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}muteMousedown(t){t.stopPropagation(),t.preventDefault()}renderControls(t){return i`
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
    `}}class K{processCompletions(t){return t.map(e=>({name:e,params:{q:e}}))}renderLink({title:t,options:e,type:r}){return e.length?i`
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
    `}}class Q{constructor(t){this.host=t,this.host.addController(this)}setScrollAttributes(t){if(!t){this.host.removeAttribute("scrollable-top"),this.host.removeAttribute("scrollable-bottom");return}const{height:e}=t.getBoundingClientRect();this.host.toggleAttribute("scrollable-top",!!Math.ceil(t.scrollTop)),this.host.toggleAttribute("scrollable-bottom",t.scrollHeight>Math.ceil(e+t.scrollTop))}}let l=class extends z(){constructor(){super(),this.defaultOptions={minChars:2,completionsCount:5,productsCount:5,categoriesCount:5,cmsCount:0},this.contentController=new j(this),this.suggestionService=A(F),this.options$=this.contentController.getOptions().pipe(u(t=>({...this.defaultOptions,...t})),E({refCount:!0,bufferSize:1}),m(t=>this.applyInputTexts(t))),this.scrollingAreaController=new Q(this),this.queryControlsController=new H,this.renderSuggestionController=new K,this.triggerInputValue$=new T,this.suggestion$=this.triggerInputValue$.pipe(x(()=>g(300)),u(t=>t.trim()),I(),R(this.options$),w(([t,e])=>t&&(!e.minChars||t.length>=e.minChars)?this.suggestionService.get({query:t}).pipe(u(r=>{var o,n;return{suggestion:r&&{completion:r.completion.slice(0,e.completionsCount),products:(n=(o=r.products)==null?void 0:o.slice(0,e.productsCount))!=null?n:[],categories:r.categories.slice(0,e.categoriesCount),cmsPages:r.cmsPages.slice(0,e.cmsCount)},options:e}})):f({suggestion:null,options:e})),m(({suggestion:t})=>{this.stretched=this.hasCompleteData(t)})),this.controlButtons$=O([this.options$,this.triggerInputValue$]).pipe(u(([t,e])=>({options:t,showButtons:!!e}))),this.scrollEvent=q(()=>N(this,"containerScroll")).pipe(B(()=>f(null)),V(t=>t!==null),x(()=>g(20)),m(()=>{this.scrollingAreaController.setScrollAttributes(this.scrollContainerRef.value)})),this.query="",this.stretched=!1,this.inputRef=v(),this.scrollContainerRef=v(),this.clear=this.clear.bind(this),this.close=this.close.bind(this),this.dispatchContainerScroll=this.dispatchContainerScroll.bind(this)}firstUpdated(){this.query&&(this.inputRef.value.value=this.query,this.triggerInputValue$.next(this.query))}connectedCallback(){super.connectedCallback(),this.addEventListener("oryx.clear",this.clear),this.addEventListener("oryx.close",this.close)}disconnectedCallback(){this.removeEventListener("oryx.clear",this.clear),this.removeEventListener("oryx.close",this.close),super.disconnectedCallback()}clear(t){t.stopPropagation();const e=this.inputRef.value;e.value="",this.query="",this.triggerInputValue$.next("")}close(){var t;(t=this.renderRoot.querySelector("oryx-typeahead"))==null||t.removeAttribute("open")}onTypeahead(){this.query=this.inputRef.value.value,this.triggerInputValue$.next(this.query)}dispatchContainerScroll(t){var e;(e=t.target)==null||e.dispatchEvent(new CustomEvent("containerScroll",{bubbles:!0,composed:!0}))}applyInputTexts(t){var r,s;const{placeholder:e}=t;e&&((s=(r=this.inputRef)==null?void 0:r.value)==null||s.setAttribute("placeholder",e))}hasLinks(t){return!!((t==null?void 0:t.completion.length)||(t==null?void 0:t.cmsPages.length)||(t==null?void 0:t.categories.length))}hasProducts(t){var e;return!!((e=t==null?void 0:t.products)!=null&&e.length)}isNothingFound(t){return!this.hasLinks(t)&&!this.hasProducts(t)}hasCompleteData(t){return this.hasLinks(t)&&this.hasProducts(t)}renderSuggestion(t,e){return t?this.isNothingFound(t)?this.renderSuggestionController.renderNothingFound(e):i`
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
    `}};l.styles=[D,U];p([_(),d("design:type",Object)],l.prototype,"scrollEvent",void 0);p([S({type:String}),d("design:type",Object)],l.prototype,"query",void 0);p([S({type:Boolean,reflect:!0}),d("design:type",Object)],l.prototype,"stretched",void 0);l=p([M(),d("design:paramtypes",[])],l);export{l as SearchBoxComponent};
