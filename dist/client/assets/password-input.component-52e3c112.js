import{d as r,y as s,_ as t,v as i,g as e}from"./index-4d2c92b7.js";import{F as l,A as n}from"./input.component-77513b1c.js";import{b as y}from"./input.styles-6d634215.js";import{g as p}from"./getControl-ea6b3b29.js";import{baseStyles as a}from"./password-input.styles-452a5f6a.js";import"./query.util-00243645.js";import"./screen-c0aae3c9.js";class o extends r{constructor(){super(...arguments),this.formControlController=new l(this),this.affixController=new n(this),this.strategy="CLICK",this.timeout=5e3}static{this.styles=[...y,a]}render(){return s`
      ${this.formControlController.render({before:this.affixController.renderPrefix(),after:this.affixController.renderSuffix(this.renderActionIcon())})}
    `}renderActionIcon(){switch(this.strategy){case"NONE":return s``;case"HOVER":return s`
          <oryx-icon
            type=${this.visibilityIcon}
            @mouseover=${this.showVisibility}
            @mouseout=${this.hideVisibility}
          ></oryx-icon>
        `;case"MOUSEDOWN":return s`
          <oryx-icon
            type=${this.visibilityIcon}
            @mousedown=${this.showVisibility}
            @mouseup=${this.hideVisibility}
            @mouseout=${this.hideVisibility}
          ></oryx-icon>
        `;default:return s`
          <oryx-icon
            type=${this.visibilityIcon}
            @click=${this.toggleVisibility}
          ></oryx-icon>
        `}}get visibilityIcon(){return this.visible?"invisible":"visible"}toggleVisibility(){this.hasAttribute("visible")?this.hideVisibility():this.showVisibility()}showVisibility(){this.toggleAttribute("visible",!0),this.control.setAttribute("type","text"),this.timeout>0&&setTimeout(()=>{this.hasAttribute("visible")&&this.hideVisibility()},this.timeout)}hideVisibility(){this.toggleAttribute("visible",!1),this.control.setAttribute("type","password")}get control(){return p(this,"input")}}t([i(),e("design:type",String)],o.prototype,"label",void 0);t([i(),e("design:type",String)],o.prototype,"errorMessage",void 0);t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],o.prototype,"floatLabel",void 0);t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],o.prototype,"hasError",void 0);t([i(),e("design:type",String)],o.prototype,"prefixIcon",void 0);t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],o.prototype,"prefixFill",void 0);t([i(),e("design:type",String)],o.prototype,"suffixIcon",void 0);t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],o.prototype,"suffixFill",void 0);t([i(),e("design:type",String)],o.prototype,"strategy",void 0);t([i({type:Number}),e("design:type",Object)],o.prototype,"timeout",void 0);t([i({type:Boolean}),e("design:type",Boolean)],o.prototype,"visible",void 0);export{o as PasswordInputComponent};
