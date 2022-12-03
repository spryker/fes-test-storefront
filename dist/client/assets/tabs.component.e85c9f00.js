import{d as g,y as b,J as y,_ as i,v as c,g as n,aD as h}from"./index.571dc3d3.js";import{t as u}from"./state.62f02930.js";import{baseStyles as m}from"./tabs.styles.c058088b.js";import"./screen.63347f27.js";class r extends g{constructor(){super(...arguments),this.activeTabIndex=0,this.appearance="primary",this.shadow=!1}render(){var t;return b`
      <input
        type="range"
        aria-label="tabs"
        min="1"
        @change=${this.onChange}
        value="${y(this.rangeValue)}"
        .max=${((t=this.tabs.length)!=null?t:0).toString()}
      />
      <slot @click=${this.onClick} @slotchange=${this.onSlotChange}></slot>
      <slot name="panels"></slot>
    `}select(t){var e,a,o,p;if(!!t){if((e=this.tabs)==null||e.forEach((s,l)=>{s.selected=s===t,s.selected&&(this.rangeValue=l+1)}),t.hasAttribute("for"))(a=this.panels)==null||a.forEach(s=>s.toggleAttribute("selected",s.id===t.getAttribute("for")));else{const s=(o=this.tabs)==null?void 0:o.indexOf(t);(p=this.panels)==null||p.forEach((l,d)=>l.toggleAttribute("selected",s===d))}t.scrollIntoView({block:"nearest"})}}onSlotChange(){var e,a;const t=((e=this.tabs)==null?void 0:e.find(o=>o.selected))||((a=this.tabs)==null?void 0:a[this.activeTabIndex]);this.select(t)}onClick(t){const e=t.target.closest("oryx-tab");this.select(e)}onChange(t){var o;const e=t.target,a=(o=this.tabs)==null?void 0:o[Number(e.value)-1];this.select(a)}}r.styles=m;i([c({type:Number}),n("design:type",Object)],r.prototype,"activeTabIndex",void 0);i([c({type:String,reflect:!0}),n("design:type",Object)],r.prototype,"appearance",void 0);i([c({type:Boolean,reflect:!0}),n("design:type",Object)],r.prototype,"shadow",void 0);i([h({selector:"oryx-tab"}),n("design:type",Array)],r.prototype,"tabs",void 0);i([h({slot:"panels"}),n("design:type",Array)],r.prototype,"panels",void 0);i([u(),n("design:type",Number)],r.prototype,"rangeValue",void 0);export{r as TabsComponent};
//# sourceMappingURL=tabs.component.e85c9f00.js.map
