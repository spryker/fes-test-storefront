const serverless = require('serverless-http');
const { Nuxt } = require('nuxt-start');
const config = require('../../nuxt.config');
const { builder } = require('@netlify/functions');

function createNuxtHandler(nuxtConfig) {
  const nuxt = new Nuxt({
    ...nuxtConfig,
    dev: false,
    _start: true,
  });

  let server = null;
  return async (event, ctx) => {
    if (!server) {
      await nuxt?.ready();
      server = serverless(nuxt.server.app);
    }

    const result = await server(event, ctx);
    // const cacheValue = event.queryStringParameters.ebPreview
    //   ? 'no-cache'
    //   : 'public, max-age=31536000';
    //
    // return {
    //   ...result,
    //   headers: {
    //     ...result.headers,
    //     'Cache-Control': cacheValue,
    //   },
    // };
    return result;
  };
}

exports.handler = builder(createNuxtHandler(config));
