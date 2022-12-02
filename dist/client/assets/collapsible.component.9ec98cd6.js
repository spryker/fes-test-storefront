import{d as l,y as t,K as i,_ as o,v as n,g as s}from"./index.53aa1d0b.js";import{c as r}from"./base.styles.56f26a00.js";class e extends l{constructor(){super(...arguments),this.appearance="block",this.toggleControlType="iconButton"}render(){return t`
      <details ?open=${this.open}>
        <summary tabindex=${this.isInline?-1:0}>
          <slot name="header">${this.header}</slot>
          ${this.renderToggleControl()}
          <slot name="aside"></slot>
        </summary>
        <slot part="content"></slot>
      </details>
    `}renderToggleControl(){return t`
      ${i(this.toggleControlType!=="textButton",()=>t`
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
      ${i(this.toggleControlType==="textButton",()=>t`
          <oryx-button type="text" size=${this.controlSize}>
            <span tabindex=${this.isInline?0:-1}>
              <slot name="collapsed"> Hide </slot>
              <slot name="expanded"> Show </slot>
            </span>
          </oryx-button>
        `)}
    `}get controlSize(){return this.isInline?"small":"medium"}get isInline(){return this.appearance==="inline"}}e.styles=[r];o([n({reflect:!0}),s("design:type",Object)],e.prototype,"appearance",void 0);o([n({type:Object}),s("design:type",Object)],e.prototype,"toggleControlType",void 0);o([n({type:Boolean}),s("design:type",Boolean)],e.prototype,"open",void 0);o([n(),s("design:type",String)],e.prototype,"header",void 0);export{e as CollapsibleComponent};
