import{aM as e,c as a,r as t,y as o,aH as s,_ as l,h as m,aI as i}from"./index.dab5f70a.js";import{F as p}from"./form.mixin.fb01b1d4.js";import"./component.mixin.bb013c5d.js";const n=[{id:"firstName",type:e.TEXT,label:"First Name"},{id:"lastName",type:e.TEXT,label:"Last Name"},{id:"email",type:e.EMAIL,label:"Email",required:!0,width:100}],d=a`
  :host {
    --oryx-layout-gap: 20px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--oryx-layout-gap);
  }

  form .w50 {
    flex: 1 0 calc(50% - calc(var(--oryx-layout-gap) / 2));
  }
`;let r=class extends p(){constructor(){super(...arguments),this.fieldRenderer=t(i)}render(){return o`<form>${this.fieldRenderer.buildForm(n)}</form>`}};r.styles=[s,d];r=l([m()],r);export{r as ContactFormComponent};