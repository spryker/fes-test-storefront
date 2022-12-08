import{c as p,d as g,y as u,_ as s,v as a,g as o,aC as m}from"./index-74abacf3.js";import"./common-0ee98dc0.js";import{e as y}from"./input.styles-234f9c42.js";import{E as f}from"./input.component-97e52801.js";import"./screen-c0aae3c9.js";import"./query.util-ea16e59e.js";import"./getControl-b5e3af75.js";var i;(function(l){l.checked="checked",l.unchecked="unchecked",l.partiallyChecked="partiallyChecked"})(i||(i={}));const E=p`
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
`,h=class extends g{constructor(){super(...arguments),this.errorController=new f(this)}updated(){this.handleHeading(),this.handleError()}handleHeading(){var r,t;const e=!!this.heading||!!this.headingSlot.length;(t=(r=this.shadowRoot)==null?void 0:r.querySelector("legend"))==null||t.toggleAttribute("hasHeading",e)}handleError(){const e=!!this.errorMessage||!!this.hasError;Array.from(this.childElements).forEach(r=>{r.toggleAttribute("hasError",e)})}getInputElements(){return[...this.querySelectorAll("* > input:not([slot])")].filter(r=>{var t;return((t=r.parentElement)==null?void 0:t.parentElement)===this})}getGroupStatus(){const e=this.getInputElements(),r=d=>!!d.checked;let t=!0,c=!1;return e.forEach(d=>{r(d)?c=!0:t=!1}),t?i.checked:c?i.partiallyChecked:i.unchecked}updateList(e){this.getInputElements().forEach(t=>{t.checked=e,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}toggle(e){e===void 0&&(e=this.getGroupStatus()!==i.checked),this.updateList(e)}get headingSlot(){return this.querySelectorAll("[slot=heading]")}render(){return u`
      <fieldset>
        <legend>
          <slot name="heading" @slotchange=${this.handleHeading.bind(this)}>
            ${this.heading}
          </slot>
        </legend>
        <slot class="content"></slot>
      </fieldset>
      ${this.errorController.render()}
    `}};let n=h;(()=>{h.styles=[E,y]})();s([a(),o("design:type",String)],n.prototype,"errorMessage",void 0);s([a({type:Boolean}),o("design:type",Boolean)],n.prototype,"hasError",void 0);s([a({reflect:!0}),o("design:type",String)],n.prototype,"direction",void 0);s([a(),o("design:type",String)],n.prototype,"heading",void 0);s([m(),o("design:type",Array)],n.prototype,"childElements",void 0);export{n as InputListComponent};
