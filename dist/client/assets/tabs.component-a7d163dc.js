import{d as y,y as b,J as u,_ as i,v as c,g as n,aC as d}from"./index-74abacf3.js";import{t as f}from"./state-804e6978.js";import{baseStyles as m}from"./tabs.styles-519af430.js";import"./screen-c0aae3c9.js";const p=class extends y{constructor(){super(...arguments),this.activeTabIndex=0,this.appearance="primary",this.shadow=!1}render(){return b`
      <input
        type="range"
        aria-label="tabs"
        min="1"
        @change=${this.onChange}
        value="${u(this.rangeValue)}"
        .max=${(this.tabs.length??0).toString()}
      />
      <slot @click=${this.onClick} @slotchange=${this.onSlotChange}></slot>
      <slot name="panels"></slot>
    `}select(t){var e,r,o,h;if(!!t){if((e=this.tabs)==null||e.forEach((s,l)=>{s.selected=s===t,s.selected&&(this.rangeValue=l+1)}),t.hasAttribute("for"))(r=this.panels)==null||r.forEach(s=>s.toggleAttribute("selected",s.id===t.getAttribute("for")));else{const s=(o=this.tabs)==null?void 0:o.indexOf(t);(h=this.panels)==null||h.forEach((l,g)=>l.toggleAttribute("selected",s===g))}t.scrollIntoView({block:"nearest"})}}onSlotChange(){var e,r;const t=((e=this.tabs)==null?void 0:e.find(o=>o.selected))||((r=this.tabs)==null?void 0:r[this.activeTabIndex]);this.select(t)}onClick(t){const e=t.target.closest("oryx-tab");this.select(e)}onChange(t){var o;const e=t.target,r=(o=this.tabs)==null?void 0:o[Number(e.value)-1];this.select(r)}};let a=p;(()=>{p.styles=m})();i([c({type:Number}),n("design:type",Object)],a.prototype,"activeTabIndex",void 0);i([c({type:String,reflect:!0}),n("design:type",Object)],a.prototype,"appearance",void 0);i([c({type:Boolean,reflect:!0}),n("design:type",Object)],a.prototype,"shadow",void 0);i([d({selector:"oryx-tab"}),n("design:type",Array)],a.prototype,"tabs",void 0);i([d({slot:"panels"}),n("design:type",Array)],a.prototype,"panels",void 0);i([f(),n("design:type",Number)],a.prototype,"rangeValue",void 0);export{a as TabsComponent};
