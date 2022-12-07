import{j as i,m as a,y as o,f as s,_ as u,h as m}from"./index-4d2c92b7.js";import{C as p}from"./content.controller-33ee67c3.js";import{P as d}from"./product.controller-77c96ee5.js";import{P as g}from"./product.mixin-69145c94.js";import"./context.controller-abc20265.js";import"./component.mixin-6d7092a2.js";let n=class extends g(){constructor(){super(...arguments),this.product$=new d(this).getProduct(),this.options$=new p(this).getOptions(),this.rating$=i([this.product$,this.options$]).pipe(a(([t,e])=>{const r=e?.hideReviewCount?void 0:t?.reviewCount??0;return{rating:t?.averageRating,reviewCount:r,size:e?.size}}))}render(){return o`
      ${s(this.rating$,({rating:t,reviewCount:e,size:r})=>o`
          <oryx-rating
            readonly
            .size=${r}
            .value=${t}
            .reviewCount=${e}
          ></oryx-rating>
        `)}
    `}};n=u([m()],n);export{n as ProductAverageRatingComponent};
