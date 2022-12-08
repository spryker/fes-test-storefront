import{r as s,K as a,M as u,l as n,y as t,f as c,_ as i,g as h,h as p,R as g,P as l,U as m}from"./index.65290630.js";import{s as b}from"./subscribe.decorator.8b58ec29.js";import{C as d}from"./content.controller.53d4125f.js";import{C as v}from"./component.mixin.d9d48422.js";let e=class extends v(){constructor(){super(...arguments),this.routerService=s(g),this.authService=s(l),this.options$=new d(this).getOptions(),this.logoutTrigger$=new a(1),this.logout$=this.logoutTrigger$.pipe(u(this.options$),n(([o,r])=>this.authService.logout().pipe(m(()=>{this.routerService.navigate(r.customRedirect?`/${r.customRedirect}`:"")}))))}render(){return t`
      ${c(this.authService.isAuthenticated(),o=>o?t`
              <oryx-button
                size="small"
                @click=${()=>this.logoutTrigger$.next()}
              >
                <button type="submit">Logout</button>
              </oryx-button>
            `:t``)}
    `}};i([b(),h("design:type",Object)],e.prototype,"logout$",void 0);e=i([p()],e);export{e as AuthLogoutComponent};
