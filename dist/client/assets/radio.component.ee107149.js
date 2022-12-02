import{d as s,y as a,_ as e,v as o,g as t}from"./index.7349b146.js";import{e as l}from"./input.styles.2f53e7a4.js";import{E as n}from"./input.component.f2827d08.js";import{baseStyles as p}from"./radio.styles.be0b501e.js";import"./screen.63347f27.js";import"./query.util.f7db9ca0.js";import"./getControl.6911501f.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
