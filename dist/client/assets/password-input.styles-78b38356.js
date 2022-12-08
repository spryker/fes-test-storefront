import{c as i}from"./index-74abacf3.js";import{s as o}from"./input.styles-234f9c42.js";import"./input.component-97e52801.js";import"./screen-c0aae3c9.js";import"./query.util-ea16e59e.js";import"./getControl-b5e3af75.js";const c=i`
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
