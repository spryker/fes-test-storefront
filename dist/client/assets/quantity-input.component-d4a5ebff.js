import{d as c,a6 as d,y as l,J as h,_ as i,v as s,g as a,h as y}from"./index-74abacf3.js";import{i as o}from"./i18n.directive-d23a7a29.js";import{e as b,n as m}from"./ref-ede9cacd.js";import{styles as v}from"./quantity-input.styles-4df5cb74.js";import"./screen-c0aae3c9.js";const p="update",u="submit";var r;let e=(r=class extends c{constructor(){super(...arguments),this.min=1,this.step=1,this.submitOnChange=!1,this.disabled=!1,this.hasError=!1,this.decreaseIcon=d.Decrease,this.increaseIcon=d.Increase,this.inputRef=b()}render(){return l`
      <button
        @click=${this.decrease}
        aria-label=${o("cart.quantity.decrease")}
        tabindex="-1"
        ?disabled=${this.isMinDisabled()}
        part="decrease"
      >
        <oryx-icon .type=${this.decreaseIcon}></oryx-icon>
      </button>
      <oryx-input ?hasError=${this.hasError}>
        <input
          ${m(this.inputRef)}
          aria-label=${o("cart.quantity")}
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
        aria-label=${o("cart.quantity.increase")}
        tabindex="-1"
        ?disabled=${this.isMaxDisabled()}
        part="increase"
      >
        <oryx-icon .type=${this.increaseIcon}></oryx-icon>
      </button>
    `}focus(){var t;(t=this.input)==null||t.focus()}firstUpdated(){this.checkValidity()}getValue(){var t,n;return((t=this.value)==null?void 0:t.toString())??((n=this.min)==null?void 0:n.toString())??"1"}onFocus(){this.checkValidity()}isMinDisabled(){return this.disabled||this.value!==void 0&&this.value<=this.min}isMaxDisabled(){return this.disabled||this.value!==void 0&&this.max!==void 0&&this.value>=this.max}increase(){this.input.stepUp(),this.onChange()}decrease(){this.input.stepDown(),this.onChange()}onInput(t){this.updateValue(t.target.value),this.dispatch(p)}onChange(){this.updateValue(),this.submitOnChange&&this.input.validity.valid?this.dispatch(u):this.dispatch(p)}updateValue(t){this.value=Number(t??this.input.value),this.checkValidity()}checkValidity(){this.hasError=!this.input.reportValidity()}onKeydown(t){t.key==="Enter"&&(this.input.validity.valid?this.dispatch(u):this.checkValidity())}dispatch(t){const n={quantity:Number(this.input.value)};this.input.validity.valid||(n.isInvalid=!0),this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}get input(){return this.inputRef.value}},(()=>{r.styles=v})(),r);i([s({type:Number}),a("design:type",Object)],e.prototype,"min",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"value",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"max",void 0);i([s({type:Number}),a("design:type",Object)],e.prototype,"step",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"submitOnChange",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"disabled",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"hasError",void 0);i([s(),a("design:type",Object)],e.prototype,"decreaseIcon",void 0);i([s(),a("design:type",Object)],e.prototype,"increaseIcon",void 0);e=i([y()],e);export{e as QuantityInputComponent};
