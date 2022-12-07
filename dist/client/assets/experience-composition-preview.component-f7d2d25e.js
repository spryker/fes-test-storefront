import{c as p,A as n,t as r,D as l,y as s,f as m,q as d,_ as u,g as y}from"./index-4d2c92b7.js";import{s as v}from"./subscribe.decorator-50a973f5.js";import{ExperienceCompositionComponent as f}from"./experience-composition.component-ff3b35e3.js";import{l as h}from"./layout.styles-1c4c0b88.js";import"./observe.decorator-af7161d0.js";import"./component.mixin-6d7092a2.js";import"./state-464c8ba0.js";import"./screen-c0aae3c9.js";const x=p`
  .eb-preview-focus {
    position: relative;
  }
  .eb-preview-focus:before {
    content: '';
    outline: 4px solid var(--oryx-color-primary-300);
    outline-offset: -4px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: var(--oryx-overlay-z-index, 3);
  }

  .eb-preview-focus:after {
    content: attr(name);
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    font-family: 'Montserrat';
    padding: 2px 5px;
    background-color: var(--oryx-color-primary-300);
    z-index: var(--oryx-overlay-z-index, 3);
  }
`,a="eb-preview-focus";class $ extends f{constructor(){super(...arguments),this.interaction$=this.experienceService?.getInteractionData(),this.interactionMouseEvent$=this.interaction$.pipe(n(e=>e.action==="mouseover"||e.action==="mouseout")),this.interactionClickEvent$=this.interaction$.pipe(n(e=>e.action==="click"),r(e=>{})),this.interactionAddComponentEvent$=this.interaction$.pipe(n(e=>e.action==="add"),r(e=>{})),this.selectedComponent$=l(this.interactionMouseEvent$,this.interactionClickEvent$,this.interactionAddComponentEvent$).pipe(r(e=>{const t="name",c=this.shadowRoot,i=c?.querySelector(`.${a}`),o=c?.querySelector(` [uid='${e.component.id}']`);o&&getComputedStyle(o).display==="inline"&&o?.style.setProperty("display","block"),i?.classList.remove(a),i?.removeAttribute(t),i?.style.removeProperty("display"),e.action!=="mouseout"&&(o?.classList.add(a),o?.setAttribute(t,e.component.name))}))}static{this.styles=[...h,x]}render(){return s`
      ${m(this.components$,e=>s`${e?d(e,t=>t.id,t=>this.registryService.resolveTemplate(t.type,t.id,this.getLayoutClasses(t))):""}
          ${this.addInlineStyles(e)}`,()=>s`Loading...`)}
    `}}u([v(),y("design:type",Object)],$.prototype,"selectedComponent$",void 0);export{$ as ExperienceCompositionPreviewComponent};
