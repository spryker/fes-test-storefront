import{c as b,d as u,y as m,_ as g,v,g as p}from"./index.175fafb9.js";import{q as S}from"./query.util.788fe4a8.js";import{t as y}from"./throttle.eea39600.js";class C{constructor(t){this.host=t,this.navItems=[],this.host.addController(this),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.detectActiveSection=this.detectActiveSection.bind(this),this.onScroll=y(this.detectActiveSection,50,!0)}hostConnected(){this.host.disableNavigation||this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation,this.setScrollListener()}hostUpdated(){this.disableNavigation!==this.host.disableNavigation&&(this.host.disableNavigation?this.removeNavigationItemsListeners():this.setNavigationItemsListeners(),this.disableNavigation=this.host.disableNavigation),this.sectionsContainerSelector!==this.host.sectionsContainerSelector&&(this.navItems=S(this.host),this.detectActiveSection())}hostDisconnected(){const t=this.getSectionsContainer();t&&t.removeEventListener("scroll",this.onScroll),this.removeNavigationItemsListeners()}setScrollListener(){const t=this.getSectionsContainer();t&&t.addEventListener("scroll",this.onScroll)}setNavigationItemsListeners(){this.host.addEventListener("keydown",this.onKeydown),this.host.addEventListener("click",this.onClick)}removeNavigationItemsListeners(){this.host.removeEventListener("keydown",this.onKeydown),this.host.removeEventListener("click",this.onClick)}getSectionsContainer(){return window.document.querySelector(this.host.sectionsContainerSelector)}onKeydown(t){t.key==="Enter"&&this.onNavigationItemActivated(t)}onClick(t){this.onNavigationItemActivated(t)}onNavigationItemActivated(t){var i,s;const e=(i=t.target.closest("oryx-page-navigation-item"))==null?void 0:i.getAttribute("targetId");e&&((s=document.getElementById(e))==null||s.scrollIntoView())}getVisibleSections(){const t=this.getSectionsContainer();if(!t)return[];const e=this.getSections(this.navItems),{clientHeight:i,scrollTop:s}=t;return e.reduce((c,l)=>{const{offsetTop:o,offsetHeight:n}=l;if(s<o+n&&o<s+i){const h=s-o,d=o+n-(s+i);let r=100;h>0?r-=h*100/n:d>0&&(r-=d*100/n),c.push({id:l.id,percent:r})}return c},[])}getMostVisibleSection(t){let e=t[0];for(let i=1;i<t.length;i++)t[i].percent>e.percent&&(e=t[i]);return e}emitCurrentSection(t){if(this.currentSectionId!==t){const e=new CustomEvent("section-change",{detail:{id:t}});this.host.dispatchEvent(e),this.currentSectionId=t}}detectActiveSection(){const t=this.getVisibleSections();if(!t.length)return;const e=this.getMostVisibleSection(t);this.emitCurrentSection(e.id);const i=this.navItems.find(({targetId:s})=>s===(e==null?void 0:e.id));this.navItems.forEach(s=>{s.toggleAttribute("active",!!(i!=null&&i.targetId)&&s.targetId===(i==null?void 0:i.targetId))})}getSections(t){return t.map(({targetId:e})=>document.querySelector(`#${e}`)).filter(e=>e)}}const N=b`
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
`;class a extends u{constructor(){super(...arguments),this.disableNavigation=!1,this.controller=new C(this)}render(){return m`
      <nav aria-label=${this.ariaLabel}>
        <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </nav>
    `}}a.styles=N;g([v({type:Boolean}),p("design:type",Object)],a.prototype,"disableNavigation",void 0);g([v(),p("design:type",String)],a.prototype,"sectionsContainerSelector",void 0);export{a as PageNavigationComponent};
