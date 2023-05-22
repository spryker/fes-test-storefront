import welcome from '@/utils/welcome';

// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'root-app': React.DetailedHTMLProps<
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
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
        >;
    }
  }
}

import { appBuilder } from '@spryker-oryx/application';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

appBuilder()
  .withFeature(b2cFeatures)
  .withTheme(storefrontTheme)
  .withAppOptions({ components: { root: 'body' } })
  .withEnvironment(import.meta.env)
  .create();

Promise.all([import('@/Root'), import('@/App')]).then(([{ default: render }, { default: App }]) => {
  render(App);
});

// welcome message for users in the console
welcome();

// ts(1208)
export {};
