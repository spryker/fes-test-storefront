import{y as o,_ as n,v as i,g as p}from"./index-4d2c92b7.js";import{C as r}from"./component.mixin-6d7092a2.js";import{optionsBaseStyles as a}from"./options.styles-1b22f595.js";import"./screen-c0aae3c9.js";class c extends r(){static{this.styles=a}onToggle(t){this.dispatchEvent(new CustomEvent("toggle",{detail:{state:t}}))}render(){const t=this.options?.selectedProductOptions;return o`
      <span>
        Product options (${t?.length}):
        <oryx-button type="text">
          <button @click=${()=>this.onToggle(!this.showOptions)}>
            ${this.showOptions?"Hide":"Show"}
          </button>
        </oryx-button>
      </span>

      <!-- TODO: Replace by product-options -->
      <ul>
        ${t?.map(({optionName:e,price:s})=>o`<li>
            <span>${e}</span>
            <cart-entry-price
              .price="${s}"
              ?loading="${this.options?.updating}"
            ></cart-entry-price>
          </li>`)}
      </ul>
    `}}n([i({type:Boolean,attribute:"show-options"}),p("design:type",Boolean)],c.prototype,"showOptions",void 0);export{c as CartEntryOptionsComponent};
