module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Andrey/' : '/',
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: "@import '@/design/index.scss';",
      },
    },
  },
};
