import{c as o,z as n}from"./index.65290630.js";const r=o`
  oryx-notification {
    margin-inline: var(--oryx-space-4);
    margin-block-start: var(--oryx-space-4);
  }

  oryx-button button {
    line-height: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: none;
  }

  oryx-notification > :not(:last-child) {
    margin-bottom: var(--oryx-space-2);
  }
`,i=o`
  oryx-notification {
    flex-direction: row;
    align-items: center;
  }

  oryx-notification > :not(:last-child) {
    padding-inline-end: var(--oryx-space-4);
    margin-bottom: 0;
  }
`,a=[{media:n,css:i}];export{r as confirmationBaseStyles,a as confirmationScreenStyles};
