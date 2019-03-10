# Sample App v2

A boilerplate project

![alt application demo](https://github.com/atorov/sample-app-2/blob/dev/src/assets/img/demo/screen-demo.gif)

## Babel
- Environments
- plugins:
  - @babel/plugin-syntax-dynamic-import
  - react-hot-loader/babel
- presets:
  - @babel/preset-env
  - @babel/preset-react

## Browser List

## Dependencies TODO:

## ESLint
- extends: airbnb
- Custom globals
- Custom rules
- Jest test environment
- parser: babel-eslint

## Jest
- Coverage report
- Watch mode

## Webpack
- autoprefixer
- babel-loader
- @babel/polyfill
- **Code splitting and dynamic imports**
- CSS/Less - extract CSS to separate files in production
- file-loader, url-loader - images and fonts
- hash, chunk hash, content hash
- jarvis
- optimization:
  - runtimeChunk
  - splitChunks
- plugins:
  - CopyWebpackPlugin
  - **HotModuleReplacementPlugin**
  - HtmlWebpackPlugin
  - MiniCssExtractPlugin
  - WatchIgnorePlugin
- proxy
- Source maps
- **Web workers**

- webpack dev server
  - headers
  - historyApiFallback
  - **hot module replacement**
  - Open the page in browser
  - stats
  - overlay
  - watchOptions
