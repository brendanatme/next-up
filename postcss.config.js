module.exports = {
  plugins: [ // Illustrational
    require('postcss-easy-import')({prefix: '_'}),
    require('autoprefixer')({}),
    require('postcss-flexbugs-fixes')
  ]
};
