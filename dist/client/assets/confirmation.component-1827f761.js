import{d as o,y as n}from"./index-41c5945f.js";import{confirmationBaseStyles as s}from"./confirmation.styles-f589e4ad.js";import"./screen-c0aae3c9.js";const t=class extends o{onRemove(){this.dispatchEvent(new CustomEvent("remove"))}onCancel(){this.dispatchEvent(new CustomEvent("cancel"))}render(){return n`
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
    `}};let e=t;(()=>{t.styles=s})();export{e as CartEntryConfirmationComponent};
