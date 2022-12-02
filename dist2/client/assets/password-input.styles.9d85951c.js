import{c as i}from"./index.53aa1d0b.js";import{s as o}from"./input.styles.d8ea5ccf.js";import"./input.component.90ccfa1d.js";import"./screen.63347f27.js";import"./query.util.98c55f03.js";import"./getControl.95a7cb9c.js";const c=i`
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
