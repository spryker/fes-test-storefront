import{d as i,y as n,_ as e,v as r,g as t}from"./index.53aa1d0b.js";import"./input.styles.d8ea5ccf.js";import{F as p}from"./input.component.90ccfa1d.js";import{S as s}from"./searchbox.controller.44f3eda4.js";import{baseStyles as a}from"./searchbox.styles.7f8a871d.js";import"./screen.63347f27.js";import"./query.util.98c55f03.js";import"./getControl.95a7cb9c.js";class o extends i{constructor(){super(...arguments),this.formControlController=new p(this),this.searchController=new s(this)}render(){return n`
      ${this.formControlController.render({before:this.searchController.renderPrefix(),after:this.searchController.renderSuffix()})}
    `}}o.styles=a;e([r(),t("design:type",String)],o.prototype,"label",void 0);e([r(),t("design:type",String)],o.prototype,"errorMessage",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"hasError",void 0);e([r(),t("design:type",String)],o.prototype,"prefixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"prefixFill",void 0);e([r(),t("design:type",String)],o.prototype,"suffixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"suffixFill",void 0);e([r(),t("design:type",String)],o.prototype,"searchIcon",void 0);e([r(),t("design:type",String)],o.prototype,"searchIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIcon",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconAppearance",void 0);export{o as SearchboxComponent};