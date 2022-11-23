import { appBuilder, Theme } from '@spryker-oryx/core';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

const customTheme: Theme = {
  name: 'custom',
  designTokens: [
    {
      color: {
        brand: 'red',
      },
    },
  ],
};

export const app = appBuilder()
  .withFeature(b2cFeatures)
  .withTheme([storefrontTheme, customTheme])
  .create();
