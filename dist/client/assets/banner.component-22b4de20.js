import{c as s,j as l,y as t,f as h,K as o,J as n,_ as m,h as c}from"./index-4d2c92b7.js";import{C as g}from"./content.controller-33ee67c3.js";import{C as d}from"./component.mixin-6d7092a2.js";const $=s`
  :host {
    display: flex;
    position: relative;
    width: 100%;
    overflow: hidden;
    color: white;
  }

  a {
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .overlay {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0 5.5rem;
  }

  h1 {
    font-size: 3.125rem;
    line-height: 3rem;
    font-weight: 500;
    margin-bottom: 1.6875rem;
    margin-top: 0;
  }

  h2 {
    font-size: 1.375rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin: 0;
  }
`;let a=class extends d(){constructor(){super(...arguments),this.contentController=new g(this),this.content$=this.contentController.getContent(),this.options$=this.contentController.getOptions(),this.data$=l([this.content$,this.options$])}static{this.styles=$}render(){return t`${h(this.data$,([e,i])=>{const r=t`
        <oryx-image .src=${e?.image} .alt=${i.alt}></oryx-image>
        <div class="overlay">
          ${o(e?.title,()=>t`<h1 aria-label="title">${e?.title}</h1>`)}
          ${o(e?.content,()=>t`<h2>${e?.content}</h2>`)}
        </div>
      `;return t` ${o(i.link,()=>t`<a
          href=${n(i.link)}
          target=${n(i.urlTarget)}
          aria-label=${n(i.linkLabel)}
        >
          ${r}
        </a>`,()=>t`${r}`)}`})}`}};a=m([c()],a);export{a as BannerComponent};
