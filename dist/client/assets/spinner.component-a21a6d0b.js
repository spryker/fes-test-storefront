import{c as r,d as a,a6 as c,y as l,_ as i,v as e,g as n}from"./index-4d2c92b7.js";import{S as m}from"./common-0ee98dc0.js";var o;(function(t){t.ClockWise="clockwise",t.AntiClockWise="anticlockwise"})(o||(o={}));const y=r`
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
`;class s extends a{constructor(){super(...arguments),this.icon=c.Loader,this.size=m.medium,this.rotation=o.ClockWise}static{this.styles=[y]}render(){return l`
      <slot>
        <oryx-icon type="${this.icon}" size="${this.size}"></oryx-icon>
      </slot>
    `}}i([e(),n("design:type",Object)],s.prototype,"icon",void 0);i([e(),n("design:type",Object)],s.prototype,"size",void 0);i([e({reflect:!0}),n("design:type",Object)],s.prototype,"rotation",void 0);export{s as SpinnerComponent};
