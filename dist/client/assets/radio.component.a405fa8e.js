import{d as s,y as a,_ as e,v as o,g as t}from"./index.4dee5cd5.js";import{e as l}from"./input.styles.16a288f3.js";import{E as n}from"./input.component.44ef0e45.js";import{baseStyles as p}from"./radio.styles.b4dcf405.js";import"./screen.63347f27.js";import"./query.util.e90b71b5.js";import"./getControl.fb063537.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
