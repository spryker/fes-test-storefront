import{T as s,r as f,A as p,t as m,y as a,f as l,_ as c,g as h,h as u,Q as C}from"./index-4d2c92b7.js";import{C as d}from"./content.controller-33ee67c3.js";import{s as y}from"./subscribe.decorator-50a973f5.js";import{C as $}from"./component.mixin-6d7092a2.js";import{NotificationCenterComponent as v}from"./notification-center.component-4197f6ca.js";import{e as N,n as S}from"./ref-25dac95f.js";import"./state-464c8ba0.js";const b=i=>i?`[position=${i}]`:"";class w{getCenter(t="body",o){let e=document.querySelector(`${t} ${s}${b(o)}`);return e instanceof v||(e=this.createCenter(t,o)),e}createCenter(t="body",o){const e=document.querySelector(t);if(!e)throw new Error("Parent element not found for the creation of a new NotificationCenter");const n=document.createElement(s);return o&&n.setAttribute("position",o),e.append(n),n}}let r=class extends $(){constructor(){super(...arguments),this.notificationService=new w,this.siteNotificationService=f(C),this.contentController=new d(this),this.options$=this.contentController.getOptions(),this.centerRef=N(),this.notification$=this.siteNotificationService.get().pipe(p(t=>!!t),m(async t=>{this.centerRef.value&&"open"in this.centerRef.value||await customElements.whenDefined("oryx-notification-center"),this.centerRef.value?.open?.(t)}))}render(){return a`${l(this.options$,t=>a`<oryx-notification-center
        position="${t.position??"top-end"}"
        ${S(this.centerRef)}
      ></oryx-notification-center>`)}`}};c([y(),h("design:type",Object)],r.prototype,"notification$",void 0);r=c([u()],r);export{r as SiteNotificationCenterComponent};
