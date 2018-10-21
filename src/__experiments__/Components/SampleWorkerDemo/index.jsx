import React from 'react'

import SampleWorker from '../../../workers/sample.worker'

export default class extends React.Component {
    componentDidMount() {
        this.initialize()
    }

    componentWillUnmount() {
        this.terminate()
    }

    initialize() {
        this.sampleWorker = new SampleWorker()
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
                <button
                    type="button"
                    onClick={() => {
                        console.log('::: Ping sent and now waiting...')
                        this.sampleWorker.postMessage({ message: 'Ping!' })
                    }}
                >
                    Sample Web Worker: Send a Ping!
                </button>
            </div>
        )
    }
}
