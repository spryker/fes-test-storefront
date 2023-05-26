import welcome from '@/utils/welcome';
import {appBuilder} from '@spryker-oryx/application';
import {storefrontFeatures} from '@spryker-oryx/presets';
import {storefrontTheme} from '@spryker-oryx/themes';
import {AppFeature} from "@spryker-oryx/core";
import {resolve} from "@spryker-oryx/di";
import {BASE_ROUTE} from "@spryker-oryx/router";
import {provideExperienceData} from '@spryker-oryx/experience';

// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'oryx-app': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
        >;
      'oryx-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
        >;
      'oryx-color-mode-selector': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
        >;
      'oryx-rating': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
        >;
      'oryx-site-navigation-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement | { uid: string }>,
        HTMLElement
        >;
    }
  }
}

const oryxStoreForPWA: AppFeature = {
  providers: [
    {
      provide: BASE_ROUTE,
      useValue: '/page-3',
    },
    provideExperienceData([
      // we could reuse SearchPage from presets and just override meta.route, but un
      // unfortunately it's not exported from presets (sth to fix)
      {
        type: 'Page',
        meta: {
          title: 'Search',
          route: '/',
          description: 'Default Search Page Description',
        },
        options: {
          data: {
            rules: [
              {
                layout: 'split-aside',
                padding: '30px 0 0',
              },
              { breakpoint: 'md', splitColumnFactor: 1 / 3 },
            ],
          },
        },
        components: [
          {
            type: 'search-facet-navigation',
            options: {
              data: {
                rules: [{ sticky: true, top: '108' }],
              },
            },
          },
          {
            type: 'experience-composition',
            options: {
              data: { rules: [{ layout: 'flex', vertical: true, gap: '20px' }] },
            },
            components: [
              {
                type: 'experience-composition',
                components: [{ type: 'search-product-sort' }],
                options: { data: { rules: [{ layout: 'flex', justify: 'end' }] } },
              },
              {
                type: 'oryx-product-list',
                options: {
                  data: { rules: [{ layout: 'grid', gap: '30px' }] },
                },
              },
              {
                type: 'oryx-search-pagination',
                options: { data: { rules: [{ margin: '0 auto 20px' }] } },
              },
            ],
          },
        ],
      }
      ,
      {
        id: 'mini-cart',
        type: 'oryx-site-navigation-item',
        options: {
          data: {
            label: 'cart',
            badge: 'CART.SUMMARY',
            icon: 'cart',
            url: { type: 'cart' },
          },
        },
      },
      {
        id: 'header',
        type: 'Page',
        meta: { title: 'Header', route: '/_header' },
        components: [
          {
            type: 'experience-composition',
            name: 'Composition',
            components: [],
          },
        ],
      },
      {
        id: 'footer',
        type: 'Page',
        meta: { title: 'Footer', route: '/_footer' },
        components: [],
      },
    ]),
  ]
}

appBuilder()
  .withFeature(storefrontFeatures)
  .withFeature(oryxStoreForPWA)
  .withTheme(storefrontTheme)
  .withAppOptions({ components: { root: 'body' } })
  // .withOptions({
  //   "oryx-cart-entries": {
  //     notifyOnUpdate: true,
  //   },
  //   "oryx-cart-entry": {
  //     notifyOnUpdate: true,
  //   },
  // })
  .withEnvironment(import.meta.env)
  .create();

Promise.all([import('@/Root'), import('@/App')]).then(([{ default: render }, { default: App }]) => {
  render(App);
});

// welcome message for users in the console
welcome();

// ts(1208)
export {};
