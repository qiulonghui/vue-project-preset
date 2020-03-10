module.exports = {
	plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'autoprefixer': {},
    'postcss-px-to-viewport': {
     unitToConvert: 'px',
     viewportWidth: 750,
     unitPrecision: 3,
     viewportUnit: 'vw',
     selectorBlackList: ['.ignore', '.hairlines'],
     minPixelValue: 1,
     mediaQuery: false,
     exclude: [/node_modules/]
    }
  }
}