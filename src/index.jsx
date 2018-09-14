import * as React from 'react'
import * as ReactDOM from 'react-dom'

import uuidv4 from 'uuid/v4';

import App from './components/App/index.jsx'

// ---
const myFun = () => {
    const {
        aa: a,
        bb: b,
        rr: r,
    } = {
        aa: 'foo',
        bb: 'bar',
        rr: uuidv4(),
    }
    console.log(
        '::: '
        + 'a'
        + ', '
        + 'b'
        + ', '
        + 'r'
        // ', ' | '\n',
        + ':',
        a,
        b,
        r,
    )
}
myFun()
// ---

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
