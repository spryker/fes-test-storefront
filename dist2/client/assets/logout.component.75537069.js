import{r as s,H as a,I as u,l as n,y as t,f as c,_ as i,g as h,h as p,R as g,M as l,P as m}from"./index.53aa1d0b.js";import{s as b}from"./subscribe.decorator.ff42e007.js";import{C as d}from"./content.controller.9d78db3a.js";import{C as v}from"./component.mixin.c08d8cd0.js";let e=class extends v(){constructor(){super(...arguments),this.routerService=s(g),this.authService=s(l),this.options$=new d(this).getOptions(),this.logoutTrigger$=new a(1),this.logout$=this.logoutTrigger$.pipe(u(this.options$),n(([o,r])=>this.authService.logout().pipe(m(()=>{this.routerService.navigate(r.customRedirect?`/${r.customRedirect}`:"")}))))}render(){return t`
      ${c(this.authService.isAuthenticated(),o=>o?t`
              <oryx-button
                size="small"
                @click=${()=>this.logoutTrigger$.next()}
              >
                <button type="submit">Logout</button>
              </oryx-button>
            `:t``)}
    `}};i([b(),h("design:type",Object)],e.prototype,"logout$",void 0);e=i([p()],e);export{e as AuthLogoutComponent};
