import{c as m,d as f,y as u,_ as d,v as g,g as v}from"./index-4d2c92b7.js";import{q as S}from"./query.util-00243645.js";import{t as y}from"./throttle-4a4cf116.js";class C{constructor(t){this.host=t,this.navItems=[],this.host.addController(this),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.detectActiveSection=this.detectActiveSection.bind(this),this.onScroll=y(this.detectActiveSection,50,!0)}hostConnected(){this.host.disableNavigation||this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation,this.setScrollListener()}hostUpdated(){this.disableNavigation!==this.host.disableNavigation&&(this.host.disableNavigation?this.removeNavigationItemsListeners():this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation),this.sectionsContainerSelector!==this.host.sectionsContainerSelector&&(this.navItems=S(this.host),this.detectActiveSection())}hostDisconnected(){const t=this.getSectionsContainer();t&&t.removeEventListener("scroll",this.onScroll),this.removeNavigationItemsListeners()}setScrollListener(){const t=this.getSectionsContainer();t&&t.addEventListener("scroll",this.onScroll)}setNavigationItemsListeners(){this.host.addEventListener("keydown",this.onKeydown),this.host.addEventListener("click",this.onClick)}removeNavigationItemsListeners(){this.host.removeEventListener("keydown",this.onKeydown),this.host.removeEventListener("click",this.onClick)}getSectionsContainer(){return window.document.querySelector(this.host.sectionsContainerSelector)}onKeydown(t){t.key==="Enter"&&this.onNavigationItemActivated(t)}onClick(t){this.onNavigationItemActivated(t)}onNavigationItemActivated(t){const e=t.target.closest("oryx-page-navigation-item")?.getAttribute("targetId");e&&document.getElementById(e)?.scrollIntoView()}getVisibleSections(){const t=this.getSectionsContainer();if(!t)return[];const e=this.getSections(this.navItems),{clientHeight:i,scrollTop:s}=t;return e.reduce((a,c)=>{const{offsetTop:o,offsetHeight:n}=c;if(s<o+n&&o<s+i){const l=s-o,h=o+n-(s+i);let r=100;l>0?r-=l*100/n:h>0&&(r-=h*100/n),a.push({id:c.id,percent:r})}return a},[])}getMostVisibleSection(t){let e=t[0];for(let i=1;i<t.length;i++)t[i].percent>e.percent&&(e=t[i]);return e}emitCurrentSection(t){if(this.currentSectionId!==t){const e=new CustomEvent("section-change",{detail:{id:t}});this.host.dispatchEvent(e),this.currentSectionId=t}}detectActiveSection(){const t=this.getVisibleSections();if(!t.length)return;const e=this.getMostVisibleSection(t);this.emitCurrentSection(e.id);const i=this.navItems.find(({targetId:s})=>s===e?.id);this.navItems.forEach(s=>{s.toggleAttribute("active",!!i?.targetId&&s.targetId===i?.targetId)})}getSections(t){return t.map(({targetId:e})=>document.querySelector(`#${e}`)).filter(e=>e)}}const I=m`
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
`;class p extends f{constructor(){super(...arguments),this.disableNavigation=!1,this.controller=new C(this)}static{this.styles=I}render(){return u`
      <nav aria-label=${this.ariaLabel}>
        <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </nav>
    `}}d([g({type:Boolean}),v("design:type",Object)],p.prototype,"disableNavigation",void 0);d([g(),v("design:type",String)],p.prototype,"sectionsContainerSelector",void 0);export{p as PageNavigationComponent};
