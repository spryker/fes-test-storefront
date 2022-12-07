import{c as n,d as h,y as a,J as s,_ as r,v as o,g as e}from"./index-4d2c92b7.js";import{t as c}from"./state-464c8ba0.js";const d=n`
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
`;class i extends h{static{this.styles=d}render(){return this.hasFailure()?this.renderFallback():a`<slot>${this.renderImage()}</slot>`}renderFallback(){return a`<oryx-icon type="image" part="fallback"></oryx-icon>`}renderImage(){if(!this.src&&this.renderRoot){const t=this.renderRoot.querySelector("img");t&&this.src!==t?.src&&(this.src=t.src,this.srcset=t.srcset,this.alt=t.alt)}return this.src?a`
      <img
        src=${s(this.src)}
        srcset=${s(this.srcset)}
        alt=${s(this.alt)}
        loading=${s(this.loading)}
        @error=${this.onError}
      />
    `:this.renderFallback()}hasFailure(){return!!this.src&&this.failed===this.src}onError(){this.failed=this.src}}r([o(),e("design:type",String)],i.prototype,"src",void 0);r([o(),e("design:type",String)],i.prototype,"srcset",void 0);r([o(),e("design:type",String)],i.prototype,"alt",void 0);r([o(),e("design:type",String)],i.prototype,"loading",void 0);r([c(),e("design:type",String)],i.prototype,"failed",void 0);export{i as ImageComponent};
