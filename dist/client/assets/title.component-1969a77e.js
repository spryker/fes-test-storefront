import{c as o,at as t,f as s,j as a,ao as x,_ as l,h as y}from"./index-41c5945f.js";import{C as c}from"./content.controller-bfde8771.js";import{P as g}from"./product.controller-987132f0.js";import{P as m}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";const $=o`
  :host {
    display: block;
  }

  content-link::part(link) {
    margin-inline-start: -8px;
    padding-block: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h1);
  }

  h2 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h2);
  }

  h3 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h3);
  }

  h4 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h4);
  }

  h5 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h5);
  }

  h6 oryx-text {
    --oryx-line-height: var(--oryx-line-height-h6);
  }
`;var h;let i=(h=class extends m(){constructor(){super(...arguments),this.product$=new g(this).getProduct(),this.options$=new c(this).getOptions()}render(){return t` ${s(a([this.options$,this.product$]),([e,r])=>this.renderTitle(this.renderContent(r,e),e))}`}renderContent(e,r){const n=t`<oryx-text hideToggle
      >${e==null?void 0:e.name}</oryx-text
    >`;return r!=null&&r.link?t`
      <content-link
        .options="${{type:x.Product,id:e==null?void 0:e.sku}}"
        >${n}</content-link
      >
    `:n}renderTitle(e,r){switch(r.tag){case"h1":return t`<h1>${e}</h1>`;case"h2":return t`<h2>${e}</h2>`;case"h3":return t`<h3>${e}</h3>`;case"h4":return t`<h4>${e}</h4>`;case"h5":return t`<h5>${e}</h5>`;case"h6":return t`<h6>${e}</h6>`}return e}},(()=>{h.styles=$})(),h);i=l([y()],i);export{i as ProductTitleComponent};
