import{c as h,t as l,j as p,A as u,y as i,f as x,ao as g,K as o,_ as n,v as s,g as c,h as b}from"./index-41c5945f.js";import{C as f}from"./context.controller-8c8608f3.js";import{O as v,C as y}from"./content.controller-bfde8771.js";import{s as m}from"./subscribe.decorator-b8b77f67.js";import{P as k}from"./product.controller-987132f0.js";import{P as w}from"./product.mixin-b8d036c1.js";import"./component.mixin-da8e468a.js";const $=h`
  :host {
    --line-clamp: var(--oryx-product-card-title-line-clamp, 1);

    transition: all var(--oryx-transition-time);
    background-color: var(--oryx-color-canvas-100);
    min-height: calc(
      408px -
        calc(
          var(--_title-offset, 0px) +
            calc(var(--_price-offset, 0px) + var(--_rating-offset, 0px))
        )
    );
    box-sizing: border-box;
    border: var(--oryx-border-thin) solid var(--oryx-color-canvas-200);
    box-shadow: var(--oryx-elevation-0) var(--oryx-elevation-color-2);
  }

  :host(:is(:hover, :focus-within)) {
    --line-clamp: 0;

    z-index: 1;
    box-shadow: var(--oryx-elevation-1) var(--oryx-elevation-color-2);
    border-color: var(--oryx-color-canvas-500);
  }

  :host(:is(:hover, :focus-within)) product-title {
    white-space: normal;
  }

  :host([hide-title]) {
    --_title-offset: 24px;
  }

  :host([hide-price]) {
    --_price-offset: 34px;
  }

  :host([hide-rating]) {
    --_rating-offset: 24px;
  }

  :host,
  content-link,
  content-link::part(wrapper),
  content-link::part(link) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  content-link,
  content-link::part(wrapper),
  content-link::part(link) {
    width: 100%;
  }

  :host,
  content-link {
    border-radius: var(--oryx-border-radius-small);
  }

  content-link {
    position: relative;
    color: #333;
    text-decoration: none;
    overflow: hidden;
  }

  content-link::part(link) {
    justify-content: flex-end;
    padding: 0;
    border-radius: 0;
    border: none;
    background-color: transparent;
  }

  content-link > div {
    display: flex;
    align-items: flex-start;
    padding-inline: 16px;
    padding-block: 8px;
    justify-content: space-between;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 250px;
    box-sizing: border-box;
  }

  product-labels,
  oryx-icon-button {
    position: relative;
    z-index: 1;
  }

  oryx-icon-button:first-child {
    margin-inline-start: auto;
  }

  product-labels {
    flex-wrap: wrap;
  }

  button {
    padding: 6px;
    background-color: var(--oryx-color-canvas-100);
  }

  oryx-icon {
    --oryx-icon-size: 24px;

    color: var(--oryx-color-ink);
  }

  product-media {
    max-height: auto;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
  }

  product-media::part(fallback) {
    --oryx-icon-size: 100px;

    background: transparent;
  }

  section {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--oryx-color-canvas-100);
    padding-inline: 16px;
    padding-block: 12px 16px;
    min-height: calc(
      156px -
        calc(
          var(--_title-offset, 0px) +
            calc(var(--_price-offset, 0px) + var(--_rating-offset, 0px))
        )
    );
    position: relative;
  }

  product-title,
  section > div > :not(:last-child) {
    margin-bottom: 8px;
  }

  product-price {
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    gap: 4px;
    align-items: center;
  }

  product-price::part(default-original) {
    color: var(--oryx-color-ink);
  }

  product-price::part(original) {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    color: #4c4c4c;
    text-decoration: line-through;
  }

  product-price::part(original)::before {
    display: none;
  }

  product-average-rating {
    --oryx-icon-size: 12px;

    display: block;
  }

  product-title {
    color: var(--oryx-color-ink);
    font-size: 12px;
    line-height: 16px;
    margin-block-end: auto;
    white-space: normal;
  }

  section > div:only-child {
    margin-block-start: auto;
  }
`;var a;let r=(a=class extends w(){constructor(){super(...arguments),this.hideTitle=!1,this.hidePrice=!1,this.hideRating=!1,this.observe=new v(this),this.context=new f(this),this.options$=new y(this).getOptions().pipe(l(e=>{this.hideTitle=!!e.hideTitle,this.hidePrice=!!e.hidePrice,this.hideRating=!!e.hideRating})),this.product$=new k(this).getProduct(),this.card$=p([this.product$,this.options$]).pipe(l(([e,t])=>{var d;t&&"truncateTitleAfter"in t&&((d=this.style)==null||d.setProperty("--oryx-product-card-title-line-clamp",String(t.truncateTitleAfter)))})),this.sku$=p([this.options$,this.observe.get("sku")]).pipe(u(([e,t])=>Boolean(e.sku??t)),l(([e,t])=>this.context.provide("sku",e.sku??t)))}preventPropagating(e){e.preventDefault(),e.stopPropagation()}render(){return i`${x(this.card$,([e,t])=>e?i`
            <content-link
              .options="${{type:g.Product,id:e.sku}}"
            >
              <div>
                ${o(!(t!=null&&t.hideLabels),()=>i`<product-labels></product-labels>`)}
                ${o(!(t!=null&&t.hideFavorites),()=>i`
                    <oryx-icon-button>
                      <button
                        tabindex="-1"
                        aria-label="add-to-favorites"
                        @click=${this.preventPropagating}
                      >
                        <oryx-icon type="wishlist"></oryx-icon>
                      </button>
                    </oryx-icon-button>
                  `)}

                <product-media
                  .options=${{containerSize:"thumbnail"}}
                ></product-media>
              </div>

              <section>
                ${o(!(t!=null&&t.hideTitle),()=>i`
                    <product-title
                      .options="${{link:!1}}"
                    ></product-title>
                  `)}

                <div>
                  ${o(!(t!=null&&t.hidePrice),()=>i`<product-price></product-price>`)}
                  ${o(!(t!=null&&t.hideRating),()=>i`
                      <product-average-rating
                        .options=${{size:"small"}}
                      ></product-average-rating>
                    `)}

                  <oryx-cart-add
                    tabindex="-1"
                    .options="${{outlined:!0,hideQuantityInput:!0}}"
                    @click=${this.preventPropagating}
                  ></oryx-cart-add>
                </div>
              </section>
            </content-link>
          `:i``)}`}},(()=>{a.styles=$})(),a);n([s({type:Boolean,reflect:!0,attribute:"hide-title"}),c("design:type",Object)],r.prototype,"hideTitle",void 0);n([s({type:Boolean,reflect:!0,attribute:"hide-price"}),c("design:type",Object)],r.prototype,"hidePrice",void 0);n([s({type:Boolean,reflect:!0,attribute:"hide-rating"}),c("design:type",Object)],r.prototype,"hideRating",void 0);n([m(),c("design:type",Object)],r.prototype,"sku$",void 0);r=n([b()],r);export{r as ProductCardComponent};
