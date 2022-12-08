import{c as a,y as i}from"./index-41c5945f.js";import{M as r,f as s}from"./modal.component-8312dff1.js";const n=a`
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
`,e=class extends r{constructor(){super(...arguments),this.backdropTargetTag=this.tagName.toLowerCase(),this.keyDownHandler=o=>{o.preventDefault(),o.key==="Escape"&&!this.disableCloseOnEscape&&this.close()}}setDialogState(){this.isOpen?(window.addEventListener("keydown",this.keyDownHandler),this.addEventListener("click",this.backdropClickHandler)):this.onDestroy()}onDestroy(){window.removeEventListener("keydown",this.keyDownHandler),this.removeEventListener("click",this.backdropClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this.onDestroy()}render(){return i`
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
    `}};let t=e;(()=>{e.styles=[n,s]})();export{t as NDSModalComponent};
