import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../redux/action-creators'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                Homepage
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
