import{B as u,j as g,m,a8 as l,H as d,a4 as v,t as f,y as o,f as s,O as a,_ as C,g as b}from"./index.65290630.js";import{C as y}from"./context.controller.86df9e5b.js";import{s as R}from"./subscribe.decorator.8b58ec29.js";import{C as x}from"./content.controller.53d4125f.js";import{C as w}from"./component.mixin.d9d48422.js";import{R as O}from"./entry.model.f038ce94.js";import{b as E,s as S}from"./oryx.styles.dac5f748.js";class h extends w(){constructor(){super(...arguments),this.context=new y(this),this.options$=new x(this).getOptions(),this.triggerConfirmationRequired$=new u(!1),this.confirmation$=g([this.triggerConfirmationRequired$,this.options$]).pipe(m(([t,e])=>({confirmationRequired:t,entry:e}))),this.triggerShowOptions$=new l,this.showOptions$=d(this.triggerShowOptions$,this.options$.pipe(v(1),m(({defaultExpandedOptions:t})=>!!t))),this.sku$=this.options$.pipe(f(({sku:t})=>{this.context.provide("sku",t)}))}toggleOptions(t){this.triggerShowOptions$.next(t.detail.state)}dispatchRemoveEvent(){this.dispatchEvent(new CustomEvent(O,{bubbles:!0,composed:!0}))}onQuantityChange(t,e){if(t.detail.quantity===0){if(t.stopPropagation(),e){this.dispatchRemoveEvent();return}this.triggerConfirmationRequired$.next(!0)}}onRemove(t){if(t){this.dispatchRemoveEvent(),this.triggerConfirmationRequired$.next(!1);return}this.triggerConfirmationRequired$.next(!0)}onCancelRemoving(){this.triggerConfirmationRequired$.next(!1)}render(){return o`${s(this.options$,t=>{const{hidePreview:e,silentRemove:c,selectedProductOptions:r}=t,$=!!(r!=null&&r.length);return o`
        ${s(this.confirmation$,({confirmationRequired:i,entry:n})=>n.readonly?o``:o`${a(i,()=>o`
              <cart-entry-confirmation
                .options=${n}
                @remove=${()=>this.onRemove(n.silentRemove||i)}
                @cancel=${this.onCancelRemoving}
              ></cart-entry-confirmation>
            `,()=>{var p;return o`
              <oryx-icon-button>
                <button
                  @click=${()=>this.onRemove(n.silentRemove||i)}
                  aria-label="remove"
                >
                  <oryx-icon
                    .type=${(p=n.removeButtonIcon)!=null?p:"close"}
                  ></oryx-icon>
                </button>
              </oryx-icon-button>
            `})}`)}

        <div class="entry">
          ${a(!e,()=>o`
              <product-media
                .options=${{containerSize:"thumbnail"}}
              ></product-media>
            `)}

          <section>
            <cart-entry-content
              .options=${t}
              ?disabled=${s(this.triggerConfirmationRequired$)}
              @submit=${i=>this.onQuantityChange(i,!!c)}
            ></cart-entry-content>

            ${a($,()=>o`
                  <cart-entry-options
                    .options=${t}
                    ?show-options=${s(this.showOptions$)}
                    @toggle=${this.toggleOptions}
                  ></cart-entry-options>
                `)}
          </section>
        </div>

        <cart-entry-totals .options=${t}></cart-entry-totals>
      `})}`}}h.styles=[E,S];C([R(),b("design:type",Object)],h.prototype,"sku$",void 0);export{h as CartEntryComponent};
