import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

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
  .create();

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
