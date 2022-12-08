import{c as i}from"./index.65290630.js";import{s as e}from"./input.styles.99c4a18e.js";import"./input.component.c24771d8.js";import"./query.util.f444d9cc.js";import"./getControl.74b403d8.js";const v=i`
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
`,c=[...e];export{v as baseStyles,c as screenStyles};
