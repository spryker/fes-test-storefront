import{s as u,r as s,R as c,S as p,a as m,b as f,i as w,t as h,y as i,c as v,d as y,e as g,f as x,_ as R,h as S,g as b}from"./index-4d2c92b7.js";import{C as _}from"./context.controller-abc20265.js";const k=location.origin||location.protocol+"//"+location.host;class A extends u{constructor(){super(...arguments),this.m=t=>{const r=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||r)return;const e=t.composedPath().find(d=>d.tagName==="A");if(e===void 0||e.target!==""||e.hasAttribute("download")||e.getAttribute("rel")==="external")return;const o=e.href;if(o===""||o.startsWith("mailto:"))return;const l=window.location;e.origin===k&&(t.preventDefault(),o!==l.href&&(window.history.pushState({},"",o),this.goto(e.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class P extends A{constructor(t,r){super(t,r),this.routerService=s(c),this.ssrAwaiter=s(p,null),this.ssrOptions=s(m,{}),this.ssrRendered=!1,this.host=t,this.ssrRendered=!!t.shadowRoot&&!this.ssrOptions.initialNavigation,this.routerService.currentRoute().pipe(this.ssrRendered?f(1):w,h(async e=>{if(e&&e!==""){const o=this.ssrAwaiter?.getAwaiter();await this._goto(e),this.routerService.acceptParams(this.params),o?.()}})).subscribe()}async _goto(t){this.currentPath=window.location?.pathname,this.urlSearchParams=Object.fromEntries(new URLSearchParams(decodeURIComponent(window.location?.search)).entries()),!(this.ssrRendered&&this.host._$needsHydration)&&await super.goto(t)}async goto(t){await this._goto(t),this.routerService.go(t,{queryParams:this.urlSearchParams})}outlet(){return i`<outlet>${super.outlet()}</outlet>`}}const C=v`
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
`;let a=class extends y{constructor(){super(),this.context=new _(this),this.routerService=s(c),this._routes=new P(this,g),this.route$=this.routerService.currentParams().pipe(h(t=>{this.context.provide("sku",t?.sku)}))}static{this.styles=C}render(){return i` ${x(this.route$,()=>i`<experience-composition uid="header"></experience-composition>
          ${this._routes.outlet()}
          <experience-composition uid="footer"></experience-composition>`)}`}};a=R([S(),b("design:paramtypes",[])],a);export{a as RootAppComponent};
