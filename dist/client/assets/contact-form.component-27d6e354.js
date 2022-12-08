import{aL as r,c as t,r as o,aG as s,y as l,_ as i,h as m,aH as p}from"./index-41c5945f.js";import{F as d}from"./form.mixin-9f7e252a.js";import"./component.mixin-da8e468a.js";const n=[{id:"firstName",type:r.TEXT,label:"First Name"},{id:"lastName",type:r.TEXT,label:"Last Name"},{id:"email",type:r.EMAIL,label:"Email",required:!0,width:100}],y=t`
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
`;var e;let a=(e=class extends d(){constructor(){super(...arguments),this.fieldRenderer=o(p)}render(){return l`<form>${this.fieldRenderer.buildForm(n)}</form>`}},(()=>{e.styles=[s,y]})(),e);a=i([m()],a);export{a as ContactFormComponent};
