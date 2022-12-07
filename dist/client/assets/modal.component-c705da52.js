import{c as o,y as t}from"./index-4d2c92b7.js";import{M as a,f as n}from"./modal.component-4de6a920.js";const i=o`
  :host {
    display: none;
  }

  :host([open]) {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    inset-inline-start: 0;
    top: 0;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    overflow: none;
    background-color: var(--oryx-modal-background-color);
  }

  dialog {
    overscroll-behavior: none;
    padding: 0;
    border: none;
    margin: 0 auto;
    background: transparent;
    min-width: var(--oryx-modal-min-width);
    max-width: calc(100% - 60px);
  }

  oryx-card {
    max-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
  }

  oryx-card::part(body) {
    overflow: auto;
  }

  div[slot='footer'] {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;class d extends a{constructor(){super(...arguments),this.backdropTargetTag=this.tagName.toLowerCase(),this.keyDownHandler=e=>{e.preventDefault(),e.key==="Escape"&&!this.disableCloseOnEscape&&this.close()}}static{this.styles=[i,n]}setDialogState(){this.isOpen?(window.addEventListener("keydown",this.keyDownHandler),this.addEventListener("click",this.backdropClickHandler)):this.onDestroy()}onDestroy(){window.removeEventListener("keydown",this.keyDownHandler),this.removeEventListener("click",this.backdropClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this.onDestroy()}render(){return t`
      <dialog role="dialog" aria-modal="true">
        <oryx-card>
          <slot name="header" slot="header"> ${this.header} </slot>
          <slot></slot>
          <div slot="footer">
            <slot name="footer">
              <oryx-button
                type="secondary"
                outline
                size="small"
                @click=${this.close}
              >
                <button value="cancel">Cancel</button>
              </oryx-button>
            </slot>
          </div>
        </oryx-card>
      </dialog>
    `}}export{d as NDSModalComponent};
