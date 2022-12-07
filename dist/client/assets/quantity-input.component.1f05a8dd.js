import{d as l,a6 as h,y,J as p,_ as i,v as s,g as a,h as b}from"./index.41f56078.js";import{i as r}from"./i18n.directive.5ac487c1.js";import{e as m,n as v}from"./ref.3fdf67b2.js";import{styles as g}from"./quantity-input.styles.3e49bdbb.js";import"./screen.63347f27.js";const u="update",c="submit";let e=class extends l{constructor(){super(...arguments),this.min=1,this.step=1,this.submitOnChange=!1,this.disabled=!1,this.hasError=!1,this.decreaseIcon=h.Decrease,this.increaseIcon=h.Increase,this.inputRef=m()}render(){return y`
      <button
        @click=${this.decrease}
        aria-label=${r("cart.quantity.decrease")}
        tabindex="-1"
        ?disabled=${this.isMinDisabled()}
        part="decrease"
      >
        <oryx-icon .type=${this.decreaseIcon}></oryx-icon>
      </button>
      <oryx-input ?hasError=${this.hasError}>
        <input
          ${v(this.inputRef)}
          aria-label=${r("cart.quantity")}
          type="number"
          value=${this.getValue()}
          min=${p(this.min)}
          max=${p(this.max)}
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
        <oryx-icon .type=${this.increaseIcon}></oryx-icon>
      </button>
    `}focus(){var t;(t=this.input)==null||t.focus()}firstUpdated(){this.checkValidity()}getValue(){var t,n,o,d;return(d=(o=(t=this.value)==null?void 0:t.toString())!=null?o:(n=this.min)==null?void 0:n.toString())!=null?d:"1"}onFocus(){this.checkValidity()}isMinDisabled(){return this.disabled||this.value!==void 0&&this.value<=this.min}isMaxDisabled(){return this.disabled||this.value!==void 0&&this.max!==void 0&&this.value>=this.max}increase(){this.input.stepUp(),this.onChange()}decrease(){this.input.stepDown(),this.onChange()}onInput(t){this.updateValue(t.target.value),this.dispatch(u)}onChange(){this.updateValue(),this.submitOnChange&&this.input.validity.valid?this.dispatch(c):this.dispatch(u)}updateValue(t){this.value=Number(t!=null?t:this.input.value),this.checkValidity()}checkValidity(){this.hasError=!this.input.reportValidity()}onKeydown(t){t.key==="Enter"&&(this.input.validity.valid?this.dispatch(c):this.checkValidity())}dispatch(t){const n={quantity:Number(this.input.value)};this.input.validity.valid||(n.isInvalid=!0),this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}get input(){return this.inputRef.value}};e.styles=g;i([s({type:Number}),a("design:type",Object)],e.prototype,"min",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"value",void 0);i([s({type:Number}),a("design:type",Number)],e.prototype,"max",void 0);i([s({type:Number}),a("design:type",Object)],e.prototype,"step",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"submitOnChange",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"disabled",void 0);i([s({type:Boolean}),a("design:type",Object)],e.prototype,"hasError",void 0);i([s(),a("design:type",Object)],e.prototype,"decreaseIcon",void 0);i([s(),a("design:type",Object)],e.prototype,"increaseIcon",void 0);e=i([b()],e);export{e as QuantityInputComponent};
