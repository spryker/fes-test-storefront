import{d as l,y as r,_ as i,v as e,g as o}from"./index-41c5945f.js";import{F as n,A as y}from"./input.component-729fa045.js";import{b as p}from"./input.styles-dce2c601.js";import{g as h}from"./getControl-bdad11f5.js";import{baseStyles as a}from"./password-input.styles-f3294d7a.js";import"./query.util-87342f84.js";import"./screen-c0aae3c9.js";const s=class extends l{constructor(){super(...arguments),this.formControlController=new n(this),this.affixController=new y(this),this.strategy="CLICK",this.timeout=5e3}render(){return r`
      ${this.formControlController.render({before:this.affixController.renderPrefix(),after:this.affixController.renderSuffix(this.renderActionIcon())})}
    `}renderActionIcon(){switch(this.strategy){case"NONE":return r``;case"HOVER":return r`
          <oryx-icon
            type=${this.visibilityIcon}
            @mouseover=${this.showVisibility}
            @mouseout=${this.hideVisibility}
          ></oryx-icon>
        `;case"MOUSEDOWN":return r`
          <oryx-icon
            type=${this.visibilityIcon}
            @mousedown=${this.showVisibility}
            @mouseup=${this.hideVisibility}
            @mouseout=${this.hideVisibility}
          ></oryx-icon>
        `;default:return r`
          <oryx-icon
            type=${this.visibilityIcon}
            @click=${this.toggleVisibility}
          ></oryx-icon>
        `}}get visibilityIcon(){return this.visible?"invisible":"visible"}toggleVisibility(){this.hasAttribute("visible")?this.hideVisibility():this.showVisibility()}showVisibility(){this.toggleAttribute("visible",!0),this.control.setAttribute("type","text"),this.timeout>0&&setTimeout(()=>{this.hasAttribute("visible")&&this.hideVisibility()},this.timeout)}hideVisibility(){this.toggleAttribute("visible",!1),this.control.setAttribute("type","password")}get control(){return h(this,"input")}};let t=s;(()=>{s.styles=[...p,a]})();i([e(),o("design:type",String)],t.prototype,"label",void 0);i([e(),o("design:type",String)],t.prototype,"errorMessage",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"floatLabel",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"hasError",void 0);i([e(),o("design:type",String)],t.prototype,"prefixIcon",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"prefixFill",void 0);i([e(),o("design:type",String)],t.prototype,"suffixIcon",void 0);i([e({type:Boolean,reflect:!0}),o("design:type",Boolean)],t.prototype,"suffixFill",void 0);i([e(),o("design:type",String)],t.prototype,"strategy",void 0);i([e({type:Number}),o("design:type",Object)],t.prototype,"timeout",void 0);i([e({type:Boolean}),o("design:type",Boolean)],t.prototype,"visible",void 0);export{t as PasswordInputComponent};
