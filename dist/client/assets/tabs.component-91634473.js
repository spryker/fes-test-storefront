import{d as c,y as p,J as h,_ as s,v as i,g as a,aC as n}from"./index-4d2c92b7.js";import{t as d}from"./state-464c8ba0.js";import{baseStyles as g}from"./tabs.styles-e99a899d.js";import"./screen-c0aae3c9.js";class o extends c{constructor(){super(...arguments),this.activeTabIndex=0,this.appearance="primary",this.shadow=!1}static{this.styles=g}render(){return p`
      <input
        type="range"
        aria-label="tabs"
        min="1"
        @change=${this.onChange}
        value="${h(this.rangeValue)}"
        .max=${(this.tabs.length??0).toString()}
      />
      <slot @click=${this.onClick} @slotchange=${this.onSlotChange}></slot>
      <slot name="panels"></slot>
    `}select(e){if(!!e){if(this.tabs?.forEach((t,r)=>{t.selected=t===e,t.selected&&(this.rangeValue=r+1)}),e.hasAttribute("for"))this.panels?.forEach(t=>t.toggleAttribute("selected",t.id===e.getAttribute("for")));else{const t=this.tabs?.indexOf(e);this.panels?.forEach((r,l)=>r.toggleAttribute("selected",t===l))}e.scrollIntoView({block:"nearest"})}}onSlotChange(){const e=this.tabs?.find(t=>t.selected)||this.tabs?.[this.activeTabIndex];this.select(e)}onClick(e){const t=e.target.closest("oryx-tab");this.select(t)}onChange(e){const t=e.target,r=this.tabs?.[Number(t.value)-1];this.select(r)}}s([i({type:Number}),a("design:type",Object)],o.prototype,"activeTabIndex",void 0);s([i({type:String,reflect:!0}),a("design:type",Object)],o.prototype,"appearance",void 0);s([i({type:Boolean,reflect:!0}),a("design:type",Object)],o.prototype,"shadow",void 0);s([n({selector:"oryx-tab"}),a("design:type",Array)],o.prototype,"tabs",void 0);s([n({slot:"panels"}),a("design:type",Array)],o.prototype,"panels",void 0);s([d(),a("design:type",Number)],o.prototype,"rangeValue",void 0);export{o as TabsComponent};
