import{c as n,d as a,y as o,K as p,_ as r,v as i,g as s,aE as c,aF as l}from"./index.175fafb9.js";import"./common.49548711.js";const y=n`
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
`,d="/assets/icons.svg";class e extends a{render(){return o`
      <slot>
        ${p(this.type,()=>e.renderIcon(this.type,this.spriteUrl))}
      </slot>
    `}get spriteUrl(){var t;return`${(t=this.sprite)!=null?t:d}#${this.type}`}}e.styles=y;e.renderIcon=(g,t="")=>o`
    <svg viewBox="0 0 24 24">
      <use href="${t}" />
    </svg>
  `;r([i({reflect:!0}),s("design:type",Object)],e.prototype,"type",void 0);r([i({reflect:!0}),s("design:type",String)],e.prototype,"size",void 0);r([i(),s("design:type",String)],e.prototype,"sprite",void 0);r([c(l),s("design:type",Function)],e,"renderIcon",void 0);export{e as IconComponent};
