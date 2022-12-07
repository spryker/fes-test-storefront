import{c as n,d as a,y as i,K as c,_ as e,v as s,g as r,aD as p,aE as l}from"./index-4d2c92b7.js";import"./common-0ee98dc0.js";const y=n`
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
`,d="/assets/icons.svg";class t extends a{static{this.styles=y}static{this.renderIcon=(g,o="")=>i`
    <svg viewBox="0 0 24 24">
      <use href="${o}" />
    </svg>
  `}render(){return i`
      <slot>
        ${c(this.type,()=>t.renderIcon(this.type,this.spriteUrl))}
      </slot>
    `}get spriteUrl(){return`${this.sprite??d}#${this.type}`}}e([s({reflect:!0}),r("design:type",Object)],t.prototype,"type",void 0);e([s({reflect:!0}),r("design:type",String)],t.prototype,"size",void 0);e([s(),r("design:type",String)],t.prototype,"sprite",void 0);e([p(l),r("design:type",Function)],t,"renderIcon",void 0);export{t as IconComponent};
