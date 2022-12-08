import{j as i,m as s,y as n,f as o,_ as m,h as g}from"./index-41c5945f.js";import{C as h}from"./content.controller-bfde8771.js";import{P as u}from"./product.controller-987132f0.js";import{P as C}from"./product.mixin-b8d036c1.js";import"./context.controller-8c8608f3.js";import"./component.mixin-da8e468a.js";let a=class extends C(){constructor(){super(...arguments),this.product$=new u(this).getProduct(),this.options$=new h(this).getOptions(),this.rating$=i([this.product$,this.options$]).pipe(s(([e,r])=>{const t=r!=null&&r.hideReviewCount?void 0:(e==null?void 0:e.reviewCount)??0;return{rating:e==null?void 0:e.averageRating,reviewCount:t,size:r==null?void 0:r.size}}))}render(){return n`
      ${o(this.rating$,({rating:e,reviewCount:r,size:t})=>n`
          <oryx-rating
            readonly
            .size=${t}
            .value=${e}
            .reviewCount=${r}
          ></oryx-rating>
        `)}
    `}};a=m([g()],a);export{a as ProductAverageRatingComponent};
