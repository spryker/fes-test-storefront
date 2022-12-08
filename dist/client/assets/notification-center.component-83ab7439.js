import{c as u,z as s,U as T,d as g,y as h,J as c,K as m,q as f,_ as d,v as b,g as y}from"./index-74abacf3.js";import{t as x}from"./state-804e6978.js";var e;(function(r){r.TOP_START="top-start",r.TOP_END="top-end",r.BOTTOM_START="bottom-start",r.BOTTOM_END="bottom-end"})(e||(e={}));const _=u`
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

  :host([position='${s(e.TOP_START)}']),
  :host([position='${s(e.TOP_END)}']) {
    flex-direction: column-reverse;
  }

  :host([position='${s(e.TOP_START)}']) {
    top: 40px;
    inset-inline-start: 30px;
  }

  :host([position='${s(e.TOP_END)}']) {
    top: 40px;
    inset-inline-end: 30px;
  }

  :host([position='${s(e.BOTTOM_START)}']) {
    bottom: 40px;
    inset-inline-start: 30px;
  }

  :host([position='${s(e.BOTTOM_END)}']) {
    bottom: 40px;
    inset-inline-end: 30px;
  }

  /* TODO: refactor with theme BP's */
  @media (max-width: 530px) {
    :host([position='${s(e.TOP_END)}']),
    :host([position='${s(e.TOP_START)}']),
    :host([position='${s(e.BOTTOM_START)}']),
    :host([position='${s(e.BOTTOM_END)}']) {
      max-width: calc(100% - 60px);
    }
  }

  :host > * {
    margin-bottom: 10px;
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--oryx-transition-time-long);
  }

  :host([position='${s(e.BOTTOM_START)}']) :last-child,
  :host([position='${s(e.BOTTOM_END)}']) :last-child {
    margin-bottom: 0;
  }

  :host > [visible] {
    opacity: 1;
    transition-duration: var(--oryx-transition-time-medium);
  }
`,O=r=>{var t;return String(Number(((t=r.filter(({key:i})=>!!i).sort((i,o)=>Number(o.key)-Number(i.key))[0])==null?void 0:t.key)||Date.now())+1)};class ${constructor(t){this.host=t,this._registry=[],this._delayedCallbacks={},this.host.addController(this)}set registry(t){const i=t.map(o=>{if(!o.key){const a=O(this.registry),l={...v,...o};return l.autoClose&&(this._delayedCallbacks[a]=setTimeout(()=>{this.toggleVisibility(a)},l.autoCloseTime)),{...l,key:a,visible:!1}}return o});this._registry=i,this.host.requestUpdate()}get registry(){return this._registry}preventAutoClose(t){if(this.notificationIsVisible(t)){clearTimeout(this._delayedCallbacks[t]);return}this.toggleVisibility(t)}handleNotificationClose(t){this.removeFromRegistry(t,!0)}handleTransitionEnd(t){this.notificationIsVisible(t)||this.removeFromRegistry(t)}removeFromRegistry(t,i=!1){i&&this.preventAutoClose(t),this.registry=this.registry.filter(({key:o})=>t!==o)}toggleVisibility(t){this.registry=this.registry.map(i=>i.key===t?{...i,visible:!i.visible,_mounted:!0}:i)}notificationIsVisible(t){var i;return Boolean((i=this.registry.find(({key:o})=>o===t))==null?void 0:i.visible)}ensureNotificationMountedState(){this.registry.some(({key:t,_mounted:i})=>t&&!i)&&setTimeout(()=>{this.registry=this.registry.map(t=>({...t,visible:!0,_mounted:!0}))},0)}hostUpdated(){this.ensureNotificationMountedState()}}const v={scheme:T.LIGHT,autoClose:!0,autoCloseTime:4e3,closable:!0,floating:!0},p=class extends g{constructor(){super(...arguments),this.registryController=new $(this)}get registry(){return this.registryController.registry}open(t){return this.registryController.registry=[...this.registryController.registry,t],this.registry[this.registry.length-1].key}close(t){this.registryController.handleNotificationClose(t)}renderNotification(t){return h`
      <oryx-notification
        type=${c(t.type)}
        scheme=${c(t.scheme)}
        ?closable=${t.closable}
        ?floating=${t.floating}
        ?visible=${t.visible}
        @oryx.close=${()=>this.registryController.handleNotificationClose(t.key)}
        @mouseenter=${()=>this.registryController.preventAutoClose(t.key)}
        @transitionend=${()=>this.registryController.handleTransitionEnd(t.key)}
      >
        ${t.content}
        ${m(t.subtext,()=>h`<span slot="subtext">${t.subtext}</span>`)}
      </oryx-notification>
    `}render(){return h`
      ${f(this.registry,({key:t})=>t,t=>this.renderNotification(t))}
    `}};let n=p;(()=>{p.styles=[_]})();d([b({reflect:!0}),y("design:type",String)],n.prototype,"position",void 0);d([x(),y("design:type",Array),y("design:paramtypes",[])],n.prototype,"registry",null);export{n as NotificationCenterComponent,v as defaultStrategy};
