import{A as r}from"./input.component.9be270fa.js";import"./input.styles.352f3e03.js";import{y as o}from"./index.0de56bf6.js";import{g as i}from"./getControl.90f4a4dd.js";class d{constructor(t){this.host=t,this.host.addController(this),this.affixController=new r(t),this.handleInputValue=this.handleInputValue.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this)}hostConnected(){this.host.addEventListener("input",this.handleInputValue),this.host.addEventListener("change",this.handleInputValue),this.host.addEventListener("keydown",this.handleKeyEvent)}hostDisconnected(){this.host.removeEventListener("input",this.handleInputValue),this.host.removeEventListener("change",this.handleInputValue),this.host.removeEventListener("keydown",this.handleKeyEvent)}renderPrefix(){return this.affixController.renderPrefix(this.prefixContent)}renderSuffix(){const{clearIconPosition:t}=this.host;return!t||t==="AFTER"?o`${this.clearButton}${this.affixController.renderSuffix(this.suffixContent)}`:o`${this.affixController.renderSuffix(this.suffixContent)}`}get prefixContent(){let t;const{searchIconPosition:e}=this.host;return(!e||e==="PREFIX")&&(t=this.searchButton),t}get suffixContent(){const{searchIconPosition:t,clearIconPosition:e}=this.host,n=e==="SUFFIX"?this.clearButton:void 0,s=t==="SUFFIX"?this.searchButton:void 0;if(!(!n&&!s))return o`${n}${s}`}get searchButton(){const{searchIcon:t="search"}=this.host,e=o`
      <oryx-icon
        type=${t}
        class="search"
        @click=${()=>this.search()}
      ></oryx-icon>
    `;return o`${e}`}get clearButton(){const{clearIcon:t="remove",clearIconAppearance:e}=this.host;return o`
      <oryx-icon
        type=${t}
        class="clear"
        appearance=${e!=null?e:"TOGGLE"}
        @mousedown=${n=>this.muteEvents(n)}
        @click=${n=>this.clear(n)}
      ></oryx-icon>
    `}muteEvents(t){this.control.value!==""&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())}get control(){return i(this.host)}hostUpdated(){this.handleInputValue()}search(){const t=new CustomEvent("oryx.search",{detail:{query:this.control.value},bubbles:!0,composed:!0});this.host.dispatchEvent(t)}clear(t){this.control.value!==""&&(t.stopPropagation(),this.control.value="",this.control.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.control.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.control.focus())}handleKeyEvent(t){t.key==="Enter"&&this.search()}handleInputValue(){this.host.toggleAttribute("has-value",this.control.value!=="")}}export{d as S};
