import{d as s,y as a,_ as e,v as o,g as t}from"./index.dab5f70a.js";import{e as l}from"./input.styles.0ca2fca3.js";import{E as n}from"./input.component.73ae1729.js";import{baseStyles as p}from"./radio.styles.b5b7dd4f.js";import"./screen.63347f27.js";import"./query.util.1f8bf822.js";import"./getControl.09b98a01.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
