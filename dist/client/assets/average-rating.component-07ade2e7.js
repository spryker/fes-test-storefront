import{j as i,m as s,y as n,f as o,_ as m,h as g}from"./index-74abacf3.js";import{C as h}from"./content.controller-bfcf20c7.js";import{P as u}from"./product.controller-b8cabd6e.js";import{P as C}from"./product.mixin-c69d7d06.js";import"./context.controller-7e0d2701.js";import"./component.mixin-ae2cf780.js";let a=class extends C(){constructor(){super(...arguments),this.product$=new u(this).getProduct(),this.options$=new h(this).getOptions(),this.rating$=i([this.product$,this.options$]).pipe(s(([e,r])=>{const t=r!=null&&r.hideReviewCount?void 0:(e==null?void 0:e.reviewCount)??0;return{rating:e==null?void 0:e.averageRating,reviewCount:t,size:r==null?void 0:r.size}}))}render(){return n`
      ${o(this.rating$,({rating:e,reviewCount:r,size:t})=>n`
          <oryx-rating
            readonly
            .size=${t}
            .value=${e}
            .reviewCount=${r}
          ></oryx-rating>
        `)}
    `}};a=m([g()],a);export{a as ProductAverageRatingComponent};
