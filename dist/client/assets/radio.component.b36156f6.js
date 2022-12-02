import{d as s,y as a,_ as e,v as o,g as t}from"./index.e698feb0.js";import{e as l}from"./input.styles.5b91542a.js";import{E as n}from"./input.component.194faeb6.js";import{baseStyles as p}from"./radio.styles.5156d921.js";import"./screen.63347f27.js";import"./query.util.676a5241.js";import"./getControl.3e3c444e.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
