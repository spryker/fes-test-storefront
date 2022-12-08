import{d as a,y as e,K as r,_ as o,v as n,g as s}from"./index-41c5945f.js";import{c as l}from"./base.styles-df64c3a5.js";const i=class extends a{constructor(){super(...arguments),this.appearance="block",this.toggleControlType="iconButton"}render(){return e`
      <details ?open=${this.open}>
        <summary tabindex=${this.isInline?-1:0}>
          <slot name="header">${this.header}</slot>
          ${this.renderToggleControl()}
          <slot name="aside"></slot>
        </summary>
        <slot part="content"></slot>
      </details>
    `}renderToggleControl(){return e`
      ${r(this.toggleControlType!=="textButton",()=>e`
          <oryx-icon-button size=${this.controlSize}>
            <span tabindex=${this.isInline?0:-1}>
              <slot name="collapsed">
                <oryx-icon type="expand"></oryx-icon>
              </slot>
              <slot name="expanded">
                <oryx-icon type="collapse"></oryx-icon>
              </slot>
            </span>
          </oryx-icon-button>
        `)}
      ${r(this.toggleControlType==="textButton",()=>e`
          <oryx-button type="text" size=${this.controlSize}>
            <span tabindex=${this.isInline?0:-1}>
              <slot name="collapsed"> Hide </slot>
              <slot name="expanded"> Show </slot>
            </span>
          </oryx-button>
        `)}
    `}get controlSize(){return this.isInline?"small":"medium"}get isInline(){return this.appearance==="inline"}};let t=i;(()=>{i.styles=[l]})();o([n({reflect:!0}),s("design:type",Object)],t.prototype,"appearance",void 0);o([n({type:Object}),s("design:type",Object)],t.prototype,"toggleControlType",void 0);o([n({type:Boolean}),s("design:type",Boolean)],t.prototype,"open",void 0);o([n(),s("design:type",String)],t.prototype,"header",void 0);export{t as CollapsibleComponent};
