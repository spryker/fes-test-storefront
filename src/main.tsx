import { DOMAttributes } from 'react';

import { appBuilder } from '@spryker-oryx/application';
import { AppFeature } from '@spryker-oryx/core';
import { resolve } from '@spryker-oryx/di';
import { provideExperienceData } from '@spryker-oryx/experience';
import { colorPalette } from '@spryker-oryx/experience';
import { ExperienceStaticData } from '@spryker-oryx/experience';
import { storefrontFeatures } from '@spryker-oryx/presets';
import { BASE_ROUTE } from '@spryker-oryx/router';
import { storefrontTheme } from '@spryker-oryx/themes';

import welcome from '@/utils/welcome';

// Root contains the main dependencies and providers of the base app
//  - React, ReactDom, RecoilRoot, HelmetProvider, ThemeProvider, MUI-core)
// App contains the main structure of the base app

// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: unknown;
    }
  }
}

appBuilder()
  .withFeature([
    ...storefrontFeatures,
    {
      providers: [
        { provide: BASE_ROUTE, useValue: '/page-3' },
        {
          provide: ExperienceStaticData,
          useValue: [{ id: 'header' }, { id: 'footer' }],
        },
      ],
    },
  ])
  .withTheme([
    storefrontTheme,
    // {
    //   designTokens: [
    //     {
    //       color: {
    //         primaryA: colorPalette.colors.sky,
    //         secondaryA: colorPalette.colors.crimson,
    //       },
    //     },
    //   ],
    // },
  ])
  .withAppOptions({ components: { root: 'body' } })
  // .withOptions({
  //   'oryx-cart-entries': {
  //     notifyOnUpdate: true,
  //   },
  //   'oryx-cart-entry': {
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
