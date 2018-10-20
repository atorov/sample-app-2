import * as React from 'react'
import * as ReactDOM from 'react-dom'

import uuidv4 from 'uuid/v4'

import App from './components/App'

import { bake } from './lib/misc/bake-and-shake'

import sampleJson from './assets/xdata/sample'

// ---
bake()
// throw new Error('Custom Error') // An error will be thrown here! yupieeeyy 🙈

// ---
// TODO: use babel-eslint to avoid error messages until import() is still experimental
// let dynamicConfig = {}
// import (`./lib/misc/dynamic-settings-${process.env.NODE_ENV}.json`)
//     .then(data => {
//             dynamicConfig = data
//             console.log('::: dynamicConfig:', JSON.stringify(dynamicConfig, null, 2))
//         })
//         .catch((reason) => {
//             console.error('::: reason:', reason)
//         })

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

console.log('::: ::: :::')
console.log('::: __MODE___:', __MODE__)
console.log('::: process.env.NODE_ENV (NODE_ENV):', process.env.NODE_ENV)
console.log('::: process.env.BABEL_ENV:', process.env.BABEL_ENV)
console.log('::: ::: :::')

// ---

console.log('::: sample.json', sampleJson)

// ---

console.log('::: module.hot:', module.hot)
// console.log('::: module.hotOnly:', module.hotOnly)

// ---

ReactDOM.render(
    <App />,
    document.getElementById('app'),
)

if (module.hot) module.hot.accept()
