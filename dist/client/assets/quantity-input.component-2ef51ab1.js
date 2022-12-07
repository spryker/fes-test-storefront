import{d as u,a6 as o,y as c,J as d,_ as e,v as i,g as s,h as l}from"./index-4d2c92b7.js";import{i as n}from"./i18n.directive-8e3ebbd9.js";import{e as y,n as b}from"./ref-25dac95f.js";import{styles as m}from"./quantity-input.styles-25be7b8a.js";import"./screen-c0aae3c9.js";const h="update",p="submit";let t=class extends u{constructor(){super(...arguments),this.min=1,this.step=1,this.submitOnChange=!1,this.disabled=!1,this.hasError=!1,this.decreaseIcon=o.Decrease,this.increaseIcon=o.Increase,this.inputRef=y()}static{this.styles=m}render(){return c`
      <button
        @click=${this.decrease}
        aria-label=${n("cart.quantity.decrease")}
        tabindex="-1"
        ?disabled=${this.isMinDisabled()}
        part="decrease"
      >
        <oryx-icon .type=${this.decreaseIcon}></oryx-icon>
      </button>
      <oryx-input ?hasError=${this.hasError}>
        <input
          ${b(this.inputRef)}
          aria-label=${n("cart.quantity")}
          type="number"
          value=${this.getValue()}
          min=${d(this.min)}
          max=${d(this.max)}
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
        aria-label=${n("cart.quantity.increase")}
        tabindex="-1"
        ?disabled=${this.isMaxDisabled()}
        part="increase"
      >
        <oryx-icon .type=${this.increaseIcon}></oryx-icon>
      </button>
    `}focus(){this.input?.focus()}firstUpdated(){this.checkValidity()}getValue(){return this.value?.toString()??this.min?.toString()??"1"}onFocus(){this.checkValidity()}isMinDisabled(){return this.disabled||this.value!==void 0&&this.value<=this.min}isMaxDisabled(){return this.disabled||this.value!==void 0&&this.max!==void 0&&this.value>=this.max}increase(){this.input.stepUp(),this.onChange()}decrease(){this.input.stepDown(),this.onChange()}onInput(a){this.updateValue(a.target.value),this.dispatch(h)}onChange(){this.updateValue(),this.submitOnChange&&this.input.validity.valid?this.dispatch(p):this.dispatch(h)}updateValue(a){this.value=Number(a??this.input.value),this.checkValidity()}checkValidity(){this.hasError=!this.input.reportValidity()}onKeydown(a){a.key==="Enter"&&(this.input.validity.valid?this.dispatch(p):this.checkValidity())}dispatch(a){const r={quantity:Number(this.input.value)};this.input.validity.valid||(r.isInvalid=!0),this.dispatchEvent(new CustomEvent(a,{detail:r,bubbles:!0,composed:!0}))}get input(){return this.inputRef.value}};e([i({type:Number}),s("design:type",Object)],t.prototype,"min",void 0);e([i({type:Number}),s("design:type",Number)],t.prototype,"value",void 0);e([i({type:Number}),s("design:type",Number)],t.prototype,"max",void 0);e([i({type:Number}),s("design:type",Object)],t.prototype,"step",void 0);e([i({type:Boolean}),s("design:type",Object)],t.prototype,"submitOnChange",void 0);e([i({type:Boolean}),s("design:type",Object)],t.prototype,"disabled",void 0);e([i({type:Boolean}),s("design:type",Object)],t.prototype,"hasError",void 0);e([i(),s("design:type",Object)],t.prototype,"decreaseIcon",void 0);e([i(),s("design:type",Object)],t.prototype,"increaseIcon",void 0);t=e([l()],t);export{t as QuantityInputComponent};
