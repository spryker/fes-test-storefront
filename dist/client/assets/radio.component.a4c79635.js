import{d as s,y as a,_ as e,v as o,g as t}from"./index.0de56bf6.js";import{e as l}from"./input.styles.352f3e03.js";import{E as n}from"./input.component.9be270fa.js";import{baseStyles as p}from"./radio.styles.69c85736.js";import"./screen.63347f27.js";import"./query.util.86117036.js";import"./getControl.90f4a4dd.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
