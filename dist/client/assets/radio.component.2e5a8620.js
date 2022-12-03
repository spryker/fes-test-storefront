import{d as s,y as a,_ as e,v as o,g as t}from"./index.571dc3d3.js";import{e as l}from"./input.styles.38fc0133.js";import{E as n}from"./input.component.3cc0ab03.js";import{baseStyles as p}from"./radio.styles.9e768944.js";import"./screen.63347f27.js";import"./query.util.ad546b12.js";import"./getControl.bb441626.js";class r extends s{constructor(){super(...arguments),this.errorController=new n(this)}render(){return a`
      <label part="label">
        <slot></slot>
        <slot name="subtext"></slot>
      </label>
      ${this.errorController.render()}
    `}}r.styles=[p,l];e([o(),t("design:type",String)],r.prototype,"errorMessage",void 0);e([o({type:Boolean}),t("design:type",Boolean)],r.prototype,"hasError",void 0);export{r as RadioComponent};
//# sourceMappingURL=radio.component.2e5a8620.js.map
