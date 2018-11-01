import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../redux/action-creators'

class Initializer extends Component {
    componentDidMount() {
        console.log('::: Initializing the app...')

        // Load xsettings
        console.log('::: Start loading xsettings...')
        setTimeout(() => {
            this.props.config_LoadXsettings()
                .then(() => console.log('::: Loaded xsettings:', this.props.config.xsettings))
                .then(() => {
                    console.log('::: The app has been initialized.')
                    this.props.app_SetInitializer()
                })
                .catch((reason) => {
                    console.error('::: reason:', reason)
                    this.props.app_SetInitializer(':ERROR:')
                })
        }, 550) // TODO:
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return null
    }
}

Initializer.propTypes = {
    config: PropTypes.object.isRequired,

    app_SetInitializer: PropTypes.func.isRequired,
    config_LoadXsettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    ...state,
    ...ownProps,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...actionCreators,
        dispatch,
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(Initializer)
