import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/index.jsx'

// ---
const myFun = () => {
    const sa = { a: 'test' }
    console.log('::: ::: ::: ::: ::: a:', { ...sa })
}
myFun()
// ---

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
