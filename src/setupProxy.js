const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/v2/list_movies.json', '/v2/movie_details.json'], 
    createProxyMiddleware({
      target: 'https://yts.mx/api',
      changeOrigin: true,
    }),
  );
};