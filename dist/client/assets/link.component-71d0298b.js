import{C as a}from"./content.controller-33ee67c3.js";import{r as i,l as s,y as t,J as n,f as l,as as o,j as c,o as d}from"./index-4d2c92b7.js";import{C as m}from"./component.mixin-6d7092a2.js";class f extends m(){constructor(){super(...arguments),this.contentController=new a(this),this.semanticLinkService=i(o),this.options$=this.contentController.getOptions(),this.data$=this.options$.pipe(s(e=>c([this.options$,...!e.type||e.type==="rawUrl"?[d(e.id)]:[this.semanticLinkService.get({type:e.type,id:e.id,params:e.params})]])))}getRel(e){return[e?.noopener&&"noopener",e?.nofollow&&"nofollow"].filter(r=>!!r).join(" ")}renderLink(e,r){return t`
      <a
        part="link"
        href="${e}"
        aria-label="${n(r.label)}"
        target="${n(r.target)}"
        rel="${n(this.getRel(r))}"
        ?disabled=${r?.disabled}
        ><slot>${r?.text}</slot></a
      >
    `}render(){return t`${l(this.data$,([e,r])=>r?e.button?t`<oryx-button
          part="wrapper"
          icon="${n(e.icon?.trim())}"
        >
          ${this.renderLink(r,e)}
        </oryx-button>`:t`<oryx-link
        part="wrapper"
        icon="${n(e.icon?.trim())}"
        ?disabled=${e?.disabled}
      >
        ${this.renderLink(r,e)}
      </oryx-link>`:t``)}`}}export{f as ContentLinkComponent};
