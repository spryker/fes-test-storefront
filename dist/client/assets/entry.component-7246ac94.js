import{B as h,j as u,m as a,a5 as $,D as g,a1 as l,t as d,y as o,f as s,K as r,_ as v,g as f}from"./index-4d2c92b7.js";import{C}from"./context.controller-abc20265.js";import{s as b}from"./subscribe.decorator-50a973f5.js";import{C as y}from"./content.controller-33ee67c3.js";import{C as R}from"./component.mixin-6d7092a2.js";import{R as x}from"./entry.model-4a8f0f7e.js";import{b as w,s as O}from"./oryx.styles-c64f9658.js";import"./screen-c0aae3c9.js";class E extends R(){constructor(){super(...arguments),this.context=new C(this),this.options$=new y(this).getOptions(),this.triggerConfirmationRequired$=new h(!1),this.confirmation$=u([this.triggerConfirmationRequired$,this.options$]).pipe(a(([t,e])=>({confirmationRequired:t,entry:e}))),this.triggerShowOptions$=new $,this.showOptions$=g(this.triggerShowOptions$,this.options$.pipe(l(1),a(({defaultExpandedOptions:t})=>!!t))),this.sku$=this.options$.pipe(d(({sku:t})=>{this.context.provide("sku",t)}))}static{this.styles=[w,O]}toggleOptions(t){this.triggerShowOptions$.next(t.detail.state)}dispatchRemoveEvent(){this.dispatchEvent(new CustomEvent(x,{bubbles:!0,composed:!0}))}onQuantityChange(t,e){if(t.detail.quantity===0){if(t.stopPropagation(),e){this.dispatchRemoveEvent();return}this.triggerConfirmationRequired$.next(!0)}}onRemove(t){if(t){this.dispatchRemoveEvent(),this.triggerConfirmationRequired$.next(!1);return}this.triggerConfirmationRequired$.next(!0)}onCancelRemoving(){this.triggerConfirmationRequired$.next(!1)}render(){return o`${s(this.options$,t=>{const{hidePreview:e,silentRemove:p,selectedProductOptions:c}=t,m=!!c?.length;return o`
        ${s(this.confirmation$,({confirmationRequired:i,entry:n})=>n.readonly?o``:o`${r(i,()=>o`
              <cart-entry-confirmation
                .options=${n}
                @remove=${()=>this.onRemove(n.silentRemove||i)}
                @cancel=${this.onCancelRemoving}
              ></cart-entry-confirmation>
            `,()=>o`
              <oryx-icon-button>
                <button
                  @click=${()=>this.onRemove(n.silentRemove||i)}
                  aria-label="remove"
                >
                  <oryx-icon
                    .type=${n.removeButtonIcon??"close"}
                  ></oryx-icon>
                </button>
              </oryx-icon-button>
            `)}`)}

        <div class="entry">
          ${r(!e,()=>o`
              <product-media
                .options=${{containerSize:"thumbnail"}}
              ></product-media>
            `)}

          <section>
            <cart-entry-content
              .options=${t}
              ?disabled=${s(this.triggerConfirmationRequired$)}
              @submit=${i=>this.onQuantityChange(i,!!p)}
            ></cart-entry-content>

            ${r(m,()=>o`
                  <cart-entry-options
                    .options=${t}
                    ?show-options=${s(this.showOptions$)}
                    @toggle=${this.toggleOptions}
                  ></cart-entry-options>
                `)}
          </section>
        </div>

        <cart-entry-totals .options=${t}></cart-entry-totals>
      `})}`}}v([b(),f("design:type",Object)],E.prototype,"sku$",void 0);export{E as CartEntryComponent};
