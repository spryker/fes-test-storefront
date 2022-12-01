import{c as u,r as l,B as y,l as c,j as m,m as d,y as o,f as x,_ as b,h as $,a7 as v,a8 as g,o as h,t as C}from"./index.4dee5cd5.js";import{C as f}from"./content.controller.2f1fd9c8.js";import{C as S}from"./cart.mixin.826aab1a.js";import"./component.mixin.d2c5a023.js";const E=u`
  :host,
  oryx-collapsible::part(content) {
    display: flex;
    flex-direction: column;
    gap: var(--oryx-space-4);
  }

  oryx-collapsible::part(content) {
    padding-block: var(--oryx-space-4);
  }

  section {
    --oryx-icon-size: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--oryx-space-4);
    background: var(--oryx-color-canvas-200);
  }

  section p {
    margin-block: 14px 25px;
  }

  [slot='header'] {
    display: flex;
    align-items: center;
  }

  oryx-chip {
    margin-inline-start: var(--oryx-space-2);
  }
`;let p=class extends S(){constructor(){super(...arguments),this.cartService=l(v),this.productService=l(g),this.contentController=new f(this),this.options$=this.contentController.getOptions(),this.currentlyUpdated$=new y(null),this.loading$=this.cartService.getLoadingState(),this.entries$=this.options$.pipe(c(({cartId:t})=>this.cartService.getEntries({cartId:t}).pipe(c(e=>{var r;return(r=e==null?void 0:e.reduce((i,s)=>i.pipe(c(n=>this.productService.get({sku:s.sku}).pipe(d(a=>[...n,{...s,availability:a==null?void 0:a.availability}])))),h([])))!=null?r:h([])}),C(()=>{this.currentlyUpdated$.next(null)})))),this.entriesData$=m([this.entries$,this.loading$,this.currentlyUpdated$,this.options$]).pipe(d(([t,e,r,i])=>({entries:t,loading:e,currentlyUpdated:r,options:i})))}onUpdate(t,{groupKey:e,sku:r}){this.currentlyUpdated$.next(e),this.cartService.updateEntry({groupKey:e,sku:r,quantity:t.detail.quantity}).subscribe()}onRemove({groupKey:t}){this.cartService.deleteEntry({groupKey:t}).subscribe()}renderEmpty(){return o`
      <section>
        <oryx-icon type="cart"></oryx-icon>
        <p>Your shopping cart is empty</p>
        <oryx-button size="large">
          <button>Shop now</button>
        </oryx-button>
      </section>
    `}renderEntries(t){const{entries:e,loading:r,currentlyUpdated:i,options:s}=t;return o`${e.map(n=>o`
        <cart-entry
          ?inert=${r}
          .options=${{...s,...n,disabled:r,updating:n.groupKey===i}}
          @submit=${a=>this.onUpdate(a,n)}
          @oryx.remove=${()=>this.onRemove(n)}
        ></cart-entry>
      `)}`}renderItemsCount(t){const{options:e,entries:r}=t;if(e.hideItemsCount)return o``;const i=r.reduce((s,{quantity:n})=>n+s,0);return o`
      <oryx-chip>${i} ${i===1?"item":"items"}</oryx-chip>
    `}renderCollapsibleContainer(t){const{options:e}=t;return o`
      <oryx-collapsible ?open=${e.expanded}>
        <span slot="header">
          Products in the order ${this.renderItemsCount(t)}
        </span>

        ${this.renderEntries(t)}
      </oryx-collapsible>
    `}render(){return o`
      ${x(this.entriesData$,t=>{const{entries:e,options:r}=t;return e.length?r!=null&&r.collapsible?this.renderCollapsibleContainer(t):this.renderEntries(t):this.renderEmpty()})}
    `}};p.styles=E;p=b([$()],p);export{p as CartEntriesComponent};
