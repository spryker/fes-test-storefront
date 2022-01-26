const serverless = require('serverless-http');
const config = require('../../config');
const { Nuxt } = require('nuxt-start');

exports.handler = async function (event, ctx, callback) {
  const nuxt = new Nuxt({
    ...config,
    dev: false,
    _start: true,
  });

  let server = null;

  if (!server) {
    await nuxt?.ready();
    server = serverless(nuxt.server.app);
  }

  const result = await server(event, ctx, callback);
  const cacheValue = event.queryStringParameters.ebPreview
    ? 'no-cache'
    : 'public, max-age=31536000';

  return {
    ...result,
    headers: {
      ...result.headers,
      'Cache-Control': cacheValue,
    },
  };
};
