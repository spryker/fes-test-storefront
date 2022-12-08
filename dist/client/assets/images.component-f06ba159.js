import{z as r,c as l,B as A,y as d,f as C,j as M,J as m,K as E,t as L,_ as j,h as H}from"./index-41c5945f.js";import{C as B}from"./content.controller-bfde8771.js";import{P as D}from"./product.controller-987132f0.js";import{P as T}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";const I=r("[main-layout='none']"),h=r("[main-layout='toggle']"),z=r("[nav-position='bottom']"),V=r("[nav-position='top']"),x=r("[nav-position='start']"),b=r("[nav-position='end']"),a=r(`:is(${x}, ${b})`),e=r("[nav-layout='grid']"),$=r("[nav-display='floating']"),W=r("[nav-display='none']"),g=r("[nav-align='center']"),f=r("[nav-align='end']"),p=l`var(--product-images-main-height, 300px)`,N=l`var(--product-images-thumb-width, var(--product-images-thumb-height, min(15vw, 80px)))`,k=l`var(--product-images-thumb-height, var(--product-images-thumb-width, min(15vw, 80px)))`,_=l`
  section {
    position: relative;
    height: ${p};
    width: var(--product-images-main-width, 100%);
  }

  section product-media {
    box-sizing: border-box;
    min-height: 1px;
  }

  slot:not(${h}) section {
    display: flex;
    flex-grow: 1;
    scrollbar-width: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  slot:not(${h}) section product-media {
    flex: 1 0 100%;
    scroll-snap-align: start;
  }

  slot${h} section product-media {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--oryx-transition-time) ease;
  }

  slot${h} section product-media[active] {
    opacity: 1;
  }
`,q=l`
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
`,O=l`
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
`,R=l`
  slot${$} {
    overflow: hidden;
  }

  slot${$}:not(${I}) .nav {
    position: absolute;
    z-index: 1;
  }

  slot${$}:not(${a}) .nav {
    width: inherit;
  }

  slot${$}${b} .nav {
    inset-inline-end: 0;
  }

  slot${$}:not([nav-position]) .nav,
  slot${$}${z} .nav {
    bottom: 0;
  }
`,F=l`
  slot:not(${e}):not(${a}):not([nav-align])
    label:first-child,
  slot:not(${e}):not(${a}):is(${g},
      ${f})
    label:first-child {
    margin-inline-start: auto;
  }

  slot:not(${e}):not(${a}):not([nav-align]) label:last-child,
  slot:not(${e}):not(${a})${g}
    label:last-child {
    margin-inline-end: auto;
  }

  slot:not(${e})${a}:is(${g}, ${f})
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

  slot${e}${f} .nav {
    justify-content: end;
    align-self: end;
  }
`,G=l`
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

  slot${x}, slot${b} {
    height: ${p};
  }

  ${q}
  ${O}
  ${R}
  ${F}

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
`,J=l`
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
  slot${z} {
    grid-template-rows: ${p} min-content;
  }

  slot${V} {
    grid-template-rows: min-content ${p};
  }

  slot${x} {
    grid-template-columns: min-content var(--product-images-main-width, 1fr);
  }

  slot${b} {
    grid-template-columns: var(--product-images-main-width, 1fr) min-content;
  }

  slot[without-nav],
  slot${I}, slot${$}, slot${W} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`,K=l`
  ${J}
  ${_}
  ${G}
`;var v;let S=(v=class extends T(){constructor(){super(...arguments),this.product$=new D(this).getProduct().pipe(t=>this.reset(t)),this.options$=new B(this).getOptions().pipe(t=>this.reset(t)),this.active$=new A(0)}render(){return d`
      ${C(M([this.product$,this.options$,this.active$]),([t,i,o])=>{const s=this.resolveImages(t,i);return this.wrap(i,this.renderMain(i,s,o),this.renderNavigation(i,s,o))})}
    `}resolveImages(t,i){var s,n;const o=i.mediaSet?(n=t==null?void 0:t.mediaSet)==null?void 0:n.find(c=>c.name===i.mediaSet):(s=t==null?void 0:t.mediaSet)==null?void 0:s[0];return(o==null?void 0:o.media)??[]}wrap(t,i,o){const s=(c,u)=>u?`${c}:${u}${isNaN(u)?"":"px"};`:"";let n="";return n+=s("--product-images-main-height",t.mainImageHeight),n+=s("--product-images-main-width",t.mainImageWidth),n+=s("--product-images-thumb-height",t.thumbHeight),n+=s("--product-images-thumb-width",t.thumbWidth),t.gridItemsPerColumn&&(n+=`--oryx-grid-items-per-column: ${t.gridItemsPerColumn}`),d` <slot
      main-layout=${m(t.mainLayout)}
      nav-position=${m(t.navigationPosition)}
      nav-layout=${m(t.navigationLayout)}
      nav-display=${m(t.navigationDisplay)}
      nav-align=${m(t.navigationAlignment)}
      ?without-nav=${!o.values.length}
      style=${n}
    >
      ${E(t.navigationPosition==="top"||t.navigationPosition==="start",()=>d`${o}${i}`,()=>d`${i}${o}`)}
    </slot>`}renderMain(t,i,o){return t.mainLayout==="none"?d``:d`<section class="preview">
      ${i.map((s,n)=>d`<product-media
          .sku=${this.sku}
          .options=${{mediaIndex:n,containerSize:"detail",alt:`preview${n+1}`,loading:o!==n?"lazy":void 0}}
          ?active=${o===n}
        ></product-media>`)}
    </section>`}renderNavigation(t,i,o){return t.navigationDisplay==="none"||i.length<=1?d``:d` <fieldset class="nav">
      ${i.map((s,n)=>d`
          <label aria-label=${`image ${n}`}>
            <input
              value=${n}
              type="radio"
              name=${m(t.groupName??`product-image-nav-${this.uid}`)}
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
        `)}
    </fieldset>`}onInput(t){const o=t.target.value;this.setActive(+o,"smooth")}onMouseover(t,i){i.navigationMouseEvent==="mouseover"&&t.target.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}setActive(t,i="auto"){var s,n,c,u,w,P;if(t!==void 0){this.active$.next(t);const y=(s=this.shadowRoot)==null?void 0:s.querySelectorAll("input");(n=y==null?void 0:y[t])==null||n.toggleAttribute("checked",!0)}const o=(u=(c=this.shadowRoot)==null?void 0:c.querySelectorAll("section product-media"))==null?void 0:u[this.active$.getValue()];i==="disable"?(w=o==null?void 0:o.parentNode)==null||w.scrollTo(0,0):(P=o==null?void 0:o.parentNode)==null||P.scroll({left:o==null?void 0:o.offsetLeft,behavior:i})}reset(t){return t.pipe(L(()=>this.setActive(0,"disable")))}},(()=>{v.styles=K})(),v);S=j([H()],S);export{S as ProductImagesComponent};
