import{c as n,d,y as o,K as l,_ as a,v as i,g as s}from"./index.357aef3f.js";const h=n`
  :host {
    --oryx-rating-size: 18px;
    --oryx-icon-size: 18px;
    --_margin: 3px;

    display: flex;
    align-items: center;
    font-size: var(--oryx-rating-size);
    gap: 10px;
  }

  :host([size='small']) {
    --oryx-rating-size: 12px;
    --oryx-icon-size: 12px;
    --_margin: 2px;
  }

  fieldset {
    all: unset;
    white-space: nowrap;
  }

  input {
    appearance: none;
    display: inline-block;
    flex: 0 0 var(--oryx-rating-size);
    width: var(--oryx-rating-size);
    aspect-ratio: 1/1;
    position: relative;
    margin: 0;
    border-radius: var(--oryx-border-radius-small);
    outline: none;
  }

  fieldset slot {
    transition: 0.4s ease-out;
    pointer-events: none;
    display: inline-block;
    padding: var(--_margin);
    line-height: var(--oryx-rating-size);
    height: var(--oryx-rating-size);
    width: var(--oryx-rating-size);
  }

  fieldset slot,
  fieldset ::slotted(*) {
    color: var(--oryx-rating-color-active, var(--oryx-color-secondary-300));
    font-size: 1em;
  }

  fieldset slot svg {
    fill: currentColor;
  }

  input:focus-visible + slot {
    border-radius: 4px;
    background-color: var(--oryx-color-canvas-200);
    box-shadow: var(--oryx-box-shadow-focus);
  }

  label {
    position: absolute;
    opacity: 0;
  }

  slot,
  b {
    font-size: 1rem;
  }

  :host > svg {
    width: 0;
    height: 0;
  }
`,p=n`
  :host(:not([readonly])) input {
    position: absolute;
    margin: 0;
    outline: none;
    box-sizing: content-box;
    padding: var(--_margin);
  }

  :host(:not([readonly])) input:not(:checked) {
    cursor: pointer;
  }

  fieldset:not(:hover) input:invalid + slot,
  fieldset:not(:hover) input:invalid + ::slotted(*),
  fieldset :is(input:hover, :not(:hover) input:checked) + slot ~ slot,
  fieldset :is(input:hover, :not(:hover) input:checked) + slot ~ ::slotted(*) {
    color: var(--oryx-rating-color-inactive, var(--oryx-color-neutral-200));
  }

  input:hover:not(:checked) + slot,
  input:hover:not(:checked) + ::slotted(*) {
    color: var(--oryx-rating-color-hover, var(--oryx-color-secondary-400));
  }

  fieldset input:valid:hover + slot ~ slot[has-char],
  fieldset input:hover + slot ~ slot[has-char],
  fieldset:not(:hover) input:checked + slot ~ slot[has-char] {
    opacity: 0.3;
  }
`,c=n`
  :host([readonly]) {
    padding: var(--_margin);
  }

  :host([readonly]) fieldset {
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: calc(2 * var(--_margin));
  }

  :host([readonly]) input {
    background-color: var(--oryx-color-canvas-500);
  }

  :host([readonly]:not([size='small'])) input {
    /* stylelint-disable-next-line */
    clip-path: url('#star-path');
  }

  :host([readonly][size='small']) input {
    /* stylelint-disable-next-line */
    clip-path: url('#star-path-small');
  }

  :host([readonly]) input::after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: orange;
    width: min(calc(((var(--rate) - var(--pos) + 1) * 100%)), 100%);
  }

  .review-count {
    color: var(--oryx-color-neutral-300);
    line-height: var(--oryx-rating-size);
    font-size: 1rem;
  }
`,u=25;class r extends d{constructor(){super(...arguments),this.scale=5}render(){return o`
      <fieldset style=${`--rate: ${this.getValue()};`}>
        ${[...Array(Math.min(this.scale,u))].map((e,t)=>this.renderInput(t))}
      </fieldset>

      ${l(this.reviewCount!==void 0,()=>o`<span class="review-count">${this.getCount()}</span>`)}
      ${this.renderClipPath()}
    `}renderInput(e){return o`<input
        @input=${()=>this.setValue(e+1)}
        type="radio"
        name="rating"
        value=${e+1}
        ?required=${!this.readonly}
        ?disabled=${this.readonly}
        ?checked=${Math.round(this.getValue())===e+1}
        style=${`--pos: ${e+1}`}
        aria-label=${e+1}
      />${l(!this.readonly,()=>this.renderSlot(e))}`}renderSlot(e){var t;return o`<slot name=${e+1} ?has-char=${this.hasChar(e)}
      >${(t=this.getChar(e))!=null?t:o`<svg viewBox="0 0 18 18">
        <use href="#star" />
      </svg>`}</slot
    >`}renderClipPath(){return o`
      <svg xmlns="http://www.w3.org/2000/svg">
        <clipPath id="star-path">
          <use href="#star" />
        </clipPath>
        <clipPath id="star-path-small">
          <path
            d="M9.21975 7.07491L11.8082 4.93311C12.1743 4.62895 11.9849 4.0333 11.5051 4.00796L8.17175 3.80518C7.96973 3.79251 7.79296 3.66577 7.7172 3.47567L6.49243 0.332676C6.31566 -0.110892 5.69696 -0.110892 5.52019 0.332676L4.29543 3.463C4.21967 3.6531 4.0429 3.77984 3.84088 3.79251L0.494864 3.99528C0.0150585 4.02063 -0.174338 4.61628 0.191829 4.92044L2.78025 7.04957C2.93177 7.1763 3.00753 7.39175 2.95702 7.58185L2.11105 10.8389C1.99741 11.2951 2.48984 11.6627 2.89389 11.4092L5.70959 9.59692C5.88636 9.48286 6.10101 9.48286 6.26516 9.59692L9.09348 11.4092C9.49753 11.6627 9.98996 11.2951 9.87632 10.8389L9.03035 7.59452C8.99247 7.40442 9.0556 7.20165 9.21975 7.07491Z"
          />
        </clipPath>
        <defs>
          <path
            id="star"
            d="M13.8296 10.6124L17.7123 7.39967C18.2615 6.94343 17.9774 6.04995 17.2577 6.01193L12.2576 5.70777C11.9546 5.68876 11.6894 5.49866 11.5758 5.21351L9.73865 0.499014C9.47349 -0.166338 8.54545 -0.166338 8.28029 0.499014L6.44314 5.1945C6.3295 5.47965 6.06435 5.66975 5.76131 5.68876L0.742296 5.99292C0.0225877 6.03094 -0.261508 6.92442 0.287743 7.38066L4.17038 10.5744C4.39766 10.7645 4.51129 11.0876 4.43553 11.3728L3.16658 16.2584C2.99612 16.9427 3.73477 17.494 4.34084 17.1138L8.56439 14.3954C8.82954 14.2243 9.15152 14.2243 9.39773 14.3954L13.6402 17.1138C14.2463 17.494 14.9849 16.9427 14.8145 16.2584L13.5455 11.3918C13.4887 11.1066 13.5834 10.8025 13.8296 10.6124Z"
          />
        </defs>
      </svg>
    `}getValue(){var e;return(e=this.value)!=null?e:0}setValue(e){this.value=e}getCount(){return this.reviewCount}hasChar(e){var t;return[...(t=this.characters)!=null?t:[]].length>e}getChar(e){var t;if(!!this.hasChar(e))return[...(t=this.characters)!=null?t:[]][e]}}r.styles=[h,p,c];a([i({type:Number}),s("design:type",Number)],r.prototype,"value",void 0);a([i({type:Boolean,reflect:!0}),s("design:type",Boolean)],r.prototype,"readonly",void 0);a([i(),s("design:type",Object)],r.prototype,"reviewCount",void 0);a([i({type:Number}),s("design:type",Object)],r.prototype,"scale",void 0);a([i(),s("design:type",String)],r.prototype,"characters",void 0);a([i({reflect:!0}),s("design:type",String)],r.prototype,"size",void 0);export{r as RatingComponent};
