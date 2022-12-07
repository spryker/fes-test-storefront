import{d as t,y as o}from"./index-4d2c92b7.js";import{confirmationBaseStyles as e}from"./confirmation.styles-ed9cdaf2.js";import"./screen-c0aae3c9.js";class a extends t{static{this.styles=e}onRemove(){this.dispatchEvent(new CustomEvent("remove"))}onCancel(){this.dispatchEvent(new CustomEvent("cancel"))}render(){return o`
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
    `}}export{a as CartEntryConfirmationComponent};
