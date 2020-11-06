const isProduction = process.env.NODE_ENV === 'production';
// const cdn = {
// 	css: [],
// 	js: [
// 		'https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js',
// 		'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
// 		'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
// 		'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
// 	]
// }
//configureWebpack.optimization 配置项
// let optimization = {
// 	runtimeChunk: 'single',
// 	splitChunks: {
// 		chunks: 'all',
// 		maxInitialRequests: Infinity,
// 		minSize: 51200, // 依赖包超过1024bit*50将被单独打包 (50kb)
// 		cacheGroups: {
// 			vendor: {
// 				test: /[\\/]node_modules[\\/]/,
// 				name(module) {
// 					// get the name. E.g. node_modules/packageName/not/this/part.js
// 					// or node_modules/packageName
// 					const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
// 					// npm package names are URL-safe, but some servers don't like @ symbols
// 					return `npm.${packageName.replace('@', '')}`
// 				}
// 			}
// 		}
// 	}
// }

// configureWebpack.externals 配置项
// let externals = {
// 	'vue': 'Vue',
// 	'vuex': 'Vuex',
// 	'vue-router': 'VueRouter',
// 	'axios': 'axios'
// }

module.exports = {
	publicPath: './', // 根域上下文目录
	// configureWebpack: config => {
	// 	if (isProduction) {
	// 		config.mode = 'production'
	// 		Object.assign(config, {
	// 			externals,
	// 			// optimization
	// 		})
	// 	}
	// },
	chainWebpack: config => {
		if (isProduction) {
			config.module
				.rule('images')
				.test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
				.use('url-loader')
				.tap(options => {
					options.limit = 10240
					return options
				});
			// config.plugin('html')
			// 	.tap(args => {
			// 		args[0].cdn = cdn;
			// 		return args;
			// 	});
		}
	},
  // devServer: {
  //   proxy: {
  //     '/ZHYD': {
	// 			target: 'http://fx.hekouxin.com:60',
	// 			changeOrigin: true,
  //     }
  //   }
  // }
}

//  http://fx.hekouxin.com:60/ZHYD/loginto?queryType=authent&userId=15915089824