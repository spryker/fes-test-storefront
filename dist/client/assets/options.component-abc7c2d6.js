import{y as n,_ as r,v as l,g as h}from"./index-41c5945f.js";import{C as c}from"./component.mixin-da8e468a.js";import{optionsBaseStyles as g}from"./options.styles-78fa3679.js";import"./screen-c0aae3c9.js";const s=class extends c(){onToggle(t){this.dispatchEvent(new CustomEvent("toggle",{detail:{state:t}}))}render(){var i;const t=(i=this.options)==null?void 0:i.selectedProductOptions;return n`
      <span>
        Product options (${t==null?void 0:t.length}):
        <oryx-button type="text">
          <button @click=${()=>this.onToggle(!this.showOptions)}>
            ${this.showOptions?"Hide":"Show"}
          </button>
        </oryx-button>
      </span>

      <!-- TODO: Replace by product-options -->
      <ul>
        ${t==null?void 0:t.map(({optionName:p,price:a})=>{var e;return n`<li>
            <span>${p}</span>
            <cart-entry-price
              .price="${a}"
              ?loading="${(e=this.options)==null?void 0:e.updating}"
            ></cart-entry-price>
          </li>`})}
      </ul>
    `}};let o=s;(()=>{s.styles=g})();r([l({type:Boolean,attribute:"show-options"}),h("design:type",Boolean)],o.prototype,"showOptions",void 0);export{o as CartEntryOptionsComponent};
