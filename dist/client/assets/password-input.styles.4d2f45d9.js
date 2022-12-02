import{c as i}from"./index.7349b146.js";import{s as o}from"./input.styles.2f53e7a4.js";import"./input.component.f2827d08.js";import"./screen.63347f27.js";import"./query.util.f7db9ca0.js";import"./getControl.6911501f.js";const c=i`
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
