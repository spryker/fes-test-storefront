import{d as i,y as n,_ as e,v as r,g as t}from"./index.e698feb0.js";import"./input.styles.5b91542a.js";import{F as p}from"./input.component.194faeb6.js";import{S as s}from"./searchbox.controller.f2a8c90a.js";import{baseStyles as a}from"./searchbox.styles.317d3e09.js";import"./screen.63347f27.js";import"./query.util.676a5241.js";import"./getControl.3e3c444e.js";class o extends i{constructor(){super(...arguments),this.formControlController=new p(this),this.searchController=new s(this)}render(){return n`
      ${this.formControlController.render({before:this.searchController.renderPrefix(),after:this.searchController.renderSuffix()})}
    `}}o.styles=a;e([r(),t("design:type",String)],o.prototype,"label",void 0);e([r(),t("design:type",String)],o.prototype,"errorMessage",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"hasError",void 0);e([r(),t("design:type",String)],o.prototype,"prefixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"prefixFill",void 0);e([r(),t("design:type",String)],o.prototype,"suffixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"suffixFill",void 0);e([r(),t("design:type",String)],o.prototype,"searchIcon",void 0);e([r(),t("design:type",String)],o.prototype,"searchIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIcon",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconAppearance",void 0);export{o as SearchboxComponent};