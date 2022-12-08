import{aP as e,c as a,r as t,y as o,aK as s,_ as l,h as m,aL as i}from"./index.65290630.js";import{F as p}from"./form.mixin.0d8e56f5.js";import"./component.mixin.d9d48422.js";const n=[{id:"firstName",type:e.TEXT,label:"First Name"},{id:"lastName",type:e.TEXT,label:"Last Name"},{id:"email",type:e.EMAIL,label:"Email",required:!0,width:100}],d=a`
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
