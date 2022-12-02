import{c as s,y as r}from"./index.0de56bf6.js";import{DrawerComponent as o}from"./drawer.component.aae5ff31.js";import"./common.49548711.js";const l=s`
  dialog {
    display: flex;
  }
`;class n extends o{show(){this.setAttribute("open","open"),this.focusControlButton()}close(){this.removeAttribute("open"),this.resize(!1)}get dialog(){return{open:this.open,show:()=>this.show(),close:()=>this.close(),showModal(){}}}get dialogElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector('[role="dialog"]')}get closeButtonElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector('button[value="cancel"]')}focusControlButton(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("nav button"))==null||t.focus()}render(){return r`
      <dialog
        ?open=${this.open}
        @click=${e=>this.handleClick(e)}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        ${super.renderTemplate()}
      </dialog>
    `}handleClick(e){e.target===this.closeButtonElement&&this.close()}}n.styles=[...o.styles,l];export{n as NDSDrawerComponent};
