import{r,a5 as s,l as a,y as n,_ as o,g as i,h as c,R as u,a1 as h,t as l}from"./index-41c5945f.js";import{C as p}from"./checkout.mixin-1591b8fb.js";import{s as d}from"./subscribe.decorator-b8b77f67.js";import{C as m}from"./content.controller-bfde8771.js";import"./component.mixin-da8e468a.js";const g="oryx.guest-submit";let t=class extends p(){constructor(){super(...arguments),this.routerService=r(u),this.options$=new m(this).getOptions(),this.handleTrigger$=new s,this.handle$=this.handleTrigger$.pipe(a(()=>this.options$.pipe(h(1),l(e=>{this.dispatchEvent(new CustomEvent(g,{bubbles:!0,composed:!0})),e.url&&this.routerService.navigate(e.url)}))))}handleProceed(){this.handleTrigger$.next()}render(){return n`<oryx-card>
      <h2 slot="header">Guest checkout</h2>

      <slot name="content">
        You can checkout without creating an account. You will have a chance to
        create an account later.
      </slot>

      <oryx-button slot="footer" size="small">
        <button @click=${this.handleProceed}>Checkout as a guest</button>
      </oryx-button>
    </oryx-card>`}};o([d(),i("design:type",Object)],t.prototype,"handle$",void 0);t=o([c()],t);export{t as CheckoutGuestComponent};
