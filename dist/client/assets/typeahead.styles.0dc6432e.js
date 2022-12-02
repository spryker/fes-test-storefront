import{c as a,z as r}from"./index.d896b0c8.js";import{a as t}from"./popover.model.e1bbffca.js";import"./common.49548711.js";import"./popover.component.35097858.js";import"./input.styles.f623e52e.js";import"./input.component.43c4aed3.js";import{baseStyles as s,screenStyles as l}from"./searchbox.styles.d01df834.js";import"./screen.63347f27.js";import"./query.util.366c172e.js";import"./getControl.62947eb8.js";var e;(function(o){o.PREFIX="PREFIX",o.SUFFIX="SUFFIX",o.NONE="NONE"})(e||(e={}));var p;(function(o){o.AFTER="AFTER",o.SUFFIX="SUFFIX",o.NONE="NONE"})(p||(p={}));var i;(function(o){o.HOVER="HOVER",o.TOGGLE="TOGGLE",o.SHOW="SHOW"})(i||(i={}));const O=[...s,a`
    :host {
      --oryx-popover-vertical-offset: 20px;

      position: relative;
      display: flex;
    }

    :host([__closed]) {
      --oryx-popover-visible: 0;
    }

    oryx-popover {
      margin: calc((var(--oryx-popover-vertical-offset) / 2) - 2px) 0;
      overflow: auto;
      max-height: min(
        calc(var(--_available-popover-height, ${r(t)}px)),
        var(--oryx-popover-maxheight, ${r(t)}px)
      );
      width: var(--oryx-popover-width, 100%);
    }

    :host(:not([up]):not([popoverDirection])) oryx-popover,
    :host([popoverDirection='DOWN']) oryx-popover {
      top: calc(
        var(--oryx-popover-distance, 42px) + var(--oryx-label-height, 0px)
      );
      transform-origin: left top;
    }

    :host([up]:not([popoverDirection])) oryx-popover,
    :host([popoverDirection='UP']) oryx-popover {
      bottom: var(--oryx-popover-distance, 42px);
      transform-origin: left bottom;
    }

    :host([label]) oryx-popover,
    :host([has-label]) oryx-popover {
      --oryx-label-height: 23px;
    }

    :host([floatLabel]) oryx-popover {
      --oryx-label-height: 4px;
    }

    slot .placeholder {
      height: 120px;
    }

    .placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    slot[name='loading'] oryx-icon {
      color: var(--oryx-color-primary-300);
      animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(-1turn);
      }
    }
  `],g=[...l];export{O as baseStyles,g as screenStyles};
//# sourceMappingURL=typeahead.styles.0dc6432e.js.map