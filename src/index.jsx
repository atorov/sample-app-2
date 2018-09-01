import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App/index.jsx'

// ---
const myFun = () => {
    const { aa: a, bb: b } = { aa: 'foo', bb: 'bar' }
    console.log('::: a, b:', a, b)
}
myFun()
// ---

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
