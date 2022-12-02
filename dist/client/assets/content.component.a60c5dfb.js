import{y as a,K as m,J as v,_ as f,v as q,g as $}from"./index.e698feb0.js";import{C as g}from"./component.mixin.cf8fd244.js";import{e as b,n as x}from"./ref.3e1f0433.js";import{a as I}from"./entry.model.f038ce94.js";import{contentBaseStyles as B}from"./content.styles.d5ac4937.js";import"./screen.63347f27.js";class h extends g(){constructor(){super(...arguments),this.quantityInputRef=b()}updated(){var t,i,n,o,e;!((t=this.options)!=null&&t.updating)&&!((i=this.options)!=null&&i.confirmationRequired)&&this.quantityInputRef.value&&((n=this.quantityInputRef.value)==null?void 0:n.value)!==((o=this.options)==null?void 0:o.quantity)&&(this.quantityInputRef.value.value=(e=this.options)==null?void 0:e.quantity)}getDecreaseIcon(){var t,i;return((t=this.options)==null?void 0:t.removeByQuantity)===I.ShowBin&&((i=this.options)==null?void 0:i.quantity)===1?"trash":void 0}render(){var t,i,n,o,e,r,p;return a`
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
            ?loading="${(n=this.options)==null?void 0:n.updating}"
          >
            <!-- TODO: replace by tooltip -->
            <oryx-icon type="inputError"></oryx-icon>
            Price
          </cart-entry-price>
        </div>

        <div class="col">
          ${m(!((o=this.options)!=null&&o.readonly),()=>{var s,u,c,d,y,l;return a`
              <oryx-cart-quantity-input
                ${x(this.quantityInputRef)}
                min=${(s=this.options)!=null&&s.removeByQuantity?0:1}
                max=${(d=(c=(u=this.options)==null?void 0:u.availability)==null?void 0:c.quantity)!=null?d:1/0}
                .value=${(y=this.options)==null?void 0:y.quantity}
                ?disabled=${this.disabled||((l=this.options)==null?void 0:l.disabled)}
                decrease-icon=${v(this.getDecreaseIcon())}
                submitOnChange
              ></oryx-cart-quantity-input>
            `},()=>{var s;return a`
              <div class="readonly-quantity">
                <span>Quantity</span>
                <span>${(s=this.options)==null?void 0:s.quantity}</span>
              </div>
            `})}

          <cart-entry-price
            .price="${(r=(e=this.options)==null?void 0:e.calculations)==null?void 0:r.sumPrice}"
            ?loading="${(p=this.options)==null?void 0:p.updating}"
          >
            Subtotal
          </cart-entry-price>
        </div>
      </section>
    `}}h.styles=B;f([q({type:Boolean}),$("design:type",Boolean)],h.prototype,"disabled",void 0);export{h as CartEntryContentComponent};
