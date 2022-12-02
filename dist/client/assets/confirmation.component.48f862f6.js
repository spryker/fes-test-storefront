import{d as t,y as o}from"./index.175fafb9.js";import{confirmationBaseStyles as e}from"./confirmation.styles.69111337.js";import"./screen.63347f27.js";class n extends t{onRemove(){this.dispatchEvent(new CustomEvent("remove"))}onCancel(){this.dispatchEvent(new CustomEvent("cancel"))}render(){return o`
      <oryx-notification
        type="warning"
        scheme="dark"
        closable
        @oryx.close=${this.onCancel}
      >
        <span>Do you want to delete the product(s)?</span>

        <oryx-button type="text">
          <button @click=${this.onRemove}>Delete product(s)</button>
        </oryx-button>

        <oryx-button type="text">
          <button @click=${this.onCancel}>Cancel</button>
        </oryx-button>
      </oryx-notification>
    `}}n.styles=e;export{n as CartEntryConfirmationComponent};
