import{d as s,y as a,_ as r,v as e,g as o}from"./index-4d2c92b7.js";import{e as l}from"./input.styles-6d634215.js";import{E as i}from"./input.component-77513b1c.js";import{baseStyles as n}from"./radio.styles-1e9e5678.js";import"./screen-c0aae3c9.js";import"./query.util-00243645.js";import"./getControl-ea6b3b29.js";class t extends s{constructor(){super(...arguments),this.errorController=new i(this)}static{this.styles=[n,l]}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r([e(),o("design:type",String)],t.prototype,"errorMessage",void 0);r([e({type:Boolean}),o("design:type",Boolean)],t.prototype,"hasError",void 0);export{t as RadioComponent};
