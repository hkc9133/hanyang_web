const withImages = require("next-images")
const withCSS = require("@zeit/next-css")
const path = require('path');

// module.exports = {
//     images: {
//         domains: ['localhost'],
//     },
// }

module.exports = withCSS(
    withImages({
        webpack(config, options) {
            // config.plugins.push(new CKEditorWebpackPlugin({ language: "ko",addMainLanguageTranslationsToAllAssets: true }));
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
                loader: 'babel-loader',
            })

            config.plugins.push(new webpack.ProvidePlugin({
                'window.Quill': 'quill'
            }))


            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg|eot|otf|ttf|woff|woff2)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name][hash].[ext]',
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                    // outputPath: 'images',
                    esModule: false,
                },
            })

            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg|eot|otf|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        publicPath: '/_next/static/',
                        outputPath: 'static/',
                        name: '[name].[ext]'
                    }
                }
            })


            // config.module.rules.forEach(function (rule, index, array) {
            //     const test = rule.test && rule.test.toString() || ''
            //     if (test.includes('css')) {
            //         array[index] = {
            //             ...rule,
            //             exclude: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/
            //         }
            //     } else if (test.includes('svg')) {
            //         array[index] = {
            //             ...rule,
            //             exclude: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/
            //         }
            //     }
            // })
            //
            // config.module.rules.push({
            //     test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //             options: {
            //                 injectType: 'singletonStyleTag'
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: styles.getPostCssConfig({
            //                 themeImporter: {
            //                     themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
            //                 },
            //                 minify: true
            //             })
            //         }
            //     ]
            // })
            //
            // config.module.rules.push({
            //     test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
            //     use: ['raw-loader']
            // })

            return config
        }
    })
)

module.exports = withImages()
module.exports = {
    images: {
        domains: ['localhost','61.109.248.203','210.103.188.124'],
    },
}


// module.exports = withImages({
//     exclude: path.resolve(__dirname, 'assets/image'),
//     webpack(config, options) {
//         return config
//     }
// })
