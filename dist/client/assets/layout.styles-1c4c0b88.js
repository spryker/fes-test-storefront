import{m as s,l,s as i}from"./screen-c0aae3c9.js";import{c as o,z as t}from"./index-4d2c92b7.js";const n=o`
  @layer layout {
    :host {
      --oryx-layout-height: auto;

      display: flex;
      flex-direction: column;
      gap: var(--oryx-layout-gap);
      align-items: flex-start;
      margin: var(--oryx-layout-margin, 0);
      padding: var(--oryx-layout-padding, 0);
      width: 100%;
    }

    :host,
    :host([class*='-layout-']) > * {
      box-sizing: border-box;
      min-width: 0;
      height: auto;
    }

    :host([class*='-layout-']) > * {
      width: 100%;
      height: var(--oryx-layout-height, 100%);
    }

    :host([class*='-layout-']) > *[class*='has-padding'] {
      padding: var(--oryx-layout-padding, 0);
    }

    :host([class*='-layout-']) > *[class*='has-margin'] {
      margin: var(--oryx-layout-margin, 0);
      width: calc(100% - (var(--oryx-layout-margin, 0px) * 2));
      height: calc(
        var(--oryx-layout-height, 100%) - (var(--oryx-layout-margin, 0px) * 2)
      );
    }
  }
`,y=o`
  :host {
    --oryx-layout-item-count: 2;
  }
`,e=o`
  :host {
    --oryx-layout-item-count: 4;
  }
`,c=[{media:s,css:y},{media:l,css:e}],u=a=>o`
  :host(.${t(a)}-layout-carousel) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    align-items: stretch;
  }

  :host(.${t(a)}-layout-carousel) > * {
    scroll-snap-align: start;
    flex: 0 0
      var(
        --oryx-layout-item-width,
        calc(
          (100% / var(--oryx-layout-item-count, 1) * var(--oryx-layout-span, 1)) -
            (
              var(--oryx-layout-gap, 0px) *
                (var(--oryx-layout-item-count, 1) - 1) /
                (var(--oryx-layout-item-count, 1) * var(--oryx-layout-span, 1)) +
                var(--oryx-layout-margin, 0px) * 2
            )
        )
      );
  }
`,m=a=>o`
  :host(.${t(a)}-layout-column) {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: row;
  }
`,x=o`
  :host([class*='-container']:not([class*='-jumbotron'])) {
    margin: auto;
    max-width: min(100%, var(--oryx-container-width));
  }

  :host([class*='-container'][class*='-has-margin']:not([class*='-jumbotron'])) {
    margin: var(--oryx-layout-margin, 0px)
      calc(
        (100% - min(var(--oryx-container-width), 100%)) / 2 +
          (2 * var(--oryx-layout-margin, 0px))
      );
  }

  :host([class*='-container'][class*='-jumbotron'][class*='-has-margin']) {
    padding-inline: calc(
      ((100% - var(--oryx-container-width)) / 2) +
        (2 * var(--oryx-layout-margin, 0px))
    );
  }

  :host([class*='-container'][class*='-jumbotron']) {
    padding-inline: calc((100% - var(--oryx-container-width)) / 2);
  }
`,h=a=>o`
  :host(.${t(a)}-layout-grid) {
    display: grid;
    grid-template-rows: repeat(auto-fit, var(--oryx-layout-height));
    grid-auto-rows: var(--oryx-layout-height, minmax(min-content, max-content));
    grid-template-columns: repeat(var(--oryx-layout-item-count, 1), 1fr);
  }

  :host(.${t(a)}-layout-grid) > * {
    grid-column: span
      min(var(--oryx-layout-span, 1), var(--oryx-layout-item-count, 1));
  }
`,g=a=>o`
  .${t(a)}-sticky {
    position: sticky;
    top: 0px;
    height: 0% !important;
  }
`,r=a=>o`
  @layer layout {
    ${g(a)}
    ${m(a)}
    ${h(a)}
    ${u(a)}
  }
`,v=[n,x],w=[...c,{media:i,css:r("sm")},{media:s,css:r("md")},{media:l,css:r("lg")}];export{y as a,n as b,e as c,c as d,u as e,m as f,x as g,h,w as i,v as l,g as s};
