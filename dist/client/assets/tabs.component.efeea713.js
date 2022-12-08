import{d as g,y as b,N as y,_ as i,v as c,g as n,aG as h}from"./index.65290630.js";import{t as u}from"./state.a1ea36ea.js";import{baseStyles as f}from"./tabs.styles.ba9c0057.js";class r extends g{constructor(){super(...arguments),this.activeTabIndex=0,this.appearance="primary",this.shadow=!1}render(){var e;return b`
      <input
        type="range"
        aria-label="tabs"
        min="1"
        @change=${this.onChange}
        value="${y(this.rangeValue)}"
        .max=${((e=this.tabs.length)!=null?e:0).toString()}
      />
      <slot @click=${this.onClick} @slotchange=${this.onSlotChange}></slot>
      <slot name="panels"></slot>
    `}select(e){var t,a,o,p;if(!!e){if((t=this.tabs)==null||t.forEach((s,l)=>{s.selected=s===e,s.selected&&(this.rangeValue=l+1)}),e.hasAttribute("for"))(a=this.panels)==null||a.forEach(s=>s.toggleAttribute("selected",s.id===e.getAttribute("for")));else{const s=(o=this.tabs)==null?void 0:o.indexOf(e);(p=this.panels)==null||p.forEach((l,d)=>l.toggleAttribute("selected",s===d))}e.scrollIntoView({block:"nearest"})}}onSlotChange(){var t,a;const e=((t=this.tabs)==null?void 0:t.find(o=>o.selected))||((a=this.tabs)==null?void 0:a[this.activeTabIndex]);this.select(e)}onClick(e){const t=e.target.closest("oryx-tab");this.select(t)}onChange(e){var o;const t=e.target,a=(o=this.tabs)==null?void 0:o[Number(t.value)-1];this.select(a)}}r.styles=f;i([c({type:Number}),n("design:type",Object)],r.prototype,"activeTabIndex",void 0);i([c({type:String,reflect:!0}),n("design:type",Object)],r.prototype,"appearance",void 0);i([c({type:Boolean,reflect:!0}),n("design:type",Object)],r.prototype,"shadow",void 0);i([h({selector:"oryx-tab"}),n("design:type",Array)],r.prototype,"tabs",void 0);i([h({slot:"panels"}),n("design:type",Array)],r.prototype,"panels",void 0);i([u(),n("design:type",Number)],r.prototype,"rangeValue",void 0);export{r as TabsComponent};
