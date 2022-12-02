import{r as s,H as a,I as u,l as n,y as t,f as c,_ as i,g as h,h as p,R as g,M as l,P as m}from"./index.7349b146.js";import{s as b}from"./subscribe.decorator.a0932f99.js";import{C as d}from"./content.controller.bcf90c83.js";import{C as v}from"./component.mixin.6a3f9f94.js";let e=class extends v(){constructor(){super(...arguments),this.routerService=s(g),this.authService=s(l),this.options$=new d(this).getOptions(),this.logoutTrigger$=new a(1),this.logout$=this.logoutTrigger$.pipe(u(this.options$),n(([o,r])=>this.authService.logout().pipe(m(()=>{this.routerService.navigate(r.customRedirect?`/${r.customRedirect}`:"")}))))}render(){return t`
      ${c(this.authService.isAuthenticated(),o=>o?t`
              <oryx-button
                size="small"
                @click=${()=>this.logoutTrigger$.next()}
              >
                <button type="submit">Logout</button>
              </oryx-button>
            `:t``)}
    `}};i([b(),h("design:type",Object)],e.prototype,"logout$",void 0);e=i([p()],e);export{e as AuthLogoutComponent};
