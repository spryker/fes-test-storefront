import{c as r,d as a,a6 as c,y as l,_ as e,v as n,g as s}from"./index.dab5f70a.js";import{S as m}from"./common.49548711.js";var i;(function(t){t.ClockWise="clockwise",t.AntiClockWise="anticlockwise"})(i||(i={}));const y=r`
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
`;class o extends a{constructor(){super(...arguments),this.icon=c.Loader,this.size=m.medium,this.rotation=i.ClockWise}render(){return l`
      <slot>
        <oryx-icon type="${this.icon}" size="${this.size}"></oryx-icon>
      </slot>
    `}}o.styles=[y];e([n(),s("design:type",Object)],o.prototype,"icon",void 0);e([n(),s("design:type",Object)],o.prototype,"size",void 0);e([n({reflect:!0}),s("design:type",Object)],o.prototype,"rotation",void 0);export{o as SpinnerComponent};
