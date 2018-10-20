import * as React from 'react'
// import { hot } from 'react-hot-loader'

import SampleComponent from '../SampleComponent'

import IdeaSvg from '../../assets/img/idea.svg'

import SampleWorker from '../../workers/sample.worker'

import './style.less'

console.log(SampleWorker)

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
        }
    }

    componentDidMount() {
        this.initialize()
    }

    componentWillUnmount() {
        this.terminate()
    }

    initialize() {
        this.sampleWorker = new SampleWorker('demo_workers.js')
        this.sampleWorker.addEventListener(
            'message',
            res => console.log('::: sampleWorker.res.message:', res.data.message),
        )
    }

    terminate() {
        this.sampleWorker.terminate()
        this.sampleWorker = undefined
    }

    render() {
        return (
            <div>
                <img src={IdeaSvg} alt="" />

                <button
                    type="button"
                    onClick={() => {
                        console.log('::: Ping sent')
                        this.sampleWorker.postMessage({ message: 'Ping!' })
                    }}
                >
                    Sample Web Worker: Send a Ping!
                </button>
                <br />

                <input
                    name="check"
                    type="checkbox"
                    checked={this.state.check}
                    onChange={() => this.setState(prevState => ({ check: !prevState.check }))}
                />
                <br />

                <div>
                    Sample Text ...
                </div>

                <SampleComponent />
            </div>
        )
    }
}

// export default module.hot ? hot(module)(App) : App
