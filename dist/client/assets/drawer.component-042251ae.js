import{c as o,y as s}from"./index-4d2c92b7.js";import{DrawerComponent as t}from"./drawer.component-b54499fb.js";import"./common-0ee98dc0.js";const r=o`
  dialog {
    display: flex;
  }
`;class h extends t{static{this.styles=[...t.styles,r]}show(){this.setAttribute("open","open"),this.focusControlButton()}close(){this.removeAttribute("open"),this.resize(!1)}get dialog(){return{open:this.open,show:()=>this.show(),close:()=>this.close(),showModal(){}}}get dialogElement(){return this.shadowRoot?.querySelector('[role="dialog"]')}get closeButtonElement(){return this.shadowRoot?.querySelector('button[value="cancel"]')}focusControlButton(){this.shadowRoot?.querySelector("nav button")?.focus()}render(){return s`
      <dialog
        ?open=${this.open}
        @click=${e=>this.handleClick(e)}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        ${super.renderTemplate()}
      </dialog>
    `}handleClick(e){e.target===this.closeButtonElement&&this.close()}}export{h as NDSDrawerComponent};
