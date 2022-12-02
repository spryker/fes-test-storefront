import{c as i,au as t,f as o,j as s,ap as a,_ as x,h as l}from"./index.e698feb0.js";import{C as y}from"./content.controller.13788f6c.js";import{P as c}from"./product.controller.f0aa3f31.js";import{P as g}from"./product.mixin.f9280692.js";import"./context.controller.d8f4a455.js";import"./component.mixin.cf8fd244.js";const m=i`
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
`;let h=class extends g(){constructor(){super(...arguments),this.product$=new c(this).getProduct(),this.options$=new y(this).getOptions()}render(){return t` ${o(s([this.options$,this.product$]),([e,r])=>this.renderTitle(this.renderContent(r,e),e))}`}renderContent(e,r){const n=t`<oryx-text hideToggle
      >${e==null?void 0:e.name}</oryx-text
    >`;return r!=null&&r.link?t`
      <content-link
        .options="${{type:a.Product,id:e==null?void 0:e.sku}}"
        >${n}</content-link
      >
    `:n}renderTitle(e,r){switch(r.tag){case"h1":return t`<h1>${e}</h1>`;case"h2":return t`<h2>${e}</h2>`;case"h3":return t`<h3>${e}</h3>`;case"h4":return t`<h4>${e}</h4>`;case"h5":return t`<h5>${e}</h5>`;case"h6":return t`<h6>${e}</h6>`}return e}};h.styles=m;h=x([l()],h);export{h as ProductTitleComponent};
