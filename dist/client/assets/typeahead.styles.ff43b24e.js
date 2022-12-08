import{c as i,D as r}from"./index.65290630.js";import{a as e}from"./popover.model.e1bbffca.js";import"./common.49548711.js";import"./popover.component.ceac2744.js";import"./input.styles.99c4a18e.js";import"./input.component.c24771d8.js";import{baseStyles as s,screenStyles as l}from"./searchbox.styles.2d4277f9.js";import"./query.util.f444d9cc.js";import"./getControl.74b403d8.js";var t;(function(o){o.PREFIX="PREFIX",o.SUFFIX="SUFFIX",o.NONE="NONE"})(t||(t={}));var p;(function(o){o.AFTER="AFTER",o.SUFFIX="SUFFIX",o.NONE="NONE"})(p||(p={}));var a;(function(o){o.HOVER="HOVER",o.TOGGLE="TOGGLE",o.SHOW="SHOW"})(a||(a={}));const b=[...s,i`
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
        calc(var(--_available-popover-height, ${r(e)}px)),
        var(--oryx-popover-maxheight, ${r(e)}px)
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
  `],O=[...l];export{b as baseStyles,O as screenStyles};
