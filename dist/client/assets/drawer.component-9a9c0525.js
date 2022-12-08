import{c as r,y as i}from"./index-41c5945f.js";import{DrawerComponent as s}from"./drawer.component-8dc22dd9.js";import"./common-0ee98dc0.js";const n=r`
  dialog {
    display: flex;
  }
`,e=class extends s{show(){this.setAttribute("open","open"),this.focusControlButton()}close(){this.removeAttribute("open"),this.resize(!1)}get dialog(){return{open:this.open,show:()=>this.show(),close:()=>this.close(),showModal(){}}}get dialogElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector('[role="dialog"]')}get closeButtonElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector('button[value="cancel"]')}focusControlButton(){var t,o;(o=(t=this.shadowRoot)==null?void 0:t.querySelector("nav button"))==null||o.focus()}render(){return i`
      <dialog
        ?open=${this.open}
        @click=${t=>this.handleClick(t)}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        ${super.renderTemplate()}
      </dialog>
    `}handleClick(t){t.target===this.closeButtonElement&&this.close()}};let l=e;(()=>{e.styles=[...s.styles,n]})();export{l as NDSDrawerComponent};
