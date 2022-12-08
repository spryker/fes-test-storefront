import{d as s,y as a,_ as e,v as o,g as t}from"./index.65290630.js";import{e as l}from"./input.styles.99c4a18e.js";import{E as n}from"./input.component.c24771d8.js";import{baseStyles as p}from"./radio.styles.07c73144.js";import"./query.util.f444d9cc.js";import"./getControl.74b403d8.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
