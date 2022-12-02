import{d as s,y as a,_ as e,v as o,g as t}from"./index.d896b0c8.js";import{e as l}from"./input.styles.f623e52e.js";import{E as n}from"./input.component.43c4aed3.js";import{baseStyles as p}from"./radio.styles.9086da27.js";import"./screen.63347f27.js";import"./query.util.366c172e.js";import"./getControl.62947eb8.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
//# sourceMappingURL=radio.component.d947ac45.js.map
