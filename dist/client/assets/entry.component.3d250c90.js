import{B as u,j as g,m,a5 as l,D as d,a1 as v,t as f,y as o,f as s,K as a,_ as C,g as b}from"./index.dab5f70a.js";import{C as y}from"./context.controller.f68f8d28.js";import{s as R}from"./subscribe.decorator.cfb427be.js";import{C as x}from"./content.controller.124d65c4.js";import{C as w}from"./component.mixin.bb013c5d.js";import{R as E}from"./entry.model.f038ce94.js";import{b as O,s as S}from"./oryx.styles.56ee3bf2.js";import"./screen.63347f27.js";class h extends w(){constructor(){super(...arguments),this.context=new y(this),this.options$=new x(this).getOptions(),this.triggerConfirmationRequired$=new u(!1),this.confirmation$=g([this.triggerConfirmationRequired$,this.options$]).pipe(m(([t,e])=>({confirmationRequired:t,entry:e}))),this.triggerShowOptions$=new l,this.showOptions$=d(this.triggerShowOptions$,this.options$.pipe(v(1),m(({defaultExpandedOptions:t})=>!!t))),this.sku$=this.options$.pipe(f(({sku:t})=>{this.context.provide("sku",t)}))}toggleOptions(t){this.triggerShowOptions$.next(t.detail.state)}dispatchRemoveEvent(){this.dispatchEvent(new CustomEvent(E,{bubbles:!0,composed:!0}))}onQuantityChange(t,e){if(t.detail.quantity===0){if(t.stopPropagation(),e){this.dispatchRemoveEvent();return}this.triggerConfirmationRequired$.next(!0)}}onRemove(t){if(t){this.dispatchRemoveEvent(),this.triggerConfirmationRequired$.next(!1);return}this.triggerConfirmationRequired$.next(!0)}onCancelRemoving(){this.triggerConfirmationRequired$.next(!1)}render(){return o`${s(this.options$,t=>{const{hidePreview:e,silentRemove:c,selectedProductOptions:r}=t,$=!!(r!=null&&r.length);return o`
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
      `})}`}}h.styles=[O,S];C([R(),b("design:type",Object)],h.prototype,"sku$",void 0);export{h as CartEntryComponent};
