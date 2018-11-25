import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { checkAuth } from '../../lib/auth-helpers'
import * as actionCreators from '../../redux/action-creators'

function handleLogin(auth_Set) {
    return () => auth_Set({ status: ':READY:' })
}

const Login = (props) => {
    const classes = props.classes

    const isAuth = checkAuth(props.auth)
    const { from } = props.location.state || { from: { pathname: '/' } }
    if (isAuth) return <Redirect to={from} />

    return (
        <div className="container">
            <TextField
                name="email"
                type="email"
                label="Email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
                className={classes.textField}
            />
            <TextField
                name="password"
                type="password"
                label="Password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                fullWidth
                className={classes.textField}
            />
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={handleLogin(props.auth_Set)}
            >
                Primary
            </Button>
        </div>
    )
}


Login.propTypes = {
    auth: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,

    auth_Set: PropTypes.func.isRequired,
}

const mapStateToProps = (
    { auth },
    ownProps,
) => ({
    auth,
    ...ownProps,
})
const mapDispatchToProps = dispatch => bindActionCreators(
    { auth_Set: actionCreators.auth_Set },
    dispatch,
)
const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)

const StyledComponent = withStyles(theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
}))(ConnectedComponent)

export default StyledComponent
