import{c as s,d as l,y as i,O as d,_ as t,v as r,g as n}from"./index.65290630.js";var a;(function(e){e.Link="link",e.ExternalLink="external"})(a||(a={}));const c=s`
  :host {
    --oryx-icon-size: 16px;

    display: inline-flex;
    align-items: center;
    color: var(--oryx-color-primary-300);
  }

  oryx-icon,
  ::slotted(oryx-icon) {
    position: absolute;
    padding-inline-start: 8px;
    color: inherit;
    pointer-events: none;
  }

  ::slotted(a) {
    border-radius: var(--oryx-border-radius-large);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 8px;
    text-decoration: none;
    outline: 0;
    border: solid 1px transparent;
    color: currentColor;
  }

  :host([disabled]) {
    pointer-events: none;
    color: var(--oryx-color-neutral-300);
  }

  :host(:hover:not([disabled])) {
    color: var(--oryx-color-primary-400);
  }

  :host(:not([disabled])) ::slotted(a:active),
  :host(:not([disabled])) ::slotted(a:focus-visible) {
    background-color: var(--oryx-color-canvas-200);
  }

  :host(:not([disabled])) ::slotted(a:active) {
    border: solid 1px var(--oryx-color-canvas-100);
  }

  :host(:not([disabled])) ::slotted(a:focus-visible) {
    box-shadow: 0 0 3px var(--oryx-color-primary-300);
  }

  /* additional space at the start whenever an icon is available */
  :host([icon]) ::slotted(a),
  :host([custom-icon]) ::slotted(a) {
    padding-inline-start: 32px;
  }

  :host([linktype='external']:not([disabled])) {
    color: var(--oryx-color-neutral-400);
  }

  :host([linktype='external']:hover) {
    color: var(--oryx-color-ink);
  }
`;class o extends l{render(){return i`
      <slot name="icon">
        ${d(this.icon,()=>i`<oryx-icon .type=${this.icon}></oryx-icon>`)}
      </slot>
      <slot></slot>
    `}}o.styles=c;t([r({reflect:!0}),n("design:type",String)],o.prototype,"linkType",void 0);t([r({type:Boolean,reflect:!0}),n("design:type",Boolean)],o.prototype,"disabled",void 0);t([r({reflect:!0}),n("design:type",Object)],o.prototype,"icon",void 0);export{o as LinkComponent};
