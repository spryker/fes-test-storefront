import{j as s,m as o,y as a,f as m,_ as g,h}from"./index.4dee5cd5.js";import{C as u}from"./content.controller.2f1fd9c8.js";import{P as C}from"./product.controller.30fcb264.js";import{P as l}from"./product.mixin.0505c424.js";import"./context.controller.c080d1c5.js";import"./component.mixin.d2c5a023.js";let i=class extends l(){constructor(){super(...arguments),this.product$=new C(this).getProduct(),this.options$=new u(this).getOptions(),this.rating$=s([this.product$,this.options$]).pipe(o(([e,r])=>{var n;const t=r!=null&&r.hideReviewCount?void 0:(n=e==null?void 0:e.reviewCount)!=null?n:0;return{rating:e==null?void 0:e.averageRating,reviewCount:t,size:r==null?void 0:r.size}}))}render(){return a`
      ${m(this.rating$,({rating:e,reviewCount:r,size:t})=>a`
          <oryx-rating
            readonly
            .size=${t}
            .value=${e}
            .reviewCount=${r}
          ></oryx-rating>
        `)}
    `}};i=g([h()],i);export{i as ProductAverageRatingComponent};
