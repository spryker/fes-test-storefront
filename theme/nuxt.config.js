import webpack from 'webpack';

export default {
  head: {
    title: 'Spryker VSF',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'preload',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
        as: 'style',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap',
        media: 'print',
        onload: "this.media='all'",
        once: true,
      },
    ],
  },
  loading: { color: '#fff' },
  plugins: [],
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      '@vue-storefront/nuxt',
      {
        // @core-development-only-start
        coreDevelopment: true,
        // @core-development-only-end
        useRawSource: {
          dev: [
            '@spryker-vsf/oidc-client',
            '@spryker-vsf/oidc',
            '@spryker-vsf/catalog-search-suggestions',
            '@spryker-vsf/composables',
            '@spryker-vsf/api',
            '@vue-storefront/core',
          ],
          prod: [
            '@spryker-vsf/oidc-client',
            '@spryker-vsf/oidc',
            '@spryker-vsf/catalog-search-suggestions',
            '@spryker-vsf/composables',
            '@spryker-vsf/api',
            '@vue-storefront/core',
          ],
        },
      },
    ],
    // @core-development-only-start
    [
      '@vue-storefront/nuxt-theme',
      {
        generate: {
          replace: {
            apiClient: '@spryker-vsf/api',
            composables: '@spryker-vsf/composables',
            catalogSearchSuggestions: '@spryker-vsf/catalog-search-suggestions',
            oidcCient: '@spryker-vsf/oidc-client',
            oidc: '@spryker-vsf/oidc',
          },
        },
      },
    ],
    // @core-development-only-end
    /* project-only-start
        ['@vue-storefront/nuxt-theme'],
        project-only-end */
    '@spryker-vsf/catalog-search-suggestions/nuxt',
    [
      '@spryker-vsf/oidc-client/nuxt',
      {
        providers: {
          spryker: {
            clientId: 'clientId',
            authUri: 'http://localhost:3000/auth',
            tokenUri: 'https://glue.de.spryker.local/token',
            publicKey:
              'Environment public key Example: -----BEGIN PUBLIC KEY----- ...',
            enablePkce: true,
          },
        },
      },
    ],
    [
      '@spryker-vsf/oidc/nuxt',
      {
        /**
        forgotPasswordLink: '/...forgotten password form path',
        registrationLink: '/...registration form path',
        authRoute: {
          path: '/...route path',
          component: '/...component path'
        }
        */
      },
    ],
    [
      '@spryker-vsf/composables/nuxt',
      {
        i18n: {
          useNuxtI18nModule: true,
        },
        storage: {
          type: 'browser',
          storageType: 'local',
        },

        /**
         * confirmRegistration
         * (null to disable)
         */
        // confirmRegistration: {
        //   route: '...',
        //   paramKey: '...',
        //   redirectUrl: '...'
        // },

        /**
         * restorePassword
         * (null to disable)
         */
        // restorePassword: {
        //   route: '...',
        //   paramKey: '...',
        //   redirectUrl: '...'
        // },
      },
    ],
  ],
  modules: [
    '@vue-storefront/middleware/nuxt',
    'vue-scrollto/nuxt',
    'nuxt-i18n',
    'cookie-universal-nuxt',
  ],
  publicRuntimeConfig: {
    // middlewareUrl: 'http://localhost:8181',
    spryker: {
      currency: {
        default: process.env.CURRENCY_DEFAULT || 'EUR',
        options: process.env.CURRENCIES
          ? process.env.CURRENCIES.split(',').map((currency) => ({
              name: currency,
              label: currency,
            }))
          : [],
      },
      store: process.env.STORE || 'DE',
      priceMode: process.env.PRICE_MODE || 'GROSS_MODE',
      enabledLocales: process.env.LOCALES ? process.env.LOCALES.split(',') : [],
    },
  },
  i18n: {
    currency: 'USD',
    country: 'US',
    countries: [
      { name: 'US', label: 'United States', states: ['California', 'Nevada'] },
      { name: 'AT', label: 'Austria' },
      { name: 'DE', label: 'Germany' },
      { name: 'NL', label: 'Netherlands' }
    ],
    currencies: [
      { name: 'EUR', label: 'Euro' },
      { name: 'USD', label: 'Dollar' }
    ],
    locales: [
      { code: 'en', label: 'English', file: 'en.js', iso: 'en' },
      { code: 'de', label: 'German', file: 'de.js', iso: 'de' }
    ],
    defaultLocale: 'en',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
          }
        },
        de: {
          currency: {
            style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
          }
        }
      }
    },
    detectBrowserLanguage: {
      cookieKey: 'vsf-locale',
      fallbackLocale: 'en_US',
    },
  },
  styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()],
      }),
    ],
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require(process.env.PACKAGE_PATH_FOR_NUXT_CONFIG || './package.json').version,
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
  },
  router: {
    middleware: ['checkout'],
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
};
