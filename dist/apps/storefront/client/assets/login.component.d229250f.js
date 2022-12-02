import{c,r as h,B as l,j as d,H as p,t as i,l as u,I as y,y as s,f as g,J as x,K as $,_ as m,g as b,h as f,R as w,M as v,N as S,E as C,o}from"./index.53aa1d0b.js";import{s as L}from"./subscribe.decorator.ff42e007.js";import{C as R}from"./content.controller.9d78db3a.js";import{C as j}from"./component.mixin.c08d8cd0.js";const k=c`
  oryx-card form > * {
    margin: 10px 0;
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let a=class extends j(){constructor(){super(...arguments),this.contentController=new R(this),this.routerService=h(w),this.authService=h(v),this.options$=this.contentController.getOptions(),this.success$=new l(!0),this.loading$=new l(!1),this.data$=d([this.options$,this.loading$,this.success$]),this.authTrigger$=new p(1),this.auth$=this.authTrigger$.pipe(i(()=>this.loading$.next(!0)),u(e=>this.authService.login({username:e.email,password:e.password,remember:e.rememberme}).pipe(S(r=>(this.success$.next(!1),this.loading$.next(!1),C)))),y(this.options$),u(([e,r])=>e?r.disableRedirect?o(void 0):r.url?(this.routerService.navigate(r.url),o(void 0)):this.routerService.previousRoute().pipe(i(t=>{if(t){this.routerService.navigate(t);return}this.routerService.navigate("/")})):(this.success$.next(e),o(void 0))),i({next:()=>this.success$.next(!0),complete:()=>this.loading$.next(!1)}))}handleLogin(e){e.preventDefault();const r=e.target,t=new FormData(r);this.authTrigger$.next({email:t.get("email"),password:t.get("password"),rememberme:!!t.get("rememberme")})}render(){return s`${g(this.data$,([e,r,t])=>{var n;return s`<oryx-card>
      <h1 slot="header">
        ${(n=e==null?void 0:e.title)!=null?n:"Access your account"}
      </h1>
      ${t?"":s`<oryx-notification type="error">
              The email or/and password entered is not valid. Please try again.
            </oryx-notification>`}
      <form @submit=${this.handleLogin} method="post">
        <oryx-input label="Email *" ?haserror="${!t}"><input type="email" name="email" placeholder="Email" required/></oryx-input>
        <oryx-password-input ?haserror="${!t}" label="Password *" strategy="${x(e.strategy)}"/><input type="password" name="password" placeholder="Password" required/></oryx-password-input>
        <div class="options">
          ${$(e.showRememberMe,()=>s` <oryx-checkbox>
              <input type="checkbox" name="rememberme" />
              Remember me
            </oryx-checkbox>`,()=>s`<span></span>`)}
          <oryx-link><a href="#">Forgot Password?</a></oryx-link>
        </div>
        <oryx-button size="small"><button type="submit" ?disabled=${r}>Login</button></oryx-button>
      </form>
    </oryx-card>`})}`}};a.styles=k;m([L(),b("design:type",Object)],a.prototype,"auth$",void 0);a=m([f()],a);export{a as AuthLoginComponent};
