import{V as m,aG as g,au as c,c as y,d as b,K as x,_ as a,v as r,g as l}from"./index.0de56bf6.js";import{t as f}from"./throttle.eea39600.js";import{e as v,n as w}from"./ref.607d6d50.js";class k extends g{render(t,n){return c``}}const _=m(k),z=async e=>{var o;const t=(o=e.shadowRoot)==null?void 0:o.querySelector("div > *"),n=Number(getComputedStyle(e).getPropertyValue("--line-clamp"));if(t&&n>0){const s=t.style.lineHeight,d=1e3;t.style.lineHeight=`${d}px`;const u=t.getBoundingClientRect().height;t.style.lineHeight=s;const p=Math.floor(u/d);if(e.style.setProperty("--lines-count",String(p)),p<=n)return;const h=e.hasAttribute("defaultExpanded");e.toggleAttribute("truncated",!h),e.toggleAttribute("truncation",!0)}},$=y`
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
`;class i extends b{constructor(){super(...arguments),this.hideToggle=!1,this.truncated=!1,this.truncation=!1,this.readMoreLabel="Read more",this.containerRef=v()}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.disconnect(),super.disconnectedCallback()}get container(){var t;return(t=this.containerRef)==null?void 0:t.value}get shouldBeTruncated(){return!!Number(getComputedStyle(this).getPropertyValue("--line-clamp"))}render(){return c`
      <div ${w(this.containerRef)}>
        <slot @slotchange=${this.setup.bind(this)}></slot>
      </div>
      ${x(!this.hideToggle,()=>c` <slot name="toggle">
          <oryx-icon-button size="small">
            <button aria-label=${this.readMoreLabel} @click="${this.toggle}">
              <oryx-icon type="dropdown"></oryx-icon>
            </button>
          </oryx-icon-button>
        </slot>`)}
      ${_(z,"oryx-text")}
    `}setup(){!this.shouldBeTruncated||(this.truncation=!0,this.truncated=!this.defaultExpanded,this.resizeObserver=new ResizeObserver(f(()=>window.requestAnimationFrame(this.onResize.bind(this)),100)),this.resizeObserver.observe(this.container))}onResize(){this.shouldBeTruncated||(this.truncation=!1);const t=this.calcLinesCount(this.container.children[0]);this.style.setProperty("--lines-count",String(t))}toggle(){this.toggleAttribute("initialized",!0),this.truncated=!this.truncated}calcLinesCount(t){const n=t.style.lineHeight,o=1e3;t.style.lineHeight=`${o}px`;const s=t.getBoundingClientRect().height;return t.style.lineHeight=n,Math.floor(s/o)}}i.styles=$;a([r({type:Boolean}),l("design:type",Object)],i.prototype,"hideToggle",void 0);a([r({type:Boolean,reflect:!0}),l("design:type",Object)],i.prototype,"truncated",void 0);a([r({type:Boolean}),l("design:type",Boolean)],i.prototype,"defaultExpanded",void 0);a([r({type:Boolean,reflect:!0}),l("design:type",Object)],i.prototype,"truncation",void 0);a([r(),l("design:type",Object)],i.prototype,"readMoreLabel",void 0);export{i as TextComponent};
