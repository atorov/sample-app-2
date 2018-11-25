import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
    Redirect,
    Route,
} from 'react-router-dom'

import { checkAuth } from '../../../lib/auth-helpers'

function renderPropWrapper(ownProps) {
    return (renderProps) => {
        const props = { ...renderProps, ...ownProps }
        const { privateComponent: PrivateComponent, ...rest } = props

        const isAuth = checkAuth(props.auth)

        return isAuth
            ? <PrivateComponent {...rest} />
            : (
                <Redirect
                    to={{
                        pathname: '/app/login',
                        state: { from: props.location },
                    }}
                />
            )
    }
}

const PrivateRoute = props => (
    <Route
        {...props}
        render={renderPropWrapper(props)}
    />
)


PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    privateComponent: PropTypes.object.isRequired,
}

const mapStateToProps = (
    {
        app,
        auth,
        location,
    },
    ownProps,
) => ({
    app,
    auth,
    location,
    ...ownProps,
})

const ConnectedComponent = connect(mapStateToProps)(PrivateRoute)

export default ConnectedComponent
