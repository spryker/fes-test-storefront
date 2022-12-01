import{c as o,j as h,y as e,f as m,K as t,J as a,_ as n,h as g}from"./index.4dee5cd5.js";import{C as d}from"./content.controller.2f1fd9c8.js";import{C as $}from"./component.mixin.d2c5a023.js";const f=o`
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
`;let s=class extends $(){constructor(){super(...arguments),this.contentController=new d(this),this.content$=this.contentController.getContent(),this.options$=this.contentController.getOptions(),this.data$=h([this.content$,this.options$])}render(){return e`${m(this.data$,([i,r])=>{const l=e`
        <oryx-image .src=${i==null?void 0:i.image} .alt=${r.alt}></oryx-image>
        <div class="overlay">
          ${t(i==null?void 0:i.title,()=>e`<h1 aria-label="title">${i==null?void 0:i.title}</h1>`)}
          ${t(i==null?void 0:i.content,()=>e`<h2>${i==null?void 0:i.content}</h2>`)}
        </div>
      `;return e` ${t(r.link,()=>e`<a
          href=${a(r.link)}
          target=${a(r.urlTarget)}
          aria-label=${a(r.linkLabel)}
        >
          ${l}
        </a>`,()=>e`${l}`)}`})}`}};s.styles=f;s=n([g()],s);export{s as BannerComponent};
