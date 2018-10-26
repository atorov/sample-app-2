import React from 'react'

import { Link } from 'react-router-dom'

import IdeaSvg from '../../../assets/img/idea.svg'

export default class SampleImageDemo extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Sample image demo</h1>
                <hr />

                <img
                    src={IdeaSvg}
                    alt=""
                    width="100px"
                    height="100px"
                />
                <hr />

                <Link to="/home">Back to homepage</Link>
                <hr />

                <br />
            </div>
        )
    }
}
