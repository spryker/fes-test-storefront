import{c,d as p,y as g,_ as i,v as l,g as s,aC as u}from"./index-4d2c92b7.js";import"./common-0ee98dc0.js";import{e as m}from"./input.styles-6d634215.js";import{E as y}from"./input.component-77513b1c.js";import"./screen-c0aae3c9.js";import"./query.util-00243645.js";import"./getControl-ea6b3b29.js";var r;(function(a){a.checked="checked",a.unchecked="unchecked",a.partiallyChecked="partiallyChecked"})(r||(r={}));const f=c`
  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    display: none;
    margin-block-end: 8px;
    color: var(--oryx-color-ink);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }

  legend[hasHeading] {
    display: block;
  }

  .content {
    display: inline-flex;
    gap: 8px;
  }

  :host([direction='vertical']) .content {
    flex-direction: column;
    align-items: start;
  }

  [hasErrorContent] {
    margin-block-start: 1px;
    margin-inline-start: 1px;
  }
`;class o extends p{constructor(){super(...arguments),this.errorController=new y(this)}static{this.styles=[f,m]}updated(){this.handleHeading(),this.handleError()}handleHeading(){const e=!!this.heading||!!this.headingSlot.length;this.shadowRoot?.querySelector("legend")?.toggleAttribute("hasHeading",e)}handleError(){const e=!!this.errorMessage||!!this.hasError;Array.from(this.childElements).forEach(t=>{t.toggleAttribute("hasError",e)})}getInputElements(){return[...this.querySelectorAll("* > input:not([slot])")].filter(t=>t.parentElement?.parentElement===this)}getGroupStatus(){const e=this.getInputElements(),t=d=>!!d.checked;let n=!0,h=!1;return e.forEach(d=>{t(d)?h=!0:n=!1}),n?r.checked:h?r.partiallyChecked:r.unchecked}updateList(e){this.getInputElements().forEach(n=>{n.checked=e,n.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}toggle(e){e===void 0&&(e=this.getGroupStatus()!==r.checked),this.updateList(e)}get headingSlot(){return this.querySelectorAll("[slot=heading]")}render(){return g`
      <fieldset>
        <legend>
          <slot name="heading" @slotchange=${this.handleHeading.bind(this)}>
            ${this.heading}
          </slot>
        </legend>
        <slot class="content"></slot>
      </fieldset>
      ${this.errorController.render()}
    `}}i([l(),s("design:type",String)],o.prototype,"errorMessage",void 0);i([l({type:Boolean}),s("design:type",Boolean)],o.prototype,"hasError",void 0);i([l({reflect:!0}),s("design:type",String)],o.prototype,"direction",void 0);i([l(),s("design:type",String)],o.prototype,"heading",void 0);i([u(),s("design:type",Array)],o.prototype,"childElements",void 0);export{o as InputListComponent};
