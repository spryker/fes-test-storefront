import{d as s,y as a,_ as e,v as o,g as t}from"./index.41f56078.js";import{e as l}from"./input.styles.521bf40a.js";import{E as n}from"./input.component.6d84cce8.js";import{baseStyles as p}from"./radio.styles.269557ec.js";import"./screen.63347f27.js";import"./query.util.acb311a7.js";import"./getControl.f9e6afb3.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
