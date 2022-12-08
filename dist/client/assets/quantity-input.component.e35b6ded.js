import{d as l,y,a9 as p,N as h,_ as i,v as s,g as a,h as b}from"./index.65290630.js";import{i as r}from"./i18n.directive.8a4e8c6b.js";import{e as m,n as g}from"./ref.34276d00.js";import{styles as v}from"./quantity-input.styles.f54d9a77.js";const u="update",c="submit";let e=class extends l{constructor(){super(...arguments),this.min=1,this.step=1,this.submitOnChange=!1,this.disabled=!1,this.hasError=!1,this.inputRef=m()}render(){var t,n;return y`
      <button
        @click=${this.decrease}
        aria-label=${r("cart.quantity.decrease")}
        tabindex="-1"
        ?disabled=${this.isMinDisabled()}
        part="decrease"
      >
        <oryx-icon .type=${(t=this.decreaseIcon)!=null?t:p.Decrease}></oryx-icon>
      </button>
      <oryx-input ?hasError=${this.hasError}>
        <input
          ${g(this.inputRef)}
          aria-label=${r("cart.quantity")}
          type="number"
          value=${this.getValue()}
          min=${h(this.min)}
          max=${h(this.max)}
          step=${this.step}
          required
          ?disabled=${this.disabled||this.max!==void 0&&this.max===0}
          @input=${this.onInput}
          @change=${this.onChange}
          @keydown=${this.onKeydown}
          @focus=${this.onFocus}
        />
      </oryx-input>
      <button
        @click=${this.increase}
        aria-label=${r("cart.quantity.increase")}
        tabindex="-1"
        ?disabled=${this.isMaxDisabled()}
        part="increase"
      >
        <oryx-icon .type=${(n=this.increaseIcon)!=null?n:p.Increase}></oryx-icon>
      </button>
    `}focus(){var t;(t=this.input)==null||t.focus()}firstUpdated(){this.checkValidity()}getValue(){var t,n,o,d;return(d=(o=(t=this.value)==null?void 0:t.toString())!=null?o:(n=this.min)==null?void 0:n.toString())!=null?d:"1"}onFocus(){this.checkValidity()}isMinDisabled(){return this.disabled||this.value!==void 0&&this.value<=this.min}isMaxDisabled(){return this.disabled||this.value!==void 0&&this.max!==void 0&&this.value>=this.max}increase(){this.input.stepUp(),this.onChange()}decrease(){this.input.stepDown(),this.onChange()}onInput(t){this.updateValue(t.target.value),this.dispatch(u)}onChange(){this.updateValue(),this.submitOnChange&&this.input.validity.valid?this.dispatch(c):this.dispatch(u)}updateValue(t){this.value=Number(t!=null?t:this.input.value),this.checkValidity()}checkValidity(){this.hasError=!this.input.reportValidity()}onKeydown(t){t.key==="Enter"&&(this.input.validity.valid?this.dispatch(c):this.checkValidity())}dispatch(t){const n={quantity:Number(this.input.value)};this.input.validity.valid||(n.isInvalid=!0),this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}get input(){return this.inputRef.value}};e.styles=v;i([s({type:Number}),a("design:type",Object)],e.prototype,"min",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"value",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"max",void 0);i([s({type:Number}),a("design:type",Object)],e.prototype,"step",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"submitOnChange",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"disabled",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"hasError",void 0);i([s(),a("design:type",String)],e.prototype,"decreaseIcon",void 0);i([s(),a("design:type",String)],e.prototype,"increaseIcon",void 0);e=i([b()],e);export{e as QuantityInputComponent};
