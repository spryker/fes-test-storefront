import{c as i}from"./index.dab5f70a.js";import{s as o}from"./input.styles.0ca2fca3.js";import"./input.component.73ae1729.js";import"./screen.63347f27.js";import"./query.util.1f8bf822.js";import"./getControl.09b98a01.js";const c=i`
  slot[name='suffix'] > oryx-icon {
    margin-inline-end: 0;
  }

  oryx-icon {
    --oryx-icon-size: var(--oryx-icon-size-medium);

    cursor: pointer;
    width: 38px;
    height: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding-inline-end: 10px;
  }

  svg {
    pointer-events: none;
  }

  svg .visible,
  svg .invisible {
    transition: var(--oryx-transition-time);
  }

  :host(:not([visible])) svg .invisible,
  :host([visible]) svg .visible {
    opacity: 0;
  }
`,m=[...o];export{c as baseStyles,m as screenStyles};
