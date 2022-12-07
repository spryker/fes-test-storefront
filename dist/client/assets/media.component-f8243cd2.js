import{r as s,j as o,m as d,y as i,f as m,_ as c,h as l,aw as u}from"./index-4d2c92b7.js";import{C as g}from"./content.controller-33ee67c3.js";import{P as S}from"./product.controller-77c96ee5.js";import{P as h}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";let n=class extends h(){constructor(){super(...arguments),this.imageService=s(u),this.productMedia$=o([new g(this).getOptions(),new S(this).getProduct()]).pipe(d(([e,t])=>{const a=this.resolveImage(t,e),r=this.imageService.resolveSources(a,e?.containerSize??"detail");return{src:r?.[0]?.url,alt:e?.alt||t?.name,srcset:this.getSrcSet(r),loading:e?.loading}}))}render(){return i`${m(this.productMedia$,e=>i`<oryx-image
          .src=${e.src}
          .srcset=${e.srcset}
          .alt=${e.alt}
          .loading=${e.loading??"lazy"}
        ></oryx-image>`)}`}resolveImage(e,t){return(t.mediaSet?e?.mediaSet?.find(r=>r.name===t.mediaSet):e?.mediaSet?.[0])?.media?.[t?.mediaIndex??0]}getSrcSet(e){if(!(e.length<2))return e.map(t=>t.context?.density?`${t.url} ${t.context?.density}x`:void 0).filter(t=>t).join(",")||void 0}};n=c([l()],n);export{n as ProductMediaComponent};
