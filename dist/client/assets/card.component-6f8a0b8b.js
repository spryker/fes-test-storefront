import{c as p,t as c,j as s,A as d,y as i,f as h,ao as u,K as r,_ as n,v as l,g as a,h as x}from"./index-4d2c92b7.js";import{C as g}from"./context.controller-abc20265.js";import{O as b,C as f}from"./content.controller-33ee67c3.js";import{s as v}from"./subscribe.decorator-50a973f5.js";import{P as y}from"./product.controller-77c96ee5.js";import{P as m}from"./product.mixin-69145c94.js";import"./component.mixin-6d7092a2.js";const k=p`
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
`;let o=class extends m(){constructor(){super(...arguments),this.hideTitle=!1,this.hidePrice=!1,this.hideRating=!1,this.observe=new b(this),this.context=new g(this),this.options$=new f(this).getOptions().pipe(c(t=>{this.hideTitle=!!t.hideTitle,this.hidePrice=!!t.hidePrice,this.hideRating=!!t.hideRating})),this.product$=new y(this).getProduct(),this.card$=s([this.product$,this.options$]).pipe(c(([t,e])=>{e&&"truncateTitleAfter"in e&&this.style?.setProperty("--oryx-product-card-title-line-clamp",String(e.truncateTitleAfter))})),this.sku$=s([this.options$,this.observe.get("sku")]).pipe(d(([t,e])=>Boolean(t.sku??e)),c(([t,e])=>this.context.provide("sku",t.sku??e)))}static{this.styles=k}preventPropagating(t){t.preventDefault(),t.stopPropagation()}render(){return i`${h(this.card$,([t,e])=>t?i`
            <content-link
              .options="${{type:u.Product,id:t.sku}}"
            >
              <div>
                ${r(!e?.hideLabels,()=>i`<product-labels></product-labels>`)}
                ${r(!e?.hideFavorites,()=>i`
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
                ${r(!e?.hideTitle,()=>i`
                    <product-title
                      .options="${{link:!1}}"
                    ></product-title>
                  `)}

                <div>
                  ${r(!e?.hidePrice,()=>i`<product-price></product-price>`)}
                  ${r(!e?.hideRating,()=>i`
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
          `:i``)}`}};n([l({type:Boolean,reflect:!0,attribute:"hide-title"}),a("design:type",Object)],o.prototype,"hideTitle",void 0);n([l({type:Boolean,reflect:!0,attribute:"hide-price"}),a("design:type",Object)],o.prototype,"hidePrice",void 0);n([l({type:Boolean,reflect:!0,attribute:"hide-rating"}),a("design:type",Object)],o.prototype,"hideRating",void 0);n([v(),a("design:type",Object)],o.prototype,"sku$",void 0);o=n([x()],o);export{o as ProductCardComponent};
