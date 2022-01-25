import webpack from 'webpack';

const currencies = process.env.CURRENCIES
  ? process.env.CURRENCIES.split(',').map((currency) => ({
      name: currency,
      label: currency,
    }))
  : ['USD'];

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
        rel: 'stylesheet',
        href: 'fonts.css'
      }
    ],
  },
  loading: { color: '#fff' },
  plugins: [
    '~/plugins/injector.js',
    '~/plugins/component-register.js',
    '~/plugins/xmlissue.server.js',
  ],
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
    ['@vue-storefront/nuxt-theme'],
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
    '@spryker-vsf/oidc/nuxt',
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
      contentBackendUrl:
        process.env.CONTENT_BACKEND_URL || 'https://eb-demo-server.herokuapp.com',
      currency: {
        default: process.env.CURRENCY_DEFAULT || 'USD',
        options: currencies,
      },
      store: process.env.STORE || 'DE',
      priceMode: process.env.PRICE_MODE || 'GROSS_MODE',
      enabledLocales: process.env.LOCALES ? process.env.LOCALES.split(',') : ['en_US','de_DE'],
    },
  },
  i18n: {
    country: process.env.COUNTRY || 'DE',
    currency: process.env.CURRENCY || 'USD',
    currencies,
    locales: [
      { code: 'en_US', iso: 'en_US', label: 'English', file: 'en.js' },
      { code: 'de_DE', iso: 'de_DE', label: 'German', file: 'de.js' },
    ],
    defaultLocale: process.env.LOCALE_DEFAULT || 'en_US',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: process.env.LOCALE_DEFAULT || 'en_US',
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
      require.resolve('./assets/styles.scss', {
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
          version: require(process.env.PACKAGE_PATH_FOR_NUXT_CONFIG ||
            './package.json').version,
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
  serverMiddleware: ['~/serverMiddleware/previewModeSSR'],
};
