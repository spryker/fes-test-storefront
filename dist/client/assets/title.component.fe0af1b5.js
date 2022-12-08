import{c as r,ax as n,f as h,j as a,O as o,as as s,_ as l,h as x}from"./index.65290630.js";import{C as y}from"./content.controller.53d4125f.js";import{P as g}from"./product.controller.4d401941.js";import{P as m}from"./product.mixin.0ef1a236.js";import"./context.controller.86df9e5b.js";import"./component.mixin.d9d48422.js";const $=r`
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
`;let i=class extends m(){constructor(){super(...arguments),this.product$=new g(this).getProduct(),this.options$=new y(this).getOptions()}render(){return n` ${h(a([this.options$,this.product$]),([e,t])=>n`<oryx-heading .tag=${e.tag} .maxLines=${e.maxLines}>
          ${o(!(e!=null&&e.link),()=>n`${t==null?void 0:t.name}`,()=>this.renderLink(t))}
        </oryx-heading>`)}`}renderLink(e){return n`
      <content-link
        .options="${{type:s.Product,id:e==null?void 0:e.sku}}"
        >${e==null?void 0:e.name}</content-link
      >
    `}};i.styles=$;i=l([x()],i);export{i as ProductTitleComponent};
