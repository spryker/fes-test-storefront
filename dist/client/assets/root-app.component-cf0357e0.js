import{s as p,r as n,R as h,S as m,a as f,b as w,i as v,t as l,y as a,c as y,d as g,e as x,f as R,_ as S,h as b,g as _}from"./index-74abacf3.js";import{C as k}from"./context.controller-7e0d2701.js";const P=location.origin||location.protocol+"//"+location.host;class A extends p{constructor(){super(...arguments),this.m=t=>{const s=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||s)return;const e=t.composedPath().find(u=>u.tagName==="A");if(e===void 0||e.target!==""||e.hasAttribute("download")||e.getAttribute("rel")==="external")return;const o=e.href;if(o===""||o.startsWith("mailto:"))return;const r=window.location;e.origin===P&&(t.preventDefault(),o!==r.href&&(window.history.pushState({},"",o),this.goto(e.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class $ extends A{constructor(t,s){super(t,s),this.routerService=n(h),this.ssrAwaiter=n(m,null),this.ssrOptions=n(f,{}),this.ssrRendered=!1,this.host=t,this.ssrRendered=!!t.shadowRoot&&!this.ssrOptions.initialNavigation,this.routerService.currentRoute().pipe(this.ssrRendered?w(1):v,l(async e=>{var o;if(e&&e!==""){const r=(o=this.ssrAwaiter)==null?void 0:o.getAwaiter();await this._goto(e),this.routerService.acceptParams(this.params),r==null||r()}})).subscribe()}async _goto(t){var s,e;this.currentPath=(s=window.location)==null?void 0:s.pathname,this.urlSearchParams=Object.fromEntries(new URLSearchParams(decodeURIComponent((e=window.location)==null?void 0:e.search)).entries()),!(this.ssrRendered&&this.host._$needsHydration)&&await super.goto(t)}async goto(t){await this._goto(t),this.routerService.go(t,{queryParams:this.urlSearchParams})}outlet(){return a`<outlet>${super.outlet()}</outlet>`}}const C=y`
  :host {
    display: block;
    font-family: var(--oryx-font);
    font-size: var(--oryx-font-size-base);
    font-weight: var(--oryx-font-weight-medium);
    letter-spacing: 0.005em;
    color: var(--oryx-color-ink);
    background-color: var(--oryx-color-canvas-100);
  }

  @media (max-width: 767px) {
    :host {
      --oryx-font-size-base: 16px;
      --oryx-font-weight-medium: 600;
    }
  }

  ::placeholder {
    color: var(--oryx-color-placeholder);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav .products {
    display: flex;
    justify-content: right;
    align-items: center;
    flex: 1;
    font-size: 0.8em;
  }

  nav .link {
    margin: 0 12px;
    color: var(--oryx-color-canvas-100, #ffffff);
  }
`;var i;let c=(i=class extends g{constructor(){super(),this.context=new k(this),this.routerService=n(h),this._routes=new $(this,x),this.route$=this.routerService.currentParams().pipe(l(t=>{this.context.provide("sku",t==null?void 0:t.sku)}))}render(){return a` ${R(this.route$,()=>a`<experience-composition uid="header"></experience-composition>
          ${this._routes.outlet()}
          <experience-composition uid="footer"></experience-composition>`)}`}},(()=>{i.styles=C})(),i);c=S([b(),_("design:paramtypes",[])],c);export{c as RootAppComponent};
