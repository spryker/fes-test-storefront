import{y as e,K as m,J as v,_ as f,v as q,g as $}from"./index-74abacf3.js";import{C as g}from"./component.mixin-ae2cf780.js";import{e as b,n as I}from"./ref-ede9cacd.js";import{a as x}from"./entry.model-4a8f0f7e.js";import{contentBaseStyles as B}from"./content.styles-d0c896be.js";import"./screen-c0aae3c9.js";const p=class extends g(){constructor(){super(...arguments),this.quantityInputRef=b()}updated(){var t,i,s,n,o;!((t=this.options)!=null&&t.updating)&&!((i=this.options)!=null&&i.confirmationRequired)&&this.quantityInputRef.value&&((s=this.quantityInputRef.value)==null?void 0:s.value)!==((n=this.options)==null?void 0:n.quantity)&&(this.quantityInputRef.value.value=(o=this.options)==null?void 0:o.quantity)}getDecreaseIcon(){var t,i;return((t=this.options)==null?void 0:t.removeByQuantity)===x.ShowBin&&((i=this.options)==null?void 0:i.quantity)===1?"trash":void 0}render(){var t,i,s,n,o,u,c;return e`
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
            .price="${(i=(t=this.options)==null?void 0:t.calculations)==null?void 0:i.unitPrice}"
            ?loading="${(s=this.options)==null?void 0:s.updating}"
          >
            <!-- TODO: replace by tooltip -->
            <oryx-icon type="inputError"></oryx-icon>
            Price
          </cart-entry-price>
        </div>

        <div class="col">
          ${m(!((n=this.options)!=null&&n.readonly),()=>{var a,d,l,y,h;return e`
              <oryx-cart-quantity-input
                ${I(this.quantityInputRef)}
                min=${(a=this.options)!=null&&a.removeByQuantity?0:1}
                max=${((l=(d=this.options)==null?void 0:d.availability)==null?void 0:l.quantity)??1/0}
                .value=${(y=this.options)==null?void 0:y.quantity}
                ?disabled=${this.disabled||((h=this.options)==null?void 0:h.disabled)}
                decreaseIcon=${v(this.getDecreaseIcon())}
                submitOnChange
              ></oryx-cart-quantity-input>
            `},()=>{var a;return e`
              <div class="readonly-quantity">
                <span>Quantity</span>
                <span>${(a=this.options)==null?void 0:a.quantity}</span>
              </div>
            `})}

          <cart-entry-price
            .price="${(u=(o=this.options)==null?void 0:o.calculations)==null?void 0:u.sumPrice}"
            ?loading="${(c=this.options)==null?void 0:c.updating}"
          >
            Subtotal
          </cart-entry-price>
        </div>
      </section>
    `}};let r=p;(()=>{p.styles=B})();f([q({type:Boolean}),$("design:type",Boolean)],r.prototype,"disabled",void 0);export{r as CartEntryContentComponent};
