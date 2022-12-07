import{c as s,z as o,d,y as l,_ as r,v as e,g as i}from"./index-4d2c92b7.js";import{S as v}from"./common-0ee98dc0.js";import{b as h}from"./query.util-00243645.js";import"./popover.component-907eb365.js";import{P as x}from"./popover.controller-b201d380.js";import{a as p}from"./popover.model-91d12e3a.js";import"./getControl-ea6b3b29.js";var t;(function(n){n.START="start",n.CENTER="center",n.END="end"})(t||(t={}));const g=s`
  :host {
    --oryx-popover-vertical-offset: 10px;
    --oryx-popover-maxwidth: 206px;

    position: relative;
    display: inline-flex;
  }

  oryx-popover {
    --_oryx-dropdown-start-offset: 100%;
    --_oryx-dropdown-width: min(
      max(
        var(--_available-popover-width-start, var(--oryx-popover-maxwidth)),
        var(--_available-popover-width-end, var(--oryx-popover-maxwidth))
      ),
      var(--oryx-popover-maxwidth)
    );

    overflow: auto;
    max-height: min(
      calc(
        var(--_available-popover-height, ${o(p)}px) +
          var(--_bounding-element-height, 0)
      ),
      var(--oryx-popover-maxheight, ${o(p)}px)
    );
    width: var(--_oryx-dropdown-width);
    top: 0;
    inset-inline: var(--_oryx-dropdown-start-offset, auto)
      var(--_oryx-dropdown-end-offset, auto);
    transform-origin: var(--_dropdown-origin-x, left)
      var(--_dropdown-origin-y, top);
    transform: scaleX(var(--oryx-popover-visible, 0))
      scaleY(var(--oryx-popover-visible, 0));
  }

  slot[name='trigger'] {
    cursor: pointer;
  }

  :host([start]:not([rtl])),
  :host([end][rtl]),
  :host([rtl]:not([position=${o(t.START)}]):not([start])),
  :host([position=${o(t.START)}]) {
    --_dropdown-origin-x: right;
  }

  :host([end]:not([rtl])),
  :host([start][rtl]),
  :host([rtl][position=${o(t.START)}]:not([end])),
  :host(:not([position=${o(t.START)}])) {
    --_dropdown-origin-x: left;
  }

  :host(:not([up])) {
    --_dropdown-origin-y: top;
  }

  :host([up]) {
    --_dropdown-origin-y: bottom;
  }

  :host([start]:not([vertical-align])) oryx-popover,
  :host(
    [position=${o(t.START)}]:not([vertical-align]):not([end])
  ) oryx-popover {
    --_oryx-dropdown-start-offset: auto;
    --_oryx-dropdown-end-offset: 100%;
  }

  :host([up]:not([vertical-align])) oryx-popover {
    top: auto;
    bottom: 0;
  }

  :host([vertical-align]:not([up])) oryx-popover {
    top: 100%;
  }

  :host([vertical-align][up]) oryx-popover {
    top: auto;
    bottom: 100%;
  }

  :host([vertical-align]) oryx-popover {
    --_oryx-dropdown-width: min(
      calc(
        var(--_available-popover-width-start) +
          var(--_available-popover-width-end) +
          var(--_bounding-element-width, 0)
      ),
      calc(var(--oryx-popover-maxwidth) + var(--_bounding-element-width, 0))
    );

    max-height: min(
      var(--_available-popover-height, ${o(p)}px),
      var(--oryx-popover-maxheight, ${o(p)}px)
    );
  }

  :host([vertical-align][position=${o(t.END)}]) oryx-popover,
  :host(
    [vertical-align][position=${o(t.START)}][end]
  ) oryx-popover {
    --_oryx-dropdown-start-offset: min(
      calc(
        var(--_available-popover-width-end) + var(--_bounding-element-width) -
          var(--_oryx-dropdown-width)
      ),
      0px
    );
    --_oryx-dropdown-end-offset: auto;
  }

  :host(
    [vertical-align][position=${o(t.START)}]
  ) oryx-popover,
  :host(
    [vertical-align][start]:not([position])
  ) oryx-popover,
  :host(
    [vertical-align][start][position=${o(t.END)}]
  ) oryx-popover {
    --_oryx-dropdown-start-offset: auto;
    --_oryx-dropdown-end-offset: min(
      calc(
        var(--_available-popover-width-start) + var(--_bounding-element-width) -
          var(--_oryx-dropdown-width)
      ),
      0px
    );
  }

  :host([vertical-align][position=${o(t.CENTER)}]) oryx-popover {
    --_dropdown-origin-x: center;
  }

  :host(
    [vertical-align][position=${o(t.CENTER)}]:not([start])
  ) oryx-popover {
    --_oryx-dropdown-start-offset: max(
      calc(
        (var(--_oryx-dropdown-width) - var(--_bounding-element-width, 0)) / -2
      ),
      calc(var(--_available-popover-width-start) * -1)
    );
    --_oryx-dropdown-end-offset: auto;
  }

  :host(
    [vertical-align][position=${o(t.CENTER)}][start]
  ) oryx-popover {
    --_oryx-dropdown-start-offset: auto;
    --_oryx-dropdown-end-offset: max(
      calc(
        (var(--_oryx-dropdown-width) - var(--_bounding-element-width, 0)) / -2
      ),
      calc(var(--_available-popover-width-end) * -1)
    );
  }
`,y=s`
  :host([open]) slot[name='trigger'] oryx-icon-button :is(a, button) {
    border-color: var(--oryx-color-neutral-200);
    background: var(--oryx-color-canvas-200);
  }
`;class a extends d{constructor(){super(...arguments),this.controller=new x(this,{boundingElement:this}),this.open=!1,this.triggerIconSize=v.medium,this.toggleButtonAriaLabel="Toggle dropdown"}static{this.styles=[g,y]}render(){return l`
      <slot name="trigger">
        <oryx-icon-button .size=${this.triggerIconSize}>
          <button aria-label=${this.toggleButtonAriaLabel}>
            <slot name="icon"><oryx-icon type="actions"></oryx-icon></slot>
          </button>
        </oryx-icon-button>
      </slot>

      <oryx-popover
        ?show=${this.open}
        @oryx.close=${()=>this.onClose()}
        ?inert=${!this.open}
      >
        <slot></slot>
      </oryx-popover>
    `}get trigger(){return this.renderRoot?.querySelector('slot[name="trigger"]')}onClose(){this.matches(":focus-within")&&!this.trigger?.matches(":focus-within")&&h(this.trigger)?.focus()}}r([e({reflect:!0,type:Boolean}),i("design:type",Object)],a.prototype,"open",void 0);r([e(),i("design:type",String)],a.prototype,"position",void 0);r([e({type:Boolean,attribute:"vertical-align"}),i("design:type",Boolean)],a.prototype,"verticalAlign",void 0);r([e(),i("design:type",Object)],a.prototype,"triggerIconSize",void 0);r([e(),i("design:type",Object)],a.prototype,"toggleButtonAriaLabel",void 0);export{a as DropdownComponent};
