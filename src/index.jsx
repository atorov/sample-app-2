import React from 'react'
import { render } from 'react-dom'

import $ from 'jquery'
import { Provider } from 'react-redux'

import xdata from './assets/xdata/sample'
// import { isInDevMode } from './lib/mode-helpers/'
import configureStore from './redux/configureStore'

import App from './components/App'

import './__experiments__'

console.log('::: ::: :::')
console.log('::: __APP_VERSION__:', __APP_VERSION__)
console.log('::: __MODE__:', __MODE__)
console.log('::: process.env.NODE_ENV (NODE_ENV):', process.env.NODE_ENV)
console.log('::: process.env.BABEL_ENV:', process.env.BABEL_ENV)
console.log('::: process.env.CFG_ENV:', process.env.CFG_ENV)
console.log('::: module.hot:', !!module.hot)
console.log('::: sample.json (static asset):', xdata)
console.log('::: ::: :::')

export const store = configureStore({
    // persist: true,
    // include: [],
    // exclude: [],
    // throttle: 550,
    // logger: true && isInDevMode(),
})

setTimeout(() => {
    $('#init-loader-wrapper').css({ opacity: 0 })
    setTimeout(() => $('#init-loader-wrapper').remove(), 900)

    render(
        <Provider store={store}><App /></Provider>,
        document.getElementById('app'),
    )
}, 250) // TODO:

// <Provider> does not support changing `store` on the fly.
// Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically.
// See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions.
// if (module.hot) {
//     module.hot.accept()
// }
// The situation for the current project:
// Only changes wrapped with <App /> support HMR!

export default null
