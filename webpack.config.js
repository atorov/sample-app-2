const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV
const MODE = NODE_ENV !== 'development' ? 'production' : 'development'
process.env.BABEL_ENV = MODE;

const NODE_MODULES = path.join(__dirname, 'node_modules')
const SRC = path.join(__dirname, 'src')

const config = {
    mode: MODE,

    entry: [
        '@babel/polyfill',
        SRC + '/index.jsx'
    ],

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

            // `url- loader` uses `file-loader` implicitly when limit is set.
            // Both have to be installed for the setup to work.
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                include: SRC,
                exclude: NODE_MODULES,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // 10kB
                        name: './img/[name]-[hash].[ext]'
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
                        name: 'fonts/[name]-[hash].[ext]'
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

        new HtmlWebpackPlugin({
            template: SRC + '/index.ejs'
        }),

        // That [name] placeholder uses the name of the entry where the CSS is referred.
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
}

// Production mode only settings -----------------------------------------------
// ...

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
