/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested')(),
    require('autoprefixer')(),
    require('postcss-preset-env')({
      stage: 4,
    }),
  ],
};