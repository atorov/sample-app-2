import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../redux/action-creators'

class Bmi extends Component {
    render() {
        return (
            <div className="container">
                Bmi
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
export default connect(mapStateToProps, mapDispatchToProps)(Bmi)
