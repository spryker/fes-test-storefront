import{d as i,y as n,_ as e,v as r,g as t}from"./index.d896b0c8.js";import"./input.styles.f623e52e.js";import{F as p}from"./input.component.43c4aed3.js";import{S as s}from"./searchbox.controller.904ff0da.js";import{baseStyles as a}from"./searchbox.styles.d01df834.js";import"./screen.63347f27.js";import"./query.util.366c172e.js";import"./getControl.62947eb8.js";class o extends i{constructor(){super(...arguments),this.formControlController=new p(this),this.searchController=new s(this)}render(){return n`
      ${this.formControlController.render({before:this.searchController.renderPrefix(),after:this.searchController.renderSuffix()})}
    `}}o.styles=a;e([r(),t("design:type",String)],o.prototype,"label",void 0);e([r(),t("design:type",String)],o.prototype,"errorMessage",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"hasError",void 0);e([r(),t("design:type",String)],o.prototype,"prefixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"prefixFill",void 0);e([r(),t("design:type",String)],o.prototype,"suffixIcon",void 0);e([r({type:Boolean}),t("design:type",Boolean)],o.prototype,"suffixFill",void 0);e([r(),t("design:type",String)],o.prototype,"searchIcon",void 0);e([r(),t("design:type",String)],o.prototype,"searchIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIcon",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconPosition",void 0);e([r(),t("design:type",String)],o.prototype,"clearIconAppearance",void 0);export{o as SearchboxComponent};
//# sourceMappingURL=searchbox.component.2be3e28a.js.map
