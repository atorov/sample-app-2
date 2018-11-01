import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import * as actionCreators from '../../../redux/action-creators'

class HomeHidden extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hmrCheck: false,
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Homepage (Hidden)</h1>
                <hr />

                <ul>
                    <li>
                        <Link to="/auto-scroll-demo-1">
                            Auto scroll to top demo
                        </Link>
                    </li>
                    <li>
                        <Link to="/sample-worker-demo">
                            Sample worker demo
                        </Link>
                    </li>
                    <li>
                        <Link to="/sample-image-demo">
                            Sample image demo
                        </Link>
                    </li>
                </ul>
                <hr />

                <input
                    name="hmr-check"
                    type="checkbox"
                    checked={this.state.hmrCheck}
                    onChange={() => this.setState(prevState => ({ hmrCheck: !prevState.hmrCheck }))}
                />
                <span>This checkbox approves that we can keep the state during HRM refreshes</span>
                <br />
                <hr />

                <br />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state,
    ...ownProps,
})
const mapDispatchToProps = dispatch => bindActionCreators(
    { ...actionCreators },
    dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(HomeHidden)
