import{c as a,z as r}from"./index-74abacf3.js";import{C as o}from"./chip.model-ebf28ca0.js";const p={styles:[a`
      :host {
        --bg: var(--oryx-color-neutral-300);

        border-radius: 38px;
        color: var(--oryx-color-canvas-100);
      }

      :host([appearance='${r(o.Offline)}']),
      :host([appearance='${r(o.Inactive)}']) {
        --bg: var(--oryx-color-neutral-300);
      }

      :host([appearance='${r(o.Success)}']),
      :host([appearance='${r(o.Online)}']),
      :host([appearance='${r(o.Active)}']) {
        --bg: var(--oryx-color-success-300);
      }

      :host([appearance='${r(o.Low)}']) {
        --bg: var(--oryx-chip-low-color, #cd8814);
      }

      :host([appearance='${r(o.Warning)}']) {
        --bg: var(--oryx-color-warning-300);
      }

      :host([appearance='${r(o.Highlight)}']) {
        --bg: var(--oryx-color-highlight-300);
      }

      :host([appearance='${r(o.Info)}']) {
        --bg: var(--oryx-color-info-300);
      }

      :host([appearance='${r(o.Error)}']) {
        --bg: var(--oryx-color-error-300);
      }
    `]};export{p as chipStorefrontUI};
