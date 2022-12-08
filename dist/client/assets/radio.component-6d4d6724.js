import{d as l,y as a,_ as t,v as o,g as s}from"./index-41c5945f.js";import{e as i}from"./input.styles-dce2c601.js";import{E as p}from"./input.component-729fa045.js";import{baseStyles as m}from"./radio.styles-40eef0a8.js";import"./screen-c0aae3c9.js";import"./query.util-87342f84.js";import"./getControl-bdad11f5.js";const e=class extends l{constructor(){super(...arguments),this.errorController=new p(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}};let r=e;(()=>{e.styles=[m,i]})();t([o(),s("design:type",String)],r.prototype,"errorMessage",void 0);t([o({type:Boolean}),s("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
