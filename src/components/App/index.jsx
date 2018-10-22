import React from 'react'
import PropTypes from 'prop-types'

// import { hot } from 'react-hot-loader'

import SampleWorkerDemo from '../../__experiments__/Components/SampleWorkerDemo'

import SampleComponent from '../../__experiments__/Components/SampleComponent'
import SampleImage from '../../__experiments__/Components/SampleImage'
import StatelessSampleComponent from '../../__experiments__/Components/StatelessSampleComponent'

import './style.less'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.init = this.init.bind()
        this.terminate = this.terminate.bind()
    }

    componentDidMount() {
        this.init()
    }

    componentWillUnmount() {
        this.terminate()
    }

    init() {
        console.log(this)
    }

    terminate() {
        console.log(this)
    }

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
                    Some App component content goes here ...
                </div>
                <hr />

                <div>
                    {this.props.children}
                </div>
                <hr />
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.any.isRequired,
}

export default App

// export default module.hot ? hot(module)(App) : App
