import{c as y,A as o,t as a,D as u,y as n,f as h,q as v,_ as m,g as f}from"./index-41c5945f.js";import{s as $}from"./subscribe.decorator-b8b77f67.js";import{ExperienceCompositionComponent as x}from"./experience-composition.component-2ff75422.js";import{l as b}from"./layout.styles-e5516ea1.js";import"./observe.decorator-62a61e42.js";import"./component.mixin-da8e468a.js";import"./state-2f3bc3a1.js";import"./screen-c0aae3c9.js";const S=y`
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
`,c="eb-preview-focus",p=class extends x{constructor(){var s;super(...arguments),this.interaction$=(s=this.experienceService)==null?void 0:s.getInteractionData(),this.interactionMouseEvent$=this.interaction$.pipe(o(t=>t.action==="mouseover"||t.action==="mouseout")),this.interactionClickEvent$=this.interaction$.pipe(o(t=>t.action==="click"),a(t=>{})),this.interactionAddComponentEvent$=this.interaction$.pipe(o(t=>t.action==="add"),a(t=>{})),this.selectedComponent$=u(this.interactionMouseEvent$,this.interactionClickEvent$,this.interactionAddComponentEvent$).pipe(a(t=>{const d="name",r=this.shadowRoot,i=r==null?void 0:r.querySelector(`.${c}`),e=r==null?void 0:r.querySelector(` [uid='${t.component.id}']`);e&&getComputedStyle(e).display==="inline"&&(e==null||e.style.setProperty("display","block")),i==null||i.classList.remove(c),i==null||i.removeAttribute(d),i==null||i.style.removeProperty("display"),t.action!=="mouseout"&&(e==null||e.classList.add(c),e==null||e.setAttribute(d,t.component.name))}))}render(){return n`
      ${h(this.components$,s=>n`${s?v(s,t=>t.id,t=>this.registryService.resolveTemplate(t.type,t.id,this.getLayoutClasses(t))):""}
          ${this.addInlineStyles(s)}`,()=>n`Loading...`)}
    `}};let l=p;(()=>{p.styles=[...b,S]})();m([$(),f("design:type",Object)],l.prototype,"selectedComponent$",void 0);export{l as ExperienceCompositionPreviewComponent};
