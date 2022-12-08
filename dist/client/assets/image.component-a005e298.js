import{c,d,y as o,J as e,_ as i,v as a,g as s}from"./index-41c5945f.js";import{t as n}from"./state-2f3bc3a1.js";const l=c`
  :host {
    --oryx-icon-size: 100px;
  }

  ::slotted(svg) {
    height: 100%;
    width: 100%;
  }

  [part='fallback'] {
    color: var(--oryx-color-neutral-300);
    margin: auto;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    max-width: var(--image-max-width, 100%);
    max-height: var(--image-max-height, 100%);
    object-fit: var(--image-fit, contain);
  }
`,h=class extends d{render(){return this.hasFailure()?this.renderFallback():o`<slot>${this.renderImage()}</slot>`}renderFallback(){return o`<oryx-icon type="image" part="fallback"></oryx-icon>`}renderImage(){if(!this.src&&this.renderRoot){const t=this.renderRoot.querySelector("img");t&&this.src!==(t==null?void 0:t.src)&&(this.src=t.src,this.srcset=t.srcset,this.alt=t.alt)}return this.src?o`
      <img
        src=${e(this.src)}
        srcset=${e(this.srcset)}
        alt=${e(this.alt)}
        loading=${e(this.loading)}
        @error=${this.onError}
      />
    `:this.renderFallback()}hasFailure(){return!!this.src&&this.failed===this.src}onError(){this.failed=this.src}};let r=h;(()=>{h.styles=l})();i([a(),s("design:type",String)],r.prototype,"src",void 0);i([a(),s("design:type",String)],r.prototype,"srcset",void 0);i([a(),s("design:type",String)],r.prototype,"alt",void 0);i([a(),s("design:type",String)],r.prototype,"loading",void 0);i([n(),s("design:type",String)],r.prototype,"failed",void 0);export{r as ImageComponent};
