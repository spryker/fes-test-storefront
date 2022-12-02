import{c as d,d as n,y as c,_ as a,v as s,g as r}from"./index.d896b0c8.js";const p=d`
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
`,h=d`
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
`;class t extends n{constructor(){super(...arguments),this.backdropTargetTag="dialog",this.closeEvent="oryx.close"}requestUpdate(e,o){e==="isOpen"&&this.isOpen!==o&&this.setDialogState(),super.requestUpdate(e,o)}firstUpdated(e){super.firstUpdated(e),this.setDialogState()}setDialogState(){var e,o,l,i;this.isOpen?(o=(e=this.dialog)==null?void 0:e.showModal)==null||o.call(e):(i=(l=this.dialog)==null?void 0:l.close)==null||i.call(l)}emitCloseEvent(){this.dispatchEvent(new CustomEvent(this.closeEvent,{bubbles:!0,composed:!0}))}close(){this.emitCloseEvent(),this.removeAttribute("open")}open(){this.toggleAttribute("open")}backdropClickHandler(e){if(e.stopPropagation(),this.disableCloseOnBackdrop)return;e.composedPath()[0].tagName.toLowerCase()===this.backdropTargetTag&&this.close()}cancelEventHandler(e){e.preventDefault(),e.stopImmediatePropagation(),this.disableCloseOnEscape||this.close()}get dialog(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("dialog")}render(){return c`
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
    `}}t.styles=[h,p];a([s({type:Boolean,attribute:"open"}),r("design:type",Boolean)],t.prototype,"isOpen",void 0);a([s({type:Boolean,reflect:!0}),r("design:type",Boolean)],t.prototype,"fullscreen",void 0);a([s(),r("design:type",String)],t.prototype,"header",void 0);a([s({type:Boolean}),r("design:type",Boolean)],t.prototype,"disableCloseOnEscape",void 0);a([s({type:Boolean}),r("design:type",Boolean)],t.prototype,"disableCloseOnBackdrop",void 0);const y=Object.freeze(Object.defineProperty({__proto__:null,ModalComponent:t},Symbol.toStringTag,{value:"Module"}));export{t as M,p as f,y as m};
//# sourceMappingURL=modal.component.6bbebee1.js.map
