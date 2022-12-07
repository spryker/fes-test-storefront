import{d as l,y as e,K as i,_ as t,v as o,g as n}from"./index-4d2c92b7.js";import{c as r}from"./base.styles-381d3d9f.js";class s extends l{constructor(){super(...arguments),this.appearance="block",this.toggleControlType="iconButton"}static{this.styles=[r]}render(){return e`
      <details ?open=${this.open}>
        <summary tabindex=${this.isInline?-1:0}>
          <slot name="header">${this.header}</slot>
          ${this.renderToggleControl()}
          <slot name="aside"></slot>
        </summary>
        <slot part="content"></slot>
      </details>
    `}renderToggleControl(){return e`
      ${i(this.toggleControlType!=="textButton",()=>e`
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
      ${i(this.toggleControlType==="textButton",()=>e`
          <oryx-button type="text" size=${this.controlSize}>
            <span tabindex=${this.isInline?0:-1}>
              <slot name="collapsed"> Hide </slot>
              <slot name="expanded"> Show </slot>
            </span>
          </oryx-button>
        `)}
    `}get controlSize(){return this.isInline?"small":"medium"}get isInline(){return this.appearance==="inline"}}t([o({reflect:!0}),n("design:type",Object)],s.prototype,"appearance",void 0);t([o({type:Object}),n("design:type",Object)],s.prototype,"toggleControlType",void 0);t([o({type:Boolean}),n("design:type",Boolean)],s.prototype,"open",void 0);t([o(),n("design:type",String)],s.prototype,"header",void 0);export{s as CollapsibleComponent};
