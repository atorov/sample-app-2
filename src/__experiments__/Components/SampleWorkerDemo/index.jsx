import React from 'react'

import { Link } from 'react-router-dom'

import SampleWorker from '../../../workers/sample.worker'

export default class SampleWorkerDemo extends React.Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        this.initialize()
    }

    componentWillUnmount() {
        this.terminate()
    }

    onClick() {
        console.log('::: Ping sent and now waiting...')
        this.sampleWorker.postMessage({ message: 'Ping!' })
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
            <div className="container">
                <h1>Sample worker demo</h1>
                <hr />

                <button
                    type="button"
                    onClick={this.onClick}
                >
                    Sample Web Worker: Send a Ping!
                </button>
                <hr />

                <Link to="/home">Back to homepage</Link>
                <hr />

                <br />
            </div>
        )
    }
}
