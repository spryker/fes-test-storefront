import{d as s,y as a,_ as e,v as o,g as t}from"./index.53aa1d0b.js";import{e as l}from"./input.styles.d8ea5ccf.js";import{E as n}from"./input.component.90ccfa1d.js";import{baseStyles as p}from"./radio.styles.88ddb98c.js";import"./screen.63347f27.js";import"./query.util.98c55f03.js";import"./getControl.95a7cb9c.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
