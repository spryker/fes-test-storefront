import{c as i}from"./index.d896b0c8.js";import{s as o}from"./input.styles.f623e52e.js";import"./input.component.43c4aed3.js";import"./screen.63347f27.js";import"./query.util.366c172e.js";import"./getControl.62947eb8.js";const c=i`
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
//# sourceMappingURL=password-input.styles.61d15a94.js.map
