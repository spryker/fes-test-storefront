import{d as s,y as a,_ as e,v as o,g as t}from"./index.175fafb9.js";import{e as l}from"./input.styles.91b1fb97.js";import{E as n}from"./input.component.50462855.js";import{baseStyles as p}from"./radio.styles.498cb6ad.js";import"./screen.63347f27.js";import"./query.util.788fe4a8.js";import"./getControl.4120baa5.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
