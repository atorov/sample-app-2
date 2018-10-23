import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import gdv from '../../../lib/getDeepValue'

import './style.less'

class Content extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.init = this.init.bind(this)
    //     this.terminate = this.terminate.bind(this)
    // }

    componentDidMount() {
        // this.init()
    }

    componentWillUnmount() {
        // this.terminate()
    }

    // init() {
    //     console.log('::: Home/Content.props:', this.props)
    // }

    // terminate() {
    //     console.log(this)
    // }

    render() {
        gdv()

        return (
            <div className="home-content">
                Content withRouter:&nbsp;
                {'' + !!this.props.history}
                <br />
                <br />

                <button
                    type="button"
                    onClick={this.props.config_Reset}
                >
                    Reset config
                </button>
                <br />
                <br />

                <input
                    name="ui-test"
                    type="checkbox"
                    checked={this.props.ui.test}
                    onChange={() => this.props.ui_Set({ test: !this.props.ui.test })}
                />
                <em>toggle ui.test</em>
                <br />
                <br />

                ui.appWidth:&nbsp;
                <em>{this.props.ui.appWidth}</em>
                <br />
                <br />
            </div>
        )
    }
}

Content.propTypes = {
    history: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,

    config_Reset: PropTypes.func.isRequired,
    ui_Set: PropTypes.func.isRequired,
}

export default withRouter(Content)
