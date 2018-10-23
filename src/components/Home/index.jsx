import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import actionCreators from '../../redux/action-creators'

import Content from './Content'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Homepage</h1>

                <Content {...this.props} />

                <Link to="/page1">Go to Page 1</Link>
            </React.Fragment>
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
