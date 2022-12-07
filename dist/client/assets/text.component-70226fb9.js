import{V as h,aF as m,at as c,c as g,d as y,K as b,_ as n,v as o,g as a}from"./index-4d2c92b7.js";import{t as x}from"./throttle-4a4cf116.js";import{e as f,n as v}from"./ref-25dac95f.js";class w extends m{render(t,i){return c``}}const k=h(w),_=async e=>{const t=e.shadowRoot?.querySelector("div > *"),i=Number(getComputedStyle(e).getPropertyValue("--line-clamp"));if(t&&i>0){const l=t.style.lineHeight,s=1e3;t.style.lineHeight=`${s}px`;const p=t.getBoundingClientRect().height;t.style.lineHeight=l;const d=Math.floor(p/s);if(e.style.setProperty("--lines-count",String(d)),d<=i)return;const u=e.hasAttribute("defaultExpanded");e.toggleAttribute("truncated",!u),e.toggleAttribute("truncation",!0)}},z=g`
  :host {
    --_text-line-clamp: var(--line-clamp, 0);

    display: flex;
    flex-direction: column;
  }

  ::slotted(p) {
    margin-top: 0;
    transition: margin-bottom 0.8s cubic-bezier(0, 1, 0, 1);
  }

  :host([truncation]) div {
    overflow: hidden;
  }

  :host([truncation][truncated]) ::slotted(p) {
    display: inline;
  }

  :host([truncation][truncated]) ::slotted(p)::after {
    content: ' ';
  }

  :host([truncation][truncated]) div {
    max-height: calc(var(--_text-line-clamp) * var(--oryx-line-height, 24px));
    transition: max-height var(--oryx-transition-time) cubic-bezier(0, 1, 0, 1);
  }

  :host(:not([truncated])) div {
    max-height: calc(
      var(--lines-count, 100rem) * var(--oryx-line-height, 24px)
    );
    transition: max-height var(--oryx-transition-time) ease-out;
  }

  slot:not([name]) {
    display: block;
  }

  :host([truncated]) slot:not([name]) {
    /* stylelint-disable-next-line */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--_text-line-clamp);
    line-clamp: var(--_text-line-clamp);
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :host([initialized][truncated]) slot:not([name]) {
    animation: close 0.1s ease 0.1s forwards;
    -webkit-line-clamp: initial;
    line-clamp: initial;
  }

  /* stylelint-disable-next-line */
  @media (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      :host([initialized][truncated]) slot:not([name]) {
        /* this won't function on safari */
        -webkit-line-clamp: var(--_text-line-clamp);
      }
    }
  }

  :host(:not([truncated])) {
    animation: open 0.1s ease 0s forwards;
  }

  oryx-icon-button {
    display: inline-flex;
    align-self: center;
    margin: 10px 0;
    transition: transform var(--oryx-transition-time-long) ease-in-out;
    color: var(--oryx-color-primary-300);
  }

  :host(:not([truncated])) oryx-icon-button {
    transform: rotate(180deg);
  }

  /* FF won't render line-clamp properly wen there's not wrapping block element surrounding 
   * various child elements. This breaks Safari, hence we limit this behaviour only to FF. */
  @supports (-moz-appearance: none) {
    slot:not([name]) {
      display: block;
    }
  }

  :host(:not([truncation])) slot[name='toggle'] {
    display: none;
  }

  @keyframes open {
    from {
      line-clamp: var(--_text-line-clamp);
      -webkit-line-clamp: var(--_text-line-clamp);
    }
    to {
      line-clamp: initial;
      -webkit-line-clamp: initial;
    }
  }

  @keyframes close {
    from {
      line-clamp: initial;
      -webkit-line-clamp: initial;
    }
    to {
      line-clamp: var(--_text-line-clamp);
      -webkit-line-clamp: var(--_text-line-clamp);
    }
  }
`;class r extends y{constructor(){super(...arguments),this.hideToggle=!1,this.truncated=!1,this.truncation=!1,this.readMoreLabel="Read more",this.containerRef=f()}static{this.styles=z}disconnectedCallback(){this.resizeObserver?.disconnect(),super.disconnectedCallback()}get container(){return this.containerRef?.value}get shouldBeTruncated(){return!!Number(getComputedStyle(this).getPropertyValue("--line-clamp"))}render(){return c`
      <div ${v(this.containerRef)}>
        <slot @slotchange=${this.setup.bind(this)}></slot>
      </div>
      ${b(!this.hideToggle,()=>c` <slot name="toggle">
          <oryx-icon-button size="small">
            <button aria-label=${this.readMoreLabel} @click="${this.toggle}">
              <oryx-icon type="dropdown"></oryx-icon>
            </button>
          </oryx-icon-button>
        </slot>`)}
      ${k(_,"oryx-text")}
    `}setup(){!this.shouldBeTruncated||(this.truncation=!0,this.truncated=!this.defaultExpanded,this.resizeObserver=new ResizeObserver(x(()=>window.requestAnimationFrame(this.onResize.bind(this)),100)),this.resizeObserver.observe(this.container))}onResize(){this.shouldBeTruncated||(this.truncation=!1);const t=this.calcLinesCount(this.container.children[0]);this.style.setProperty("--lines-count",String(t))}toggle(){this.toggleAttribute("initialized",!0),this.truncated=!this.truncated}calcLinesCount(t){const i=t.style.lineHeight,l=1e3;t.style.lineHeight=`${l}px`;const s=t.getBoundingClientRect().height;return t.style.lineHeight=i,Math.floor(s/l)}}n([o({type:Boolean}),a("design:type",Object)],r.prototype,"hideToggle",void 0);n([o({type:Boolean,reflect:!0}),a("design:type",Object)],r.prototype,"truncated",void 0);n([o({type:Boolean}),a("design:type",Boolean)],r.prototype,"defaultExpanded",void 0);n([o({type:Boolean,reflect:!0}),a("design:type",Object)],r.prototype,"truncation",void 0);n([o(),a("design:type",Object)],r.prototype,"readMoreLabel",void 0);export{r as TextComponent};
