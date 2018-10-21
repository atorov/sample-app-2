import React from 'react'
// import { hot } from 'react-hot-loader'

import SampleWorkerDemo from '../../__experiments__/Components/SampleWorkerDemo'

import SampleComponent from '../../__experiments__/Components/SampleComponent'
import SampleImage from '../../__experiments__/Components/SampleImage'
import StatelessSampleComponent from '../../__experiments__/Components/StatelessSampleComponent'

import './style.less'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <hr />

                <SampleWorkerDemo />
                <hr />

                <StatelessSampleComponent />
                <hr />

                <SampleComponent />
                <hr />

                <SampleImage />
                <hr />

                <div>
                    App component main content goes here ...
                </div>
                <hr />
            </div>
        )
    }
}

// export default module.hot ? hot(module)(App) : App
