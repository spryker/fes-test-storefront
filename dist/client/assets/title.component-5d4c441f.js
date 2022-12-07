import{c as o,at as e,f as i,j as s,ao as a,_ as x,h as c}from"./index-4d2c92b7.js";import{C as l}from"./content.controller-33ee67c3.js";import{P as y}from"./product.controller-77c96ee5.js";import{P as u}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";const g=o`
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
`;let h=class extends u(){constructor(){super(...arguments),this.product$=new y(this).getProduct(),this.options$=new l(this).getOptions()}static{this.styles=g}render(){return e` ${i(s([this.options$,this.product$]),([t,r])=>this.renderTitle(this.renderContent(r,t),t))}`}renderContent(t,r){const n=e`<oryx-text hideToggle
      >${t?.name}</oryx-text
    >`;return r?.link?e`
      <content-link
        .options="${{type:a.Product,id:t?.sku}}"
        >${n}</content-link
      >
    `:n}renderTitle(t,r){switch(r.tag){case"h1":return e`<h1>${t}</h1>`;case"h2":return e`<h2>${t}</h2>`;case"h3":return e`<h3>${t}</h3>`;case"h4":return e`<h4>${t}</h4>`;case"h5":return e`<h5>${t}</h5>`;case"h6":return e`<h6>${t}</h6>`}return t}};h=x([c()],h);export{h as ProductTitleComponent};
