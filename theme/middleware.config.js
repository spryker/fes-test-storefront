import { config } from 'dotenv';

config();

module.exports = {
  integrations: {
    spryker: {
      location: '@spryker-vsf/api/server',
      configuration: {
        axiosConfig: {
          baseURL:
            process.env.GLUE_BASE_URL ||
            process.env.API_URL ||
            'http://glue.de.spryker.local',
        },
        currency: process.env.CURRENCY_DEFAULT || 'EUR',
        locale: process.env.LOCALE_DEFAULT || 'en_US',
      },

      extensions: (extensions) => [
        ...extensions,
        require('@spryker-vsf/catalog-search-suggestions/extension'),
        require('@spryker-vsf/oidc-client/extension'),
        require('@spryker-vsf/oidc/extension'),
      ],
    },
  },
};
