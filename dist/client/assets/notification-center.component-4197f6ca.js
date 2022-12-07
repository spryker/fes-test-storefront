import{c as d,z as o,U as u,d as m,y as l,J as p,K as T,q as g,_ as y,v as f,g as h}from"./index-4d2c92b7.js";import{t as b}from"./state-464c8ba0.js";var e;(function(s){s.TOP_START="top-start",s.TOP_END="top-end",s.BOTTOM_START="bottom-start",s.BOTTOM_END="bottom-end"})(e||(e={}));const x=d`
  :host {
    display: flex;
    flex-direction: column;
  }

  :host([position]) {
    position: fixed;
    z-index: var(--oryx-notification-z-index, 1001);
    max-width: 470px;
    width: 100%;
  }

  :host([position='${o(e.TOP_START)}']),
  :host([position='${o(e.TOP_END)}']) {
    flex-direction: column-reverse;
  }

  :host([position='${o(e.TOP_START)}']) {
    top: 40px;
    inset-inline-start: 30px;
  }

  :host([position='${o(e.TOP_END)}']) {
    top: 40px;
    inset-inline-end: 30px;
  }

  :host([position='${o(e.BOTTOM_START)}']) {
    bottom: 40px;
    inset-inline-start: 30px;
  }

  :host([position='${o(e.BOTTOM_END)}']) {
    bottom: 40px;
    inset-inline-end: 30px;
  }

  /* TODO: refactor with theme BP's */
  @media (max-width: 530px) {
    :host([position='${o(e.TOP_END)}']),
    :host([position='${o(e.TOP_START)}']),
    :host([position='${o(e.BOTTOM_START)}']),
    :host([position='${o(e.BOTTOM_END)}']) {
      max-width: calc(100% - 60px);
    }
  }

  :host > * {
    margin-bottom: 10px;
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--oryx-transition-time-long);
  }

  :host([position='${o(e.BOTTOM_START)}']) :last-child,
  :host([position='${o(e.BOTTOM_END)}']) :last-child {
    margin-bottom: 0;
  }

  :host > [visible] {
    opacity: 1;
    transition-duration: var(--oryx-transition-time-medium);
  }
`,_=s=>String(Number(s.filter(({key:t})=>!!t).sort((t,i)=>Number(i.key)-Number(t.key))[0]?.key||Date.now())+1);class C{constructor(t){this.host=t,this._registry=[],this._delayedCallbacks={},this.host.addController(this)}set registry(t){const i=t.map(r=>{if(!r.key){const n=_(this.registry),a={...O,...r};return a.autoClose&&(this._delayedCallbacks[n]=setTimeout(()=>{this.toggleVisibility(n)},a.autoCloseTime)),{...a,key:n,visible:!1}}return r});this._registry=i,this.host.requestUpdate()}get registry(){return this._registry}preventAutoClose(t){if(this.notificationIsVisible(t)){clearTimeout(this._delayedCallbacks[t]);return}this.toggleVisibility(t)}handleNotificationClose(t){this.removeFromRegistry(t,!0)}handleTransitionEnd(t){this.notificationIsVisible(t)||this.removeFromRegistry(t)}removeFromRegistry(t,i=!1){i&&this.preventAutoClose(t),this.registry=this.registry.filter(({key:r})=>t!==r)}toggleVisibility(t){this.registry=this.registry.map(i=>i.key===t?{...i,visible:!i.visible,_mounted:!0}:i)}notificationIsVisible(t){return Boolean(this.registry.find(({key:i})=>i===t)?.visible)}ensureNotificationMountedState(){this.registry.some(({key:t,_mounted:i})=>t&&!i)&&setTimeout(()=>{this.registry=this.registry.map(t=>({...t,visible:!0,_mounted:!0}))},0)}hostUpdated(){this.ensureNotificationMountedState()}}const O={scheme:u.LIGHT,autoClose:!0,autoCloseTime:4e3,closable:!0,floating:!0};class c extends m{constructor(){super(...arguments),this.registryController=new C(this)}static{this.styles=[x]}get registry(){return this.registryController.registry}open(t){return this.registryController.registry=[...this.registryController.registry,t],this.registry[this.registry.length-1].key}close(t){this.registryController.handleNotificationClose(t)}renderNotification(t){return l`
      <oryx-notification
        type=${p(t.type)}
        scheme=${p(t.scheme)}
        ?closable=${t.closable}
        ?floating=${t.floating}
        ?visible=${t.visible}
        @oryx.close=${()=>this.registryController.handleNotificationClose(t.key)}
        @mouseenter=${()=>this.registryController.preventAutoClose(t.key)}
        @transitionend=${()=>this.registryController.handleTransitionEnd(t.key)}
      >
        ${t.content}
        ${T(t.subtext,()=>l`<span slot="subtext">${t.subtext}</span>`)}
      </oryx-notification>
    `}render(){return l`
      ${g(this.registry,({key:t})=>t,t=>this.renderNotification(t))}
    `}}y([f({reflect:!0}),h("design:type",String)],c.prototype,"position",void 0);y([b(),h("design:type",Array),h("design:paramtypes",[])],c.prototype,"registry",null);export{c as NotificationCenterComponent,O as defaultStrategy};
