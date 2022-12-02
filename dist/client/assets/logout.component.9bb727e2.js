import{r as s,H as a,I as u,l as n,y as t,f as c,_ as i,g as h,h as p,R as g,M as l,P as m}from"./index.dab5f70a.js";import{s as b}from"./subscribe.decorator.cfb427be.js";import{C as d}from"./content.controller.124d65c4.js";import{C as v}from"./component.mixin.bb013c5d.js";let e=class extends v(){constructor(){super(...arguments),this.routerService=s(g),this.authService=s(l),this.options$=new d(this).getOptions(),this.logoutTrigger$=new a(1),this.logout$=this.logoutTrigger$.pipe(u(this.options$),n(([o,r])=>this.authService.logout().pipe(m(()=>{this.routerService.navigate(r.customRedirect?`/${r.customRedirect}`:"")}))))}render(){return t`
      ${c(this.authService.isAuthenticated(),o=>o?t`
              <oryx-button
                size="small"
                @click=${()=>this.logoutTrigger$.next()}
              >
                <button type="submit">Logout</button>
              </oryx-button>
            `:t``)}
    `}};i([b(),h("design:type",Object)],e.prototype,"logout$",void 0);e=i([p()],e);export{e as AuthLogoutComponent};
