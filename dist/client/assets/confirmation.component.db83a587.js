import{d as t,y as o}from"./index.65290630.js";import{confirmationBaseStyles as e}from"./confirmation.styles.95d7c8c1.js";class n extends t{onRemove(){this.dispatchEvent(new CustomEvent("remove"))}onCancel(){this.dispatchEvent(new CustomEvent("cancel"))}render(){return o`
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
