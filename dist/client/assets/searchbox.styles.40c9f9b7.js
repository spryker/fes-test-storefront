import{m as a}from"./screen.63347f27.js";import{c as e}from"./index.dab5f70a.js";import{b as r,s as o}from"./input.styles.0ca2fca3.js";import"./input.component.73ae1729.js";import"./query.util.1f8bf822.js";import"./getControl.09b98a01.js";const m=[...r,e`
    .search,
    .clear {
      cursor: pointer;
    }

    .clear[type='remove'] {
      --oryx-icon-size: var(--oryx-icon-size-large);
    }

    .clear {
      opacity: 0;
      z-index: 1;
      transition: opacity var(--oryx-transition-time, 0.3s);
      align-self: center;
    }

    :host(:not([has-value])) [appearance='SHOW'] {
      display: none;
    }

    :host([has-value]) .clear:not([appearance='HOVER']),
    :host([has-value]) .clear[appearance='HOVER']:hover {
      opacity: 1;
    }

    .clear:not([appearance='SHOW']) + oryx-icon {
      position: absolute;
    }

    :host([has-value]) .clear[appearance='TOGGLE'] + .search,
    :host([has-value]) .clear[appearance='HOVER']:hover + .search {
      opacity: 0;
    }
  `],s=e`
  .clear[type='remove'] {
    --oryx-icon-size: var(--oryx-icon-size-medium);
  }
`,y=[...o,{media:a,css:s}];export{m as baseStyles,y as screenStyles};
