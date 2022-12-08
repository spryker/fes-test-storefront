import{c as n,d as c,y as o,K as p,_ as r,v as i,g as s,aD as l,aE as y}from"./index-41c5945f.js";import"./common-0ee98dc0.js";const d=n`
  :host {
    /* stylelint-disable-next-line */
    --_margin: 0px;

    display: flex;
    height: var(--oryx-icon-size, var(--oryx-icon-size-large, 24px));
    aspect-ratio: 1 / 1;
    justify-content: center;
    color: var(--oryx-icon-color, inherit);
  }

  svg,
  ::slotted(svg) {
    fill: var(--oryx-icon-color, currentColor);
    width: calc(var(--oryx-icon-size, 24px) - (var(--_margin) * 2));
    aspect-ratio: 1 / 1;
    margin: var(--_margin);
    transition: var(--oryx-transition-time);
  }

  :host([size='medium']) {
    --_margin: 3px;
  }

  :host([size='small']) {
    --_margin: 6px;
  }
`,g="/assets/icons.svg",e=class extends c{render(){return o`
      <slot>
        ${p(this.type,()=>e.renderIcon(this.type,this.spriteUrl))}
      </slot>
    `}get spriteUrl(){return`${this.sprite??g}#${this.type}`}};let t=e;(()=>{e.styles=d})(),(()=>{e.renderIcon=(v,a="")=>o`
    <svg viewBox="0 0 24 24">
      <use href="${a}" />
    </svg>
  `})();r([i({reflect:!0}),s("design:type",Object)],t.prototype,"type",void 0);r([i({reflect:!0}),s("design:type",String)],t.prototype,"size",void 0);r([i(),s("design:type",String)],t.prototype,"sprite",void 0);r([l(y),s("design:type",Function)],t,"renderIcon",void 0);export{t as IconComponent};
