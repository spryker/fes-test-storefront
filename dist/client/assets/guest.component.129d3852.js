import{r,a8 as s,l as a,y as n,_ as o,g as i,h as c,R as u,a4 as h,t as l}from"./index.65290630.js";import{C as p}from"./checkout.mixin.56be02c5.js";import{s as d}from"./subscribe.decorator.8b58ec29.js";import{C as m}from"./content.controller.53d4125f.js";import{i as g}from"./i18n.directive.8a4e8c6b.js";import"./component.mixin.d9d48422.js";const b="oryx.guest-submit";let t=class extends p(){constructor(){super(...arguments),this.routerService=r(u),this.options$=new m(this).getOptions(),this.handleTrigger$=new s,this.handle$=this.handleTrigger$.pipe(a(()=>this.options$.pipe(h(1),l(e=>{this.dispatchEvent(new CustomEvent(b,{bubbles:!0,composed:!0})),e.url&&this.routerService.navigate(e.url)}))))}handleProceed(){this.handleTrigger$.next()}render(){return n`<oryx-card .header=${g("checkout.guest-checkout")}>
      <slot name="content">
        You can checkout without creating an account. You will have a chance to
        create an account later.
      </slot>

      <oryx-button slot="footer" size="small">
        <button @click=${this.handleProceed}>Checkout as a guest</button>
      </oryx-button>
    </oryx-card>`}};o([d(),i("design:type",Object)],t.prototype,"handle$",void 0);t=o([c()],t);export{t as CheckoutGuestComponent};
