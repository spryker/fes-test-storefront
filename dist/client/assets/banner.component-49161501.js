import{c as h,j as m,y as e,f as g,K as a,J as s,_ as d,h as n}from"./index-41c5945f.js";import{C as $}from"./content.controller-bfde8771.js";import{C as f}from"./component.mixin-da8e468a.js";const p=h`
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
`;var t;let o=(t=class extends f(){constructor(){super(...arguments),this.contentController=new $(this),this.content$=this.contentController.getContent(),this.options$=this.contentController.getOptions(),this.data$=m([this.content$,this.options$])}render(){return e`${g(this.data$,([i,r])=>{const l=e`
        <oryx-image .src=${i==null?void 0:i.image} .alt=${r.alt}></oryx-image>
        <div class="overlay">
          ${a(i==null?void 0:i.title,()=>e`<h1 aria-label="title">${i==null?void 0:i.title}</h1>`)}
          ${a(i==null?void 0:i.content,()=>e`<h2>${i==null?void 0:i.content}</h2>`)}
        </div>
      `;return e` ${a(r.link,()=>e`<a
          href=${s(r.link)}
          target=${s(r.urlTarget)}
          aria-label=${s(r.linkLabel)}
        >
          ${l}
        </a>`,()=>e`${l}`)}`})}`}},(()=>{t.styles=p})(),t);o=d([n()],o);export{o as BannerComponent};
