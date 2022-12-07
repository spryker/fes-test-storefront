import{c as i,d as l,y as d,_ as o,v as a,g as s}from"./index-4d2c92b7.js";const n=i`
  :host([fullscreen]) dialog {
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
  }

  :host([fullscreen]) oryx-card {
    --oryx-card-border-radius: 0;

    height: 100vh;
    max-height: 100vh;
  }

  :host([fullscreen]) oryx-card::part(body) {
    height: 100%;
  }
`,c=i`
  dialog {
    overscroll-behavior: none;
    padding: 0;
    border: none;
    background: transparent;
    min-width: var(--oryx-modal-min-width);
    max-width: calc(100% - 60px);
  }

  oryx-card {
    max-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
  }

  dialog::backdrop {
    background: rgba(0 0 0 / 50%);
  }

  div[slot='footer'] {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  oryx-card::part(body) {
    overflow: auto;
  }
`;class t extends l{constructor(){super(...arguments),this.backdropTargetTag="dialog",this.closeEvent="oryx.close"}static{this.styles=[c,n]}requestUpdate(e,r){e==="isOpen"&&this.isOpen!==r&&this.setDialogState(),super.requestUpdate(e,r)}firstUpdated(e){super.firstUpdated(e),this.setDialogState()}setDialogState(){this.isOpen?this.dialog?.showModal?.():this.dialog?.close?.()}emitCloseEvent(){this.dispatchEvent(new CustomEvent(this.closeEvent,{bubbles:!0,composed:!0}))}close(){this.emitCloseEvent(),this.removeAttribute("open")}open(){this.toggleAttribute("open")}backdropClickHandler(e){if(e.stopPropagation(),this.disableCloseOnBackdrop)return;e.composedPath()[0].tagName.toLowerCase()===this.backdropTargetTag&&this.close()}cancelEventHandler(e){e.preventDefault(),e.stopImmediatePropagation(),this.disableCloseOnEscape||this.close()}get dialog(){return this.shadowRoot?.querySelector("dialog")}render(){return d`
      <dialog
        @click="${e=>this.backdropClickHandler(e)}"
        @cancel=${e=>this.cancelEventHandler(e)}
        @close=${this.close}
      >
        <form method="dialog">
          <oryx-card>
            <slot name="header" slot="header"> ${this.header} </slot>
            <slot></slot>
            <div slot="footer">
              <slot name="footer">
                <oryx-button type="secondary" outline size="small">
                  <button value="cancel">Cancel</button>
                </oryx-button>
              </slot>
            </div>
          </oryx-card>
        </form>
      </dialog>
    `}}o([a({type:Boolean,attribute:"open"}),s("design:type",Boolean)],t.prototype,"isOpen",void 0);o([a({type:Boolean,reflect:!0}),s("design:type",Boolean)],t.prototype,"fullscreen",void 0);o([a(),s("design:type",String)],t.prototype,"header",void 0);o([a({type:Boolean}),s("design:type",Boolean)],t.prototype,"disableCloseOnEscape",void 0);o([a({type:Boolean}),s("design:type",Boolean)],t.prototype,"disableCloseOnBackdrop",void 0);const g=Object.freeze(Object.defineProperty({__proto__:null,ModalComponent:t},Symbol.toStringTag,{value:"Module"}));export{t as M,n as f,g as m};
