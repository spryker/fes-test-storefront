import{d as s,y as a,_ as e,v as o,g as t}from"./index.357aef3f.js";import{e as l}from"./input.styles.657f2325.js";import{E as n}from"./input.component.8d85be15.js";import{baseStyles as p}from"./radio.styles.b62b7a85.js";import"./screen.63347f27.js";import"./query.util.4f77d0c1.js";import"./getControl.52ca41ab.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
