import{aL as e,c as a,r as t,aG as o,y as s,_ as l,h as m,aH as i}from"./index-4d2c92b7.js";import{F as p}from"./form.mixin-6776c590.js";import"./component.mixin-6d7092a2.js";const n=[{id:"firstName",type:e.TEXT,label:"First Name"},{id:"lastName",type:e.TEXT,label:"Last Name"},{id:"email",type:e.EMAIL,label:"Email",required:!0,width:100}],d=a`
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
`;let r=class extends p(){constructor(){super(...arguments),this.fieldRenderer=t(i)}static{this.styles=[o,d]}render(){return s`<form>${this.fieldRenderer.buildForm(n)}</form>`}};r=l([m()],r);export{r as ContactFormComponent};
