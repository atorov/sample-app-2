import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import xdata from './assets/xdata/sample'

// import App from './components/App'
import Router from './components/Router'

import './__experiments__'

import configureStore from './redux/configureStore'

console.log('::: ::: :::')
console.log('::: __APP_VERSION__:', __APP_VERSION__)
console.log('::: __MODE__:', __MODE__)
console.log('::: process.env.NODE_ENV (NODE_ENV):', process.env.NODE_ENV)
console.log('::: process.env.BABEL_ENV:', process.env.BABEL_ENV)
console.log('::: module.hot:', !!module.hot)
console.log('::: sample.json', xdata)
console.log('::: ::: :::')

export const store = configureStore({
    persist: true,
    persistInclude: [],
    persistExclude: [],
    debounce: 500,
    logger: true && process.env.NODE_ENV === 'development',
})

ReactDOM.render(
    <Provider store={store}>
        {Router}
    </Provider>,
    document.getElementById('app'),
)

if (module.hot) {
    module.hot.accept()
}

export default null
