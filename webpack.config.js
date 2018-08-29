const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const parts = require('./webpack.parts')

const commonConfig = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Sample App 2'
            })
        ]
    }
])

const productionConfig = merge([
    {
        plugins: [
            // Ignore node_modules so CPU usage with poll watching drops significantly.
            new webpack.WatchIgnorePlugin([
                path.join(__dirname, 'node_modules')
            ])
        ]
    }
])

const developmentConfig = merge([
    parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
    })
])

module.exports = (mode) => {
    if (mode === 'production') {
        return merge(
            commonConfig,
            productionConfig,
            { mode }
        )
    }

    return merge(
        commonConfig,
        developmentConfig,
        { mode }
    )
}
