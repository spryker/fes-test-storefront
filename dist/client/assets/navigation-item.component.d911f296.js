import{c as e,d as i,y as o,_ as n,v as a,g as r}from"./index.dab5f70a.js";const s=e`
  :host {
    color: var(--oryx-color-neutral-300);
    display: flex;
    box-sizing: border-box;
    padding: 16px 17px;
    gap: 13px;
    outline: none;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 250px;
    transition: all var(--oryx-transition-time);
    padding-inline-start: calc((var(--navigation-collapsed) * 19px) + 17px);
  }

  :host-context([collapsed]) {
    padding-inline-start: 35px;
  }

  .text {
    display: flex;
    transition: all var(--oryx-transition-time);
    opacity: calc((var(--navigation-collapsed) - 1) * -1);
  }

  :host([active]:not([active='false'])) {
    color: var(--oryx-color-primary-300);
    pointer-events: none;
  }

  :host([active]:not([active='false']))::before {
    content: '';
    background-color: var(--oryx-color-primary-300);
    position: absolute;
    inset-inline-start: 0;
    height: 36px;
    width: 4px;
    border-radius: 4px;
  }

  ::slotted(*) {
    display: contents;
    text-decoration: none;
    color: inherit;
  }

  ::slotted(oryx-icon) {
    border: solid 1px blue;
  }
`;class t extends i{render(){return o`
      <slot name="icon">
        ${this.icon?o`<oryx-icon .type=${this.icon}></oryx-icon>`:o``}
      </slot>
      <slot class="text"></slot>
    `}}t.styles=[s];n([a(),r("design:type",String)],t.prototype,"icon",void 0);export{t as NavigationItemComponent};
