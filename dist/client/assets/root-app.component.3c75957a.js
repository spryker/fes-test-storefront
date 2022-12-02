import{s as u,r as i,R as h,S as p,a as m,b as f,i as w,t as l,y as n,c as v,d as y,e as g,f as x,_ as R,h as S,g as b}from"./index.175fafb9.js";import{C as _}from"./context.controller.5c88ce38.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=location.origin||location.protocol+"//"+location.host;class A extends u{constructor(){super(...arguments),this.m=t=>{const s=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||s)return;const e=t.composedPath().find(d=>d.tagName==="A");if(e===void 0||e.target!==""||e.hasAttribute("download")||e.getAttribute("rel")==="external")return;const o=e.href;if(o===""||o.startsWith("mailto:"))return;const r=window.location;e.origin===k&&(t.preventDefault(),o!==r.href&&(window.history.pushState({},"",o),this.goto(e.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class P extends A{constructor(t,s){super(t,s),this.routerService=i(h),this.ssrAwaiter=i(p,null),this.ssrOptions=i(m,{}),this.ssrRendered=!1,this.host=t,this.ssrRendered=!!t.shadowRoot&&!this.ssrOptions.initialNavigation,this.routerService.currentRoute().pipe(this.ssrRendered?f(1):w,l(async e=>{var o;if(e&&e!==""){const r=(o=this.ssrAwaiter)==null?void 0:o.getAwaiter();await this._goto(e),this.routerService.acceptParams(this.params),r==null||r()}})).subscribe()}async _goto(t){var s,e;this.currentPath=(s=window.location)==null?void 0:s.pathname,this.urlSearchParams=Object.fromEntries(new URLSearchParams(decodeURIComponent((e=window.location)==null?void 0:e.search)).entries()),!(this.ssrRendered&&this.host._$needsHydration)&&await super.goto(t)}async goto(t){await this._goto(t),this.routerService.go(t,{queryParams:this.urlSearchParams})}outlet(){return n`<outlet>${super.outlet()}</outlet>`}}const C=v`
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
`;let a=class extends y{constructor(){super(),this.context=new _(this),this.routerService=i(h),this._routes=new P(this,g),this.route$=this.routerService.currentParams().pipe(l(t=>{this.context.provide("sku",t==null?void 0:t.sku)}))}render(){return n` ${x(this.route$,()=>n`<experience-composition uid="header"></experience-composition>
          ${this._routes.outlet()}
          <experience-composition uid="footer"></experience-composition>`)}`}};a.styles=C;a=R([S(),b("design:paramtypes",[])],a);export{a as RootAppComponent};
