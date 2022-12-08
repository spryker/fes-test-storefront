import{c as b,d as u,y as m,_ as v,v as p,g as f}from"./index-41c5945f.js";import{q as S}from"./query.util-87342f84.js";import{t as y}from"./throttle-4a4cf116.js";class x{constructor(t){this.host=t,this.navItems=[],this.host.addController(this),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.detectActiveSection=this.detectActiveSection.bind(this),this.onScroll=y(this.detectActiveSection,50,!0)}hostConnected(){this.host.disableNavigation||this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation,this.setScrollListener()}hostUpdated(){this.disableNavigation!==this.host.disableNavigation&&(this.host.disableNavigation?this.removeNavigationItemsListeners():this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation),this.sectionsContainerSelector!==this.host.sectionsContainerSelector&&(this.navItems=S(this.host),this.detectActiveSection())}hostDisconnected(){const t=this.getSectionsContainer();t&&t.removeEventListener("scroll",this.onScroll),this.removeNavigationItemsListeners()}setScrollListener(){const t=this.getSectionsContainer();t&&t.addEventListener("scroll",this.onScroll)}setNavigationItemsListeners(){this.host.addEventListener("keydown",this.onKeydown),this.host.addEventListener("click",this.onClick)}removeNavigationItemsListeners(){this.host.removeEventListener("keydown",this.onKeydown),this.host.removeEventListener("click",this.onClick)}getSectionsContainer(){return window.document.querySelector(this.host.sectionsContainerSelector)}onKeydown(t){t.key==="Enter"&&this.onNavigationItemActivated(t)}onClick(t){this.onNavigationItemActivated(t)}onNavigationItemActivated(t){var i,s;const e=(i=t.target.closest("oryx-page-navigation-item"))==null?void 0:i.getAttribute("targetId");e&&((s=document.getElementById(e))==null||s.scrollIntoView())}getVisibleSections(){const t=this.getSectionsContainer();if(!t)return[];const e=this.getSections(this.navItems),{clientHeight:i,scrollTop:s}=t;return e.reduce((l,h)=>{const{offsetTop:o,offsetHeight:n}=h;if(s<o+n&&o<s+i){const d=s-o,g=o+n-(s+i);let a=100;d>0?a-=d*100/n:g>0&&(a-=g*100/n),l.push({id:h.id,percent:a})}return l},[])}getMostVisibleSection(t){let e=t[0];for(let i=1;i<t.length;i++)t[i].percent>e.percent&&(e=t[i]);return e}emitCurrentSection(t){if(this.currentSectionId!==t){const e=new CustomEvent("section-change",{detail:{id:t}});this.host.dispatchEvent(e),this.currentSectionId=t}}detectActiveSection(){const t=this.getVisibleSections();if(!t.length)return;const e=this.getMostVisibleSection(t);this.emitCurrentSection(e.id);const i=this.navItems.find(({targetId:s})=>s===(e==null?void 0:e.id));this.navItems.forEach(s=>{s.toggleAttribute("active",!!(i!=null&&i.targetId)&&s.targetId===(i==null?void 0:i.targetId))})}getSections(t){return t.map(({targetId:e})=>document.querySelector(`#${e}`)).filter(e=>e)}}const C=b`
  ::slotted(*)::before {
    content: '';
    width: 1px;
    background: var(--oryx-color-canvas-500);
    height: 100%;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 23.5px;
  }

  ::slotted(:first-child)::before {
    content: '';
    width: 1px;
    height: calc(100% - 20px);
    background: var(--oryx-color-canvas-500);
    position: absolute;
    inset-block-start: 20px;
    inset-inline-start: 23.5px;
  }

  ::slotted(:last-child)::before {
    content: '';
    width: 1px;
    background: var(--oryx-color-canvas-500);
    height: 20px;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 23.5px;
  }

  ::slotted(:first-child)::after,
  ::slotted(*)::after {
    content: '';
    width: 1px;
    height: 10px;
    background: var(--oryx-color-canvas-500);
    position: absolute;
    inset-block-end: -11px;
    inset-inline-start: 23.5px;
  }

  ::slotted(:last-child)::after {
    display: none;
  }

  ::slotted(:only-child)::before {
    content: '';
    display: none;
  }
`,c=class extends u{constructor(){super(...arguments),this.disableNavigation=!1,this.controller=new x(this)}render(){return m`
      <nav aria-label=${this.ariaLabel}>
        <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </nav>
    `}};let r=c;(()=>{c.styles=C})();v([p({type:Boolean}),f("design:type",Object)],r.prototype,"disableNavigation",void 0);v([p(),f("design:type",String)],r.prototype,"sectionsContainerSelector",void 0);export{r as PageNavigationComponent};
