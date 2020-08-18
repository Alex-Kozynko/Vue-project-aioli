module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/styles/main.scss";`
            }
        }
    },
    pluginOptions: {
        svgSprite: {
            dir: 'src/assets/img/icons'
        },
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }]
    },
    chainWebpack: config => {
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')
    },
};
