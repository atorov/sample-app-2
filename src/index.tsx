import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App/index.jsx'

// ---
const myFun = () => {
    const ab = {
        aa: 'foo',
        bb: 'bar'
    }
    const { aa, bb } = ab
    console.log('::: a, b:', aa, bb)
}
myFun()
// ---

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
