const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV
const MODE = NODE_ENV !== 'development' ? 'production' : 'development'
process.env.BABEL_ENV = MODE;

const NODE_MODULES = path.join(__dirname, 'node_modules')
const SRC = path.join(__dirname, 'src')
// const DIST = path.join(__dirname, 'dist')

const config = {
    mode: MODE,

    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: [
        '@babel/polyfill',
        SRC
    ],

    output: {
        // path: DIST,
        chunkFilename: '[name].[chunkhash:4].js',
        filename: '[name].[chunkhash:4].js',
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                include: SRC,
                exclude: NODE_MODULES,
                use: (() => {
                    if (MODE === 'development') {
                        return [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => ([
                                        require('autoprefixer')
                                    ])
                                }
                            },
                            'less-loader'
                        ]
                    }

                    return [
                        // Webpack 5 is likely to come with a CSS minimizer built-in.
                        // For Webpack 4 you need to bring your own.
                        // This configuration DO NOT apply any CSS minimization algorithms!
                        // Using `chunkhash` for the extracted CSS would lead to problems
                        // as the code points to the CSS through JavaScript bringing it to the same entry.
                        // That means if the application code or CSS changed, it would invalidate both.
                        // Therefore, instead of chunkhash, you can use
                        // `contenthash` that is generated based on the extracted content.
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([
                                    require('autoprefixer')
                                ])
                            }
                        },
                        'less-loader'
                    ]
                })()
            },

            // `url-loader` uses `file-loader` implicitly when limit is set.
            // Both have to be installed for the setup to work.
            // [hash] is defined differently for file-loader than for the rest of webpack.
            // It's calculated based on file content.
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                include: SRC,
                exclude: NODE_MODULES,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // 10kB
                        name: 'img/[name].[hash:4].[ext]'
                    }
                }
            },

            // Use a similar setup as for images and rely on both `file-loader`
            // `and url-loader` while using the limit option.
            {
                // Match woff2 in addition to patterns like .woff?v=1.1.1.
                test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                include: SRC,
                exclude: NODE_MODULES,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50000, // 50kB
                        name: 'fonts/[name].[hash:4].[ext]'
                    }
                }
            },

            // Take the code and turns it into a format older browsers can understand.
            {
                test: /\.jsx?$/,
                include: SRC,
                exclude: NODE_MODULES,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        // Ignore node_modules so CPU usage with poll watching drops significantly.
        // If you wanted to output the resulting file to a specific directory,
        // you could do it by passing a path.
        // Example: filename: 'styles/[name].css'.
        new webpack.WatchIgnorePlugin([
            path.join(NODE_MODULES)
        ]),

        new webpack.DefinePlugin({
            '__MODE__': JSON.stringify(MODE),
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.BABEL_ENV': JSON.stringify(process.env.BABEL_ENV)
        }),

        new HtmlWebpackPlugin({
            template: SRC + '/index.ejs'
        }),

        // That [name] placeholder uses the name of the entry where the CSS is referred.
        // TODO: 'styles/[name].[contenthash:4].css'
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:4].css'
        })
    ]
}

// Production mode only settings -----------------------------------------------
// Enable source-map for production and let webpack use the default for development.
if (MODE === 'production') {
    // `source-map` is the slowest and highest quality option of them all,
    // but that's fine for a production build.
    config.devtool = 'source-map'

    config.optimization = {
        // Extract a vendor bundle from the `node_modules` directory.
        // `initial` - normal chunks that count towards initial loading time of the application.
        splitChunks: {
            chunks: 'initial'
        },

        // When webpack writes bundles, it maintains a manifest as well.
        // You can find it in the generated vendor bundle in this project.
        // The manifest describes what files webpack should load.
        // It's possible to extract it and start loading the files of the project faster
        // instead of having to wait for the vendor bundle to be loaded.
        // The name manifest is used by convention. You can use any other name, and it will still work.
        // Because this setup is using HtmlWebpackPlugin,
        // there is no need to worry about loading the manifest ourselves
        // as the plugin adds a reference to index.html.
        // Extracting the manifest to a file of its own:
        runtimeChunk: {
            name: 'manifest',
        },
    }
}

// Development mode only settings ----------------------------------------------
if (MODE === 'development') {
    // WDS
    config.devServer = {
        // Assuming you don't generate index.html dynamically and prefer to maintain it yourself in a specific directory, you need to point WDS to it.
        // `contentBase` accepts either a path (e.g., 'build') or an array of paths (e.g., ['build', 'images']).
        // The value defaults to the project root.
        // contentBase: ...

        // Parse host and port from env to allow customization.
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0'
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080

        // Enables HTML5 history API based routing
        historyApiFallback: true,

        // Open the page in browser
        // open: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // An overlay for capturing compilation related warnings and errors in the browser.
        // `overlay` does not capture runtime errors of the application.
        overlay: true,

        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000
        }
    }
}

console.log('::: ::: :::')
console.log('::: MODE:\t\t\t\t', MODE)
console.log('::: process.env.NODE_ENV (NODE_ENV):\t', NODE_ENV)
console.log('::: process.env.BABEL_ENV:\t\t', process.env.BABEL_ENV)
console.log('::: ::: :::')

module.exports = config
