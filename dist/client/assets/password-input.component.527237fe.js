import{d as r,y as s,_ as i,v as e,g as o}from"./index.41f56078.js";import{F as l,A as n}from"./input.component.6d84cce8.js";import{b as y}from"./input.styles.521bf40a.js";import{g as p}from"./getControl.f9e6afb3.js";import{baseStyles as a}from"./password-input.styles.1d98faae.js";import"./query.util.acb311a7.js";import"./screen.63347f27.js";class t extends r{constructor(){super(...arguments),this.formControlController=new l(this),this.affixController=new n(this),this.strategy="CLICK",this.timeout=5e3}render(){return s`
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
        `}}get visibilityIcon(){return this.visible?"invisible":"visible"}toggleVisibility(){this.hasAttribute("visible")?this.hideVisibility():this.showVisibility()}showVisibility(){this.toggleAttribute("visible",!0),this.control.setAttribute("type","text"),this.timeout>0&&setTimeout(()=>{this.hasAttribute("visible")&&this.hideVisibility()},this.timeout)}hideVisibility(){this.toggleAttribute("visible",!1),this.control.setAttribute("type","password")}get control(){return p(this,"input")}}t.styles=[...y,a];i([e(),o("design:type",String)],t.prototype,"label",void 0);i([e(),o("design:type",String)],t.prototype,"errorMessage",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"floatLabel",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"hasError",void 0);i([e(),o("design:type",String)],t.prototype,"prefixIcon",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"prefixFill",void 0);i([e(),o("design:type",String)],t.prototype,"suffixIcon",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"suffixFill",void 0);i([e(),o("design:type",String)],t.prototype,"strategy",void 0);i([e({type:Number}),o("design:type",Object)],t.prototype,"timeout",void 0);i([e({type:Boolean}),o("design:type",Boolean)],t.prototype,"visible",void 0);export{t as PasswordInputComponent};
