import React from 'react'

import { Link } from 'react-router-dom'

export default class Page1 extends React.Component {
    render() {
        const brs = []
        for (let i = 0; i < 100; i++) {
            brs.push(
                <React.Fragment key={i}>
                    {i}
                    <br />
                </React.Fragment>,
            )
        }

        return (
            <div>
                <h1>Auto Scroll Page 1</h1>
                <hr />

                <Link to="/home">Back to homepage</Link>
                <hr />

                {brs}
                <Link to="/auto-scroll-demo-2">Auto Scroll Page 2</Link>
                <hr />

                <br />
            </div>
        )
    }
}
