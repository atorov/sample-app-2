import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
        }
    }

    render() {
        return (
            <div>
                <span>
                    This is the content of a regular sample component that should keep its state during HMR refreshes ...
                </span>
                <br />

                <input
                    name="check"
                    type="checkbox"
                    checked={this.state.check}
                    onChange={() => this.setState(prevState => ({ check: !prevState.check }))}
                />
            </div>
        )
    }
}
