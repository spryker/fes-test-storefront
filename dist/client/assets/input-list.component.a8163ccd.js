import{c,d as p,y as g,_ as o,v as a,g as s,aD as u}from"./index.dab5f70a.js";import"./common.49548711.js";import{e as m}from"./input.styles.0ca2fca3.js";import{E as y}from"./input.component.73ae1729.js";import"./screen.63347f27.js";import"./query.util.1f8bf822.js";import"./getControl.09b98a01.js";var n;(function(l){l.checked="checked",l.unchecked="unchecked",l.partiallyChecked="partiallyChecked"})(n||(n={}));const f=c`
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
`;class i extends p{constructor(){super(...arguments),this.errorController=new y(this)}updated(){this.handleHeading(),this.handleError()}handleHeading(){var r,t;const e=!!this.heading||!!this.headingSlot.length;(t=(r=this.shadowRoot)==null?void 0:r.querySelector("legend"))==null||t.toggleAttribute("hasHeading",e)}handleError(){const e=!!this.errorMessage||!!this.hasError;Array.from(this.childElements).forEach(r=>{r.toggleAttribute("hasError",e)})}getInputElements(){return[...this.querySelectorAll("* > input:not([slot])")].filter(r=>{var t;return((t=r.parentElement)==null?void 0:t.parentElement)===this})}getGroupStatus(){const e=this.getInputElements(),r=d=>!!d.checked;let t=!0,h=!1;return e.forEach(d=>{r(d)?h=!0:t=!1}),t?n.checked:h?n.partiallyChecked:n.unchecked}updateList(e){this.getInputElements().forEach(t=>{t.checked=e,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}toggle(e){e===void 0&&(e=this.getGroupStatus()!==n.checked),this.updateList(e)}get headingSlot(){return this.querySelectorAll("[slot=heading]")}render(){return g`
      <fieldset>
        <legend>
          <slot name="heading" @slotchange=${this.handleHeading.bind(this)}>
            ${this.heading}
          </slot>
        </legend>
        <slot class="content"></slot>
      </fieldset>
      ${this.errorController.render()}
    `}}i.styles=[f,m];o([a(),s("design:type",String)],i.prototype,"errorMessage",void 0);o([a({type:Boolean}),s("design:type",Boolean)],i.prototype,"hasError",void 0);o([a({reflect:!0}),s("design:type",String)],i.prototype,"direction",void 0);o([a(),s("design:type",String)],i.prototype,"heading",void 0);o([u(),s("design:type",Array)],i.prototype,"childElements",void 0);export{i as InputListComponent};
