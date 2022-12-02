import{B as n,r as a,j as y,l as p,m as c,p as m,y as s,f as S,q as v,u as $,_ as r,g as o,v as u,h as f,w as g,x as C,S as R,L as x,o as b}from"./index.d896b0c8.js";import{o as h}from"./observe.decorator.e3ab0c52.js";import{C as L}from"./component.mixin.09051c71.js";import{t as j}from"./state.b6e10818.js";import{l as w}from"./layout.styles.c0b4bd07.js";import"./screen.63347f27.js";let i=class extends L(){constructor(){super(),this.uid="",this.uid$=new n(this.uid),this.route="",this.route$=new n(this.route),this.experienceService=a(g,null),this.registryService=a(C),this.ssrAwaiter=a(R,null),this.hasSSR=!1,this.isHydrated=!1,this.layoutBuilder=a(x),this.components$=y([this.uid$,this.route$]).pipe(p(([t,e],l)=>{var d;return l>0&&(this.isHydrated=!0),((d=this.experienceService)==null?void 0:d.getComponent({uid:t,route:e}))||b({})}),c(t=>{var e;return(e=t==null?void 0:t.components)!=null?e:[]})),this.hasSSR=!!this.renderRoot}isEmpty(){return!this.renderRoot.querySelector(":not(style)")}shouldRenderChildren(){return!!this.renderRoot&&!this.isEmpty()&&!m&&!this.isHydrated}hydrateOnDemand(){this.isHydrated||(this.isHydrated=!0,this.requestUpdate())}render(){return s`
      ${S(this.components$,t=>this.shouldRenderChildren()?s`${[...this.renderRoot.children]}`:t?s`${v(t,e=>e.id,e=>s`${this.registryService.resolveTemplate(e.type,e.id,this.getLayoutClasses(e))} `)}
              ${this.addInlineStyles(t)}`:s``,()=>s`Loading...`)}
    `}addInlineStyles(t){if(!t)return s``;const e=this.layoutBuilder.collectStyles(t);return e!==""?s`${$(`<style>${e}</style>`)}`:s``}getLayoutClasses(t){var e;if(!!((e=t.options)!=null&&e.data))return this.layoutBuilder.getLayoutClasses(t.options.data)}};i.styles=w;r([j(),o("design:type",Array)],i.prototype,"components",void 0);r([u(),o("design:type",Object)],i.prototype,"uid",void 0);r([h(),o("design:type",Object)],i.prototype,"uid$",void 0);r([u(),o("design:type",Object)],i.prototype,"route",void 0);r([h(),o("design:type",Object)],i.prototype,"route$",void 0);i=r([f(),o("design:paramtypes",[])],i);export{i as ExperienceCompositionComponent};
//# sourceMappingURL=experience-composition.component.37d643a4.js.map
