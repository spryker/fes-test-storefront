import{c as m,r as n,B as h,j as c,H as p,t as a,l,I as d,y as s,f as y,J as g,K as x,_ as u,g as $,h as b,R as f,M as w,N as v,E as S,o as i}from"./index-4d2c92b7.js";import{s as C}from"./subscribe.decorator-50a973f5.js";import{C as L}from"./content.controller-33ee67c3.js";import{C as R}from"./component.mixin-6d7092a2.js";const j=m`
  oryx-card form > * {
    margin: 10px 0;
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let o=class extends R(){constructor(){super(...arguments),this.contentController=new L(this),this.routerService=n(f),this.authService=n(w),this.options$=this.contentController.getOptions(),this.success$=new h(!0),this.loading$=new h(!1),this.data$=c([this.options$,this.loading$,this.success$]),this.authTrigger$=new p(1),this.auth$=this.authTrigger$.pipe(a(()=>this.loading$.next(!0)),l(e=>this.authService.login({username:e.email,password:e.password,remember:e.rememberme}).pipe(v(r=>(this.success$.next(!1),this.loading$.next(!1),S)))),d(this.options$),l(([e,r])=>e?r.disableRedirect?i(void 0):r.url?(this.routerService.navigate(r.url),i(void 0)):this.routerService.previousRoute().pipe(a(t=>{if(t){this.routerService.navigate(t);return}this.routerService.navigate("/")})):(this.success$.next(e),i(void 0))),a({next:()=>this.success$.next(!0),complete:()=>this.loading$.next(!1)}))}static{this.styles=j}handleLogin(e){e.preventDefault();const r=e.target,t=new FormData(r);this.authTrigger$.next({email:t.get("email"),password:t.get("password"),rememberme:!!t.get("rememberme")})}render(){return s`${y(this.data$,([e,r,t])=>s`<oryx-card>
      <h1 slot="header">
        ${e?.title??"Access your account"}
      </h1>
      ${t?"":s`<oryx-notification type="error">
              The email or/and password entered is not valid. Please try again.
            </oryx-notification>`}
      <form @submit=${this.handleLogin} method="post">
        <oryx-input label="Email *" ?haserror="${!t}"><input type="email" name="email" placeholder="Email" required/></oryx-input>
        <oryx-password-input ?haserror="${!t}" label="Password *" strategy="${g(e.strategy)}"/><input type="password" name="password" placeholder="Password" required/></oryx-password-input>
        <div class="options">
          ${x(e.showRememberMe,()=>s` <oryx-checkbox>
              <input type="checkbox" name="rememberme" />
              Remember me
            </oryx-checkbox>`,()=>s`<span></span>`)}
          <oryx-link><a href="#">Forgot Password?</a></oryx-link>
        </div>
        <oryx-button size="small"><button type="submit" ?disabled=${r}>Login</button></oryx-button>
      </form>
    </oryx-card>`)}`}};u([C(),$("design:type",Object)],o.prototype,"auth$",void 0);o=u([b()],o);export{o as AuthLoginComponent};
