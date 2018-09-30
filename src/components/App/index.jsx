import * as React from 'react'

import IdeaSvg from '../../assets/img/idea.svg'

import SampleWorker from '../../workers/sample.worker'

import './style.less'

console.log(SampleWorker)

export default class App extends React.Component {
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
            </div>
        )
    }
}
