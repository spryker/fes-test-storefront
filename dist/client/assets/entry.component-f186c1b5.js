import{B as u,j as g,m,a5 as l,D as d,a1 as v,t as f,y as i,f as n,K as a,_ as b,g as R}from"./index-74abacf3.js";import{C as y}from"./context.controller-7e0d2701.js";import{s as C}from"./subscribe.decorator-f722d0fb.js";import{C as x}from"./content.controller-bfcf20c7.js";import{C as w}from"./component.mixin-ae2cf780.js";import{R as O}from"./entry.model-4a8f0f7e.js";import{b as E,s as S}from"./oryx.styles-f778c121.js";import"./screen-c0aae3c9.js";const h=class extends w(){constructor(){super(...arguments),this.context=new y(this),this.options$=new x(this).getOptions(),this.triggerConfirmationRequired$=new u(!1),this.confirmation$=g([this.triggerConfirmationRequired$,this.options$]).pipe(m(([t,o])=>({confirmationRequired:t,entry:o}))),this.triggerShowOptions$=new l,this.showOptions$=d(this.triggerShowOptions$,this.options$.pipe(v(1),m(({defaultExpandedOptions:t})=>!!t))),this.sku$=this.options$.pipe(f(({sku:t})=>{this.context.provide("sku",t)}))}toggleOptions(t){this.triggerShowOptions$.next(t.detail.state)}dispatchRemoveEvent(){this.dispatchEvent(new CustomEvent(O,{bubbles:!0,composed:!0}))}onQuantityChange(t,o){if(t.detail.quantity===0){if(t.stopPropagation(),o){this.dispatchRemoveEvent();return}this.triggerConfirmationRequired$.next(!0)}}onRemove(t){if(t){this.dispatchRemoveEvent(),this.triggerConfirmationRequired$.next(!1);return}this.triggerConfirmationRequired$.next(!0)}onCancelRemoving(){this.triggerConfirmationRequired$.next(!1)}render(){return i`${n(this.options$,t=>{const{hidePreview:o,silentRemove:c,selectedProductOptions:r}=t,$=!!(r!=null&&r.length);return i`
        ${n(this.confirmation$,({confirmationRequired:e,entry:s})=>s.readonly?i``:i`${a(e,()=>i`
              <cart-entry-confirmation
                .options=${s}
                @remove=${()=>this.onRemove(s.silentRemove||e)}
                @cancel=${this.onCancelRemoving}
              ></cart-entry-confirmation>
            `,()=>i`
              <oryx-icon-button>
                <button
                  @click=${()=>this.onRemove(s.silentRemove||e)}
                  aria-label="remove"
                >
                  <oryx-icon
                    .type=${s.removeButtonIcon??"close"}
                  ></oryx-icon>
                </button>
              </oryx-icon-button>
            `)}`)}

        <div class="entry">
          ${a(!o,()=>i`
              <product-media
                .options=${{containerSize:"thumbnail"}}
              ></product-media>
            `)}

          <section>
            <cart-entry-content
              .options=${t}
              ?disabled=${n(this.triggerConfirmationRequired$)}
              @submit=${e=>this.onQuantityChange(e,!!c)}
            ></cart-entry-content>

            ${a($,()=>i`
                  <cart-entry-options
                    .options=${t}
                    ?show-options=${n(this.showOptions$)}
                    @toggle=${this.toggleOptions}
                  ></cart-entry-options>
                `)}
          </section>
        </div>

        <cart-entry-totals .options=${t}></cart-entry-totals>
      `})}`}};let p=h;(()=>{h.styles=[E,S]})();b([C(),R("design:type",Object)],p.prototype,"sku$",void 0);export{p as CartEntryComponent};
