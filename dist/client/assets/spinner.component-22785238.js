import{c as n,d as c,a6 as l,y,_ as i,v as e,g as s}from"./index-74abacf3.js";import{S as m}from"./common-0ee98dc0.js";var o;(function(a){a.ClockWise="clockwise",a.AntiClockWise="anticlockwise"})(o||(o={}));const d=n`
  :host {
    /* stylelint-disable-next-line */
    --_margin: 0px;

    display: flex;
    aspect-ratio: 1 / 1;
    justify-content: center;
    color: var(--oryx-color-primary-300, inherit);
  }

  oryx-icon,
  ::slotted(oryx-icon) {
    animation-duration: 1200ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  :host([rotation='clockwise']) oryx-icon,
  :host([rotation='clockwise']) ::slotted(oryx-icon) {
    animation-name: clockwise;
  }

  :host([rotation='anticlockwise']) oryx-icon,
  :host([rotation='anticlockwise']) ::slotted(oryx-icon) {
    animation-name: anticlockwise;
  }

  @keyframes clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes anticlockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`,r=class extends c{constructor(){super(...arguments),this.icon=l.Loader,this.size=m.medium,this.rotation=o.ClockWise}render(){return y`
      <slot>
        <oryx-icon type="${this.icon}" size="${this.size}"></oryx-icon>
      </slot>
    `}};let t=r;(()=>{r.styles=[d]})();i([e(),s("design:type",Object)],t.prototype,"icon",void 0);i([e(),s("design:type",Object)],t.prototype,"size",void 0);i([e({reflect:!0}),s("design:type",Object)],t.prototype,"rotation",void 0);export{t as SpinnerComponent};
