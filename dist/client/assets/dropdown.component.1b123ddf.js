import{c as l,z as o,d as v,y as h,_ as i,v as a,g as n}from"./index.4dee5cd5.js";import{S as x}from"./common.49548711.js";import{b as g}from"./query.util.e90b71b5.js";import"./popover.component.2e1f18f7.js";import{P as y}from"./popover.controller.c9394335.js";import{a as s}from"./popover.model.e1bbffca.js";import"./getControl.fb063537.js";var t;(function(p){p.START="start",p.CENTER="center",p.END="end"})(t||(t={}));const c=l`
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
        var(--_available-popover-height, ${o(s)}px) +
          var(--_bounding-element-height, 0)
      ),
      var(--oryx-popover-maxheight, ${o(s)}px)
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
      var(--_available-popover-height, ${o(s)}px),
      var(--oryx-popover-maxheight, ${o(s)}px)
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
`,w=l`
  :host([open]) slot[name='trigger'] oryx-icon-button :is(a, button) {
    border-color: var(--oryx-color-neutral-200);
    background: var(--oryx-color-canvas-200);
  }
`;class r extends v{constructor(){super(...arguments),this.controller=new y(this,{boundingElement:this}),this.open=!1,this.triggerIconSize=x.medium,this.toggleButtonAriaLabel="Toggle dropdown"}render(){return h`
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
    `}get trigger(){var e;return(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="trigger"]')}onClose(){var e,d;this.matches(":focus-within")&&!((e=this.trigger)!=null&&e.matches(":focus-within"))&&((d=g(this.trigger))==null||d.focus())}}r.styles=[c,w];i([a({reflect:!0,type:Boolean}),n("design:type",Object)],r.prototype,"open",void 0);i([a(),n("design:type",String)],r.prototype,"position",void 0);i([a({type:Boolean,attribute:"vertical-align"}),n("design:type",Boolean)],r.prototype,"verticalAlign",void 0);i([a(),n("design:type",Object)],r.prototype,"triggerIconSize",void 0);i([a(),n("design:type",Object)],r.prototype,"toggleButtonAriaLabel",void 0);export{r as DropdownComponent};
