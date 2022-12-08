import{c as y,r as p,B as m,l as c,j as x,m as l,y as s,f as b,_ as $,h as v,a7 as g,a8 as C,o as d,t as f}from"./index-74abacf3.js";import{C as S}from"./content.controller-bfcf20c7.js";import{C as E}from"./cart.mixin-62afb22f.js";import"./component.mixin-ae2cf780.js";const U=y`
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
`;var a;let h=(a=class extends E(){constructor(){super(...arguments),this.cartService=p(g),this.productService=p(C),this.contentController=new S(this),this.options$=this.contentController.getOptions(),this.currentlyUpdated$=new m(null),this.loading$=this.cartService.getLoadingState(),this.entries$=this.options$.pipe(c(({cartId:t})=>this.cartService.getEntries({cartId:t}).pipe(c(e=>(e==null?void 0:e.reduce((r,n)=>r.pipe(c(o=>this.productService.get({sku:n.sku}).pipe(l(i=>[...o,{...n,availability:i==null?void 0:i.availability}])))),d([])))??d([])),f(()=>{this.currentlyUpdated$.next(null)})))),this.entriesData$=x([this.entries$,this.loading$,this.currentlyUpdated$,this.options$]).pipe(l(([t,e,r,n])=>({entries:t,loading:e,currentlyUpdated:r,options:n})))}onUpdate(t,{groupKey:e,sku:r}){this.currentlyUpdated$.next(e),this.cartService.updateEntry({groupKey:e,sku:r,quantity:t.detail.quantity}).subscribe()}onRemove({groupKey:t}){this.cartService.deleteEntry({groupKey:t}).subscribe()}renderEmpty(){return s`
      <section>
        <oryx-icon type="cart"></oryx-icon>
        <p>Your shopping cart is empty</p>
        <oryx-button size="large">
          <button>Shop now</button>
        </oryx-button>
      </section>
    `}renderEntries(t){const{entries:e,loading:r,currentlyUpdated:n,options:o}=t;return s`${e.map(i=>s`
        <cart-entry
          ?inert=${r}
          .options=${{...o,...i,disabled:r,updating:i.groupKey===n}}
          @submit=${u=>this.onUpdate(u,i)}
          @oryx.remove=${()=>this.onRemove(i)}
        ></cart-entry>
      `)}`}renderItemsCount(t){const{options:e,entries:r}=t;if(e.hideItemsCount)return s``;const n=r.reduce((o,{quantity:i})=>i+o,0);return s`
      <oryx-chip>${n} ${n===1?"item":"items"}</oryx-chip>
    `}renderCollapsibleContainer(t){const{options:e}=t;return s`
      <oryx-collapsible ?open=${e.expanded}>
        <span slot="header">
          Products in the order ${this.renderItemsCount(t)}
        </span>

        ${this.renderEntries(t)}
      </oryx-collapsible>
    `}render(){return s`
      ${b(this.entriesData$,t=>{const{entries:e,options:r}=t;return e.length?r!=null&&r.collapsible?this.renderCollapsibleContainer(t):this.renderEntries(t):this.renderEmpty()})}
    `}},(()=>{a.styles=U})(),a);h=$([v()],h);export{h as CartEntriesComponent};
