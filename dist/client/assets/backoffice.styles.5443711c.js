import{c as a,z as r}from"./index.7349b146.js";import{C as o}from"./chip.model.1f5952d8.js";const n={styles:[a`
      :host {
        border-radius: var(--oryx-border-radius);
      }

      :host([appearance='${r(o.Inactive)}']) {
        --bg: var(--oryx-color-canvas-200);
        --c: var(--oryx-color-neutral-300);
      }

      :host([appearance='${r(o.Success)}']),
      :host([appearance='${r(o.Online)}']),
      :host([appearance='${r(o.Active)}']) {
        --bg: var(--oryx-color-success-100);
        --c: var(--oryx-color-success-300);
      }

      :host([appearance='${r(o.Offline)}']) {
        --c: var(--oryx-color-neutral-300);
        --bg: var(--oryx-color-canvas-300);
      }

      :host([appearance='${r(o.Low)}']) {
        --bg: var(--oryx-chip-low-background-color, #fffbe6);
        --c: var(--oryx-chip-low-color, #cd8814);
      }

      :host([appearance='${r(o.Warning)}']) {
        --bg: var(--oryx-color-warning-100);
        --c: var(--oryx-color-warning-300);
      }

      :host([appearance='${r(o.Highlight)}']) {
        --bg: var(--oryx-color-highlight-100);
        --c: var(--oryx-color-highlight-300);
      }

      :host([appearance='${r(o.Info)}']) {
        --bg: var(--oryx-color-info-100);
        --c: var(--oryx-color-info-300);
      }

      :host([appearance='${r(o.Error)}']) {
        --bg: var(--oryx-color-error-100);
        --c: var(--oryx-color-error-300);
      }
    `]};export{n as chipBackofficeUI};
