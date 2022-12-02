import{z as r,c as l,B as z,y as $,f as A,j as C,J as u,K as M,t as E,_ as L,h as j}from"./index.e698feb0.js";import{C as H}from"./content.controller.13788f6c.js";import{P as _}from"./product.controller.f0aa3f31.js";import{P as B}from"./product.mixin.f9280692.js";import"./context.controller.d8f4a455.js";import"./component.mixin.cf8fd244.js";const I=r("[main-layout='none']"),v=r("[main-layout='toggle']"),S=r("[nav-position='bottom']"),D=r("[nav-position='top']"),x=r("[nav-position='start']"),p=r("[nav-position='end']"),a=r(`:is(${x}, ${p})`),e=r("[nav-layout='grid']"),m=r("[nav-display='floating']"),T=r("[nav-display='none']"),g=r("[nav-align='center']"),y=r("[nav-align='end']"),h=l`var(--product-images-main-height, 300px)`,N=l`var(--product-images-thumb-width, var(--product-images-thumb-height, min(15vw, 80px)))`,k=l`var(--product-images-thumb-height, var(--product-images-thumb-width, min(15vw, 80px)))`,V=l`
  section {
    position: relative;
    height: ${h};
    width: var(--product-images-main-width, 100%);
  }

  section product-media {
    box-sizing: border-box;
    min-height: 1px;
  }

  slot:not(${v}) section {
    display: flex;
    flex-grow: 1;
    scrollbar-width: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  slot:not(${v}) section product-media {
    flex: 1 0 100%;
    scroll-snap-align: start;
  }

  slot${v} section product-media {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--oryx-transition-time) ease;
  }

  slot${v} section product-media[active] {
    opacity: 1;
  }
`,W=l`
  :not(${e}) .nav {
    min-width: 0;
    overflow: auto;
    scroll-behavior: smooth;
  }

  :not(${e}):not(${a}) .nav {
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
  }

  :not(${e})${a} .nav {
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;
  }

  slot${a}:not(${e}) .nav {
    height: inherit;
  }
`,q=l`
  slot:not(${a})${e} .nav {
    flex-wrap: wrap;
  }

  slot${e} {
    align-items: start;
  }

  slot${a}${e} .nav {
    display: grid;
    grid-template-rows: repeat(var(--oryx-grid-items-per-column, 3), 1fr);
    grid-auto-flow: column;
    min-width: 0;
  }
`,O=l`
  slot${m} {
    overflow: hidden;
  }

  slot${m}:not(${I}) .nav {
    position: absolute;
    z-index: 1;
  }

  slot${m}:not(${a}) .nav {
    width: inherit;
  }

  slot${m}${p} .nav {
    inset-inline-end: 0;
  }

  slot${m}:not([nav-position]) .nav,
  slot${m}${S} .nav {
    bottom: 0;
  }
`,R=l`
  slot:not(${e}):not(${a}):not([nav-align])
    label:first-child,
  slot:not(${e}):not(${a}):is(${g},
      ${y})
    label:first-child {
    margin-inline-start: auto;
  }

  slot:not(${e}):not(${a}):not([nav-align]) label:last-child,
  slot:not(${e}):not(${a})${g}
    label:last-child {
    margin-inline-end: auto;
  }

  slot:not(${e})${a}:is(${g}, ${y})
    label:first-child {
    margin-block-start: auto;
  }

  slot:not(${e})${a}${g} label:last-child {
    margin-block-end: auto;
  }

  slot${e}:not([nav-align]) .nav,
  slot${e}${g} .nav {
    justify-content: center;
  }

  slot${a}${e}:not([nav-align]) .nav,
  slot${a}${e}${g} .nav {
    align-self: center;
  }

  slot${e}${y} .nav {
    justify-content: end;
    align-self: end;
  }
`,F=l`
  .nav {
    display: flex;
    align-items: center;
    align-content: start;
    gap: var(--product-images-navigation-gap, var(--oryx-space-2));
    border: none;
    margin: 0;
    box-sizing: border-box;
    padding: 4px;
  }

  slot${a} .nav {
    flex-direction: column;
    box-sizing: border-box;
  }

  slot${x}, slot${p} {
    height: ${h};
  }

  ${W}
  ${q}
  ${O}
  ${R}

  .nav label {
    position: relative;
    scroll-snap-align: start;
    height: ${k};
    width: ${N};
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--oryx-color-canvas-100);
  }

  slot${a} .nav label {
    flex: 0 0 ${k};
  }

  slot:not(${a}) .nav label {
    flex: 0 0 ${N};
  }

  .nav input {
    appearance: none;
    margin: 0;
    inset: 0;
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    outline: none;
    border-radius: 2px;
  }

  .nav input:focus:focus-visible,
  .nav input:checked,
  .nav input:hover {
    border: solid var(--oryx-border-thin) var(--oryx-color-neutral-400);
  }

  .nav input:hover:not(:checked) {
    border-color: var(--oryx-color-neutral-200);
  }

  .nav input:focus:focus-visible {
    box-shadow: 0 0 4px var(--oryx-color-focus);
    border-color: var(--oryx-color-focus);
  }
`,G=l`
  :host {
    width: 100%;
  }

  slot {
    display: grid;
    gap: var(--oryx-layout-gap);
    width: var(--product-images-main-width, 100%);
    position: relative;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  slot:not([nav-position]),
  slot${S} {
    grid-template-rows: ${h} min-content;
  }

  slot${D} {
    grid-template-rows: min-content ${h};
  }

  slot${x} {
    grid-template-columns: min-content var(--product-images-main-width, 1fr);
  }

  slot${p} {
    grid-template-columns: var(--product-images-main-width, 1fr) min-content;
  }

  slot[without-nav],
  slot${I}, slot${m}, slot${T} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`,J=l`
  ${G}
  ${V}
  ${F}
`;let f=class extends B(){constructor(){super(...arguments),this.product$=new _(this).getProduct().pipe(t=>this.reset(t)),this.options$=new H(this).getOptions().pipe(t=>this.reset(t)),this.active$=new z(0)}render(){return $`
      ${A(C([this.product$,this.options$,this.active$]),([t,i,o])=>{const s=this.resolveImages(t,i);return this.wrap(i,this.renderMain(i,s,o),this.renderNavigation(i,s,o))})}
    `}resolveImages(t,i){var s,n,d;const o=i.mediaSet?(n=t==null?void 0:t.mediaSet)==null?void 0:n.find(c=>c.name===i.mediaSet):(s=t==null?void 0:t.mediaSet)==null?void 0:s[0];return(d=o==null?void 0:o.media)!=null?d:[]}wrap(t,i,o){const s=(d,c)=>c?`${d}:${c}${isNaN(c)?"":"px"};`:"";let n="";return n+=s("--product-images-main-height",t.mainImageHeight),n+=s("--product-images-main-width",t.mainImageWidth),n+=s("--product-images-thumb-height",t.thumbHeight),n+=s("--product-images-thumb-width",t.thumbWidth),t.gridItemsPerColumn&&(n+=`--oryx-grid-items-per-column: ${t.gridItemsPerColumn}`),$` <slot
      main-layout=${u(t.mainLayout)}
      nav-position=${u(t.navigationPosition)}
      nav-layout=${u(t.navigationLayout)}
      nav-display=${u(t.navigationDisplay)}
      nav-align=${u(t.navigationAlignment)}
      ?without-nav=${!o.values.length}
      style=${n}
    >
      ${M(t.navigationPosition==="top"||t.navigationPosition==="start",()=>$`${o}${i}`,()=>$`${i}${o}`)}
    </slot>`}renderMain(t,i,o){return t.mainLayout==="none"?$``:$`<section class="preview">
      ${i.map((s,n)=>$`<product-media
          .sku=${this.sku}
          .options=${{mediaIndex:n,containerSize:"detail",alt:`preview${n+1}`,loading:o!==n?"lazy":void 0}}
          ?active=${o===n}
        ></product-media>`)}
    </section>`}renderNavigation(t,i,o){return t.navigationDisplay==="none"||i.length<=1?$``:$` <fieldset class="nav">
      ${i.map((s,n)=>{var d;return $`
          <label aria-label=${`image ${n}`}>
            <input
              value=${n}
              type="radio"
              name=${u((d=t.groupName)!=null?d:`product-image-nav-${this.uid}`)}
              ?checked=${n===o}
              @input=${this.onInput}
              @mouseover=${c=>this.onMouseover(c,t)}
            />
            <product-media
              .sku=${this.sku}
              .options=${{mediaIndex:n,containerSize:"thumbnail",loading:o!==n?"lazy":void 0}}
              ?active=${o===n}
            ></product-media>
          </label>
        `})}
    </fieldset>`}onInput(t){const o=t.target.value;this.setActive(+o,"smooth")}onMouseover(t,i){i.navigationMouseEvent==="mouseover"&&t.target.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}setActive(t,i="auto"){var s,n,d,c,w,P;if(t!==void 0){this.active$.next(t);const b=(s=this.shadowRoot)==null?void 0:s.querySelectorAll("input");(n=b==null?void 0:b[t])==null||n.toggleAttribute("checked",!0)}const o=(c=(d=this.shadowRoot)==null?void 0:d.querySelectorAll("section product-media"))==null?void 0:c[this.active$.getValue()];i==="disable"?(w=o==null?void 0:o.parentNode)==null||w.scrollTo(0,0):(P=o==null?void 0:o.parentNode)==null||P.scroll({left:o==null?void 0:o.offsetLeft,behavior:i})}reset(t){return t.pipe(E(()=>this.setActive(0,"disable")))}};f.styles=J;f=L([j()],f);export{f as ProductImagesComponent};
