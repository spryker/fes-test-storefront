import{c as i}from"./index.571dc3d3.js";import{s as o}from"./input.styles.38fc0133.js";import"./input.component.3cc0ab03.js";import"./screen.63347f27.js";import"./query.util.ad546b12.js";import"./getControl.bb441626.js";const c=i`
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
//# sourceMappingURL=password-input.styles.2d5ef450.js.map
