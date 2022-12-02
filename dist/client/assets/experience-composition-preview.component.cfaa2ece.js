import{c as d,A as r,t as n,D as y,y as a,f as m,q as v,_ as u,g as h}from"./index.dab5f70a.js";import{s as f}from"./subscribe.decorator.cfb427be.js";import{ExperienceCompositionComponent as x}from"./experience-composition.component.5183b660.js";import{l as $}from"./layout.styles.f41b11e2.js";import"./observe.decorator.e3ab0c52.js";import"./component.mixin.bb013c5d.js";import"./state.fb8eba1e.js";import"./screen.63347f27.js";const b=d`
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
`,c="eb-preview-focus";class l extends x{constructor(){var o;super(...arguments),this.interaction$=(o=this.experienceService)==null?void 0:o.getInteractionData(),this.interactionMouseEvent$=this.interaction$.pipe(r(e=>e.action==="mouseover"||e.action==="mouseout")),this.interactionClickEvent$=this.interaction$.pipe(r(e=>e.action==="click"),n(e=>{})),this.interactionAddComponentEvent$=this.interaction$.pipe(r(e=>e.action==="add"),n(e=>{})),this.selectedComponent$=y(this.interactionMouseEvent$,this.interactionClickEvent$,this.interactionAddComponentEvent$).pipe(n(e=>{const p="name",s=this.shadowRoot,i=s==null?void 0:s.querySelector(`.${c}`),t=s==null?void 0:s.querySelector(` [uid='${e.component.id}']`);t&&getComputedStyle(t).display==="inline"&&(t==null||t.style.setProperty("display","block")),i==null||i.classList.remove(c),i==null||i.removeAttribute(p),i==null||i.style.removeProperty("display"),e.action!=="mouseout"&&(t==null||t.classList.add(c),t==null||t.setAttribute(p,e.component.name))}))}render(){return a`
      ${m(this.components$,o=>a`${o?v(o,e=>e.id,e=>this.registryService.resolveTemplate(e.type,e.id,this.getLayoutClasses(e))):""}
          ${this.addInlineStyles(o)}`,()=>a`Loading...`)}
    `}}l.styles=[...$,b];u([f(),h("design:type",Object)],l.prototype,"selectedComponent$",void 0);export{l as ExperienceCompositionPreviewComponent};
