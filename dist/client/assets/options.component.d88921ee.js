import{y as s,_ as a,v as r,g as l}from"./index.175fafb9.js";import{C as h}from"./component.mixin.527a540b.js";import{optionsBaseStyles as y}from"./options.styles.ddc22482.js";import"./screen.63347f27.js";class e extends h(){onToggle(t){this.dispatchEvent(new CustomEvent("toggle",{detail:{state:t}}))}render(){var o;const t=(o=this.options)==null?void 0:o.selectedProductOptions;return s`
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
        ${t==null?void 0:t.map(({optionName:i,price:p})=>{var n;return s`<li>
            <span>${i}</span>
            <cart-entry-price
              .price="${p}"
              ?loading="${(n=this.options)==null?void 0:n.updating}"
            ></cart-entry-price>
          </li>`})}
      </ul>
    `}}e.styles=y;a([r({type:Boolean,attribute:"show-options"}),l("design:type",Boolean)],e.prototype,"showOptions",void 0);export{e as CartEntryOptionsComponent};
