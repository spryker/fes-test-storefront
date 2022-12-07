import{y as t,K as i,J as n,_ as o,v as s,g as e}from"./index-4d2c92b7.js";import{C as a}from"./component.mixin-6d7092a2.js";import{e as r,n as p}from"./ref-25dac95f.js";import{a as u}from"./entry.model-4a8f0f7e.js";import{contentBaseStyles as c}from"./content.styles-85a8cbe7.js";import"./screen-c0aae3c9.js";class d extends a(){constructor(){super(...arguments),this.quantityInputRef=r()}static{this.styles=c}updated(){!this.options?.updating&&!this.options?.confirmationRequired&&this.quantityInputRef.value&&this.quantityInputRef.value?.value!==this.options?.quantity&&(this.quantityInputRef.value.value=this.options?.quantity)}getDecreaseIcon(){return this.options?.removeByQuantity===u.ShowBin&&this.options?.quantity===1?"trash":void 0}render(){return t`
      <product-title .options=${{link:!0}}></product-title>

      <product-id></product-id>

      <!-- TODO: adjust seller's section -->
      <div class="seller">
        <span>Sold by</span>
        <span>Spryker</span>
      </div>

      <section>
        <div class="col">
          <!-- TODO: replace by product configuration -->
          <span>Product config section</span>

          <cart-entry-price
            .price="${this.options?.calculations?.unitPrice}"
            ?loading="${this.options?.updating}"
          >
            <!-- TODO: replace by tooltip -->
            <oryx-icon type="inputError"></oryx-icon>
            Price
          </cart-entry-price>
        </div>

        <div class="col">
          ${i(!this.options?.readonly,()=>t`
              <oryx-cart-quantity-input
                ${p(this.quantityInputRef)}
                min=${this.options?.removeByQuantity?0:1}
                max=${this.options?.availability?.quantity??1/0}
                .value=${this.options?.quantity}
                ?disabled=${this.disabled||this.options?.disabled}
                decreaseIcon=${n(this.getDecreaseIcon())}
                submitOnChange
              ></oryx-cart-quantity-input>
            `,()=>t`
              <div class="readonly-quantity">
                <span>Quantity</span>
                <span>${this.options?.quantity}</span>
              </div>
            `)}

          <cart-entry-price
            .price="${this.options?.calculations?.sumPrice}"
            ?loading="${this.options?.updating}"
          >
            Subtotal
          </cart-entry-price>
        </div>
      </section>
    `}}o([s({type:Boolean}),e("design:type",Boolean)],d.prototype,"disabled",void 0);export{d as CartEntryContentComponent};
