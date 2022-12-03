import{c as o,d as n,y as a,J as i,_ as r,v as s,g as e}from"./index.571dc3d3.js";import{t as d}from"./state.62f02930.js";const h=o`
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
`;class t extends n{render(){return this.hasFailure()?this.renderFallback():a`<slot>${this.renderImage()}</slot>`}renderFallback(){return a`<oryx-icon type="image" part="fallback"></oryx-icon>`}renderImage(){return this.src?a`
      <img
        src=${i(this.src)}
        srcset=${i(this.srcset)}
        alt=${i(this.alt)}
        loading=${i(this.loading)}
        @error=${this.onError}
      />
    `:this.renderFallback()}hasFailure(){return!!this.src&&this.failed===this.src}onError(){this.failed=this.src}}t.styles=h;r([s(),e("design:type",String)],t.prototype,"src",void 0);r([s(),e("design:type",String)],t.prototype,"srcset",void 0);r([s(),e("design:type",String)],t.prototype,"alt",void 0);r([s(),e("design:type",String)],t.prototype,"loading",void 0);r([d(),e("design:type",String)],t.prototype,"failed",void 0);export{t as ImageComponent};
//# sourceMappingURL=image.component.568d664a.js.map
