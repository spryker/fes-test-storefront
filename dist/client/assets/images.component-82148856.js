import{z as r,c as l,B as N,y as d,f as k,j as S,J as m,K as z,t as A,_ as C,h as M}from"./index-4d2c92b7.js";import{C as E}from"./content.controller-33ee67c3.js";import{P as L}from"./product.controller-77c96ee5.js";import{P as j}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";const P=r("[main-layout='none']"),$=r("[main-layout='toggle']"),I=r("[nav-position='bottom']"),H=r("[nav-position='top']"),y=r("[nav-position='start']"),v=r("[nav-position='end']"),a=r(`:is(${y}, ${v})`),e=r("[nav-layout='grid']"),c=r("[nav-display='floating']"),_=r("[nav-display='none']"),u=r("[nav-align='center']"),b=r("[nav-align='end']"),g=l`var(--product-images-main-height, 300px)`,f=l`var(--product-images-thumb-width, var(--product-images-thumb-height, min(15vw, 80px)))`,x=l`var(--product-images-thumb-height, var(--product-images-thumb-width, min(15vw, 80px)))`,B=l`
  section {
    position: relative;
    height: ${g};
    width: var(--product-images-main-width, 100%);
  }

  section product-media {
    box-sizing: border-box;
    min-height: 1px;
  }

  slot:not(${$}) section {
    display: flex;
    flex-grow: 1;
    scrollbar-width: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  slot:not(${$}) section product-media {
    flex: 1 0 100%;
    scroll-snap-align: start;
  }

  slot${$} section product-media {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--oryx-transition-time) ease;
  }

  slot${$} section product-media[active] {
    opacity: 1;
  }
`,D=l`
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
`,T=l`
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
`,V=l`
  slot${c} {
    overflow: hidden;
  }

  slot${c}:not(${P}) .nav {
    position: absolute;
    z-index: 1;
  }

  slot${c}:not(${a}) .nav {
    width: inherit;
  }

  slot${c}${v} .nav {
    inset-inline-end: 0;
  }

  slot${c}:not([nav-position]) .nav,
  slot${c}${I} .nav {
    bottom: 0;
  }
`,W=l`
  slot:not(${e}):not(${a}):not([nav-align])
    label:first-child,
  slot:not(${e}):not(${a}):is(${u},
      ${b})
    label:first-child {
    margin-inline-start: auto;
  }

  slot:not(${e}):not(${a}):not([nav-align]) label:last-child,
  slot:not(${e}):not(${a})${u}
    label:last-child {
    margin-inline-end: auto;
  }

  slot:not(${e})${a}:is(${u}, ${b})
    label:first-child {
    margin-block-start: auto;
  }

  slot:not(${e})${a}${u} label:last-child {
    margin-block-end: auto;
  }

  slot${e}:not([nav-align]) .nav,
  slot${e}${u} .nav {
    justify-content: center;
  }

  slot${a}${e}:not([nav-align]) .nav,
  slot${a}${e}${u} .nav {
    align-self: center;
  }

  slot${e}${b} .nav {
    justify-content: end;
    align-self: end;
  }
`,q=l`
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

  slot${y}, slot${v} {
    height: ${g};
  }

  ${D}
  ${T}
  ${V}
  ${W}

  .nav label {
    position: relative;
    scroll-snap-align: start;
    height: ${x};
    width: ${f};
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--oryx-color-canvas-100);
  }

  slot${a} .nav label {
    flex: 0 0 ${x};
  }

  slot:not(${a}) .nav label {
    flex: 0 0 ${f};
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
`,O=l`
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
  slot${I} {
    grid-template-rows: ${g} min-content;
  }

  slot${H} {
    grid-template-rows: min-content ${g};
  }

  slot${y} {
    grid-template-columns: min-content var(--product-images-main-width, 1fr);
  }

  slot${v} {
    grid-template-columns: var(--product-images-main-width, 1fr) min-content;
  }

  slot[without-nav],
  slot${P}, slot${c}, slot${_} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`,R=l`
  ${O}
  ${B}
  ${q}
`;let w=class extends j(){constructor(){super(...arguments),this.product$=new L(this).getProduct().pipe(t=>this.reset(t)),this.options$=new E(this).getOptions().pipe(t=>this.reset(t)),this.active$=new N(0)}static{this.styles=R}render(){return d`
      ${k(S([this.product$,this.options$,this.active$]),([t,o,n])=>{const s=this.resolveImages(t,o);return this.wrap(o,this.renderMain(o,s,n),this.renderNavigation(o,s,n))})}
    `}resolveImages(t,o){return(o.mediaSet?t?.mediaSet?.find(s=>s.name===o.mediaSet):t?.mediaSet?.[0])?.media??[]}wrap(t,o,n){const s=(p,h)=>h?`${p}:${h}${isNaN(h)?"":"px"};`:"";let i="";return i+=s("--product-images-main-height",t.mainImageHeight),i+=s("--product-images-main-width",t.mainImageWidth),i+=s("--product-images-thumb-height",t.thumbHeight),i+=s("--product-images-thumb-width",t.thumbWidth),t.gridItemsPerColumn&&(i+=`--oryx-grid-items-per-column: ${t.gridItemsPerColumn}`),d` <slot
      main-layout=${m(t.mainLayout)}
      nav-position=${m(t.navigationPosition)}
      nav-layout=${m(t.navigationLayout)}
      nav-display=${m(t.navigationDisplay)}
      nav-align=${m(t.navigationAlignment)}
      ?without-nav=${!n.values.length}
      style=${i}
    >
      ${z(t.navigationPosition==="top"||t.navigationPosition==="start",()=>d`${n}${o}`,()=>d`${o}${n}`)}
    </slot>`}renderMain(t,o,n){return t.mainLayout==="none"?d``:d`<section class="preview">
      ${o.map((s,i)=>d`<product-media
          .sku=${this.sku}
          .options=${{mediaIndex:i,containerSize:"detail",alt:`preview${i+1}`,loading:n!==i?"lazy":void 0}}
          ?active=${n===i}
        ></product-media>`)}
    </section>`}renderNavigation(t,o,n){return t.navigationDisplay==="none"||o.length<=1?d``:d` <fieldset class="nav">
      ${o.map((s,i)=>d`
          <label aria-label=${`image ${i}`}>
            <input
              value=${i}
              type="radio"
              name=${m(t.groupName??`product-image-nav-${this.uid}`)}
              ?checked=${i===n}
              @input=${this.onInput}
              @mouseover=${p=>this.onMouseover(p,t)}
            />
            <product-media
              .sku=${this.sku}
              .options=${{mediaIndex:i,containerSize:"thumbnail",loading:n!==i?"lazy":void 0}}
              ?active=${n===i}
            ></product-media>
          </label>
        `)}
    </fieldset>`}onInput(t){const n=t.target.value;this.setActive(+n,"smooth")}onMouseover(t,o){o.navigationMouseEvent==="mouseover"&&t.target.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}setActive(t,o="auto"){t!==void 0&&(this.active$.next(t),this.shadowRoot?.querySelectorAll("input")?.[t]?.toggleAttribute("checked",!0));const n=this.shadowRoot?.querySelectorAll("section product-media")?.[this.active$.getValue()];o==="disable"?n?.parentNode?.scrollTo(0,0):n?.parentNode?.scroll({left:n?.offsetLeft,behavior:o})}reset(t){return t.pipe(A(()=>this.setActive(0,"disable")))}};w=C([M()],w);export{w as ProductImagesComponent};
