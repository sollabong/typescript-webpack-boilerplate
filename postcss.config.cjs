module.exports = {
  module: true,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-media': {},
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-simple-vars': {},
    'postcss-url': {
      url: 'inline',
    },
  },
  url: false,
};
