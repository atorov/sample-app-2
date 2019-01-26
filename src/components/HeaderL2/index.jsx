import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withStyles from '@material-ui/core/styles/withStyles'
import withRouter from 'react-router-dom/withRouter'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import { checkAuth } from '../../lib/auth-helpers'
import * as actionCreators from '../../redux/action-creators'

function handleClickLogin(history, isAuth, auth_Set) {
    if (isAuth) {
        return auth_Set({ status: '' })
        // return history.push('/')
    }
    return history.push('/app/login')
}

function onChange(history, isAuth, auth_Set) {
    return (_, value) => {
        switch (value) {
            case 0: history.push('/app/home'); break
            case 1: history.push('/app/bmi-calculator'); break
            case 2: history.push('/app/private-page'); break
            case 3: handleClickLogin(history, isAuth, auth_Set); break
            case 4: history.push('/app/modern-react-xp'); break
            default: break
        }
    }
}

function getTabIndex(history) {
    const pathname = history.location.pathname
    if (pathname.startsWith('/app/bmi-calculator')) return 1
    if (pathname.startsWith('/app/private-page')) return 2
    if (pathname.startsWith('/app/login')) return 3
    if (pathname.startsWith('/app/modern-react-xp')) return 4

    return 0
}


const HeaderL2 = (props) => {
    const isAuth = checkAuth(props.auth)

    return (
        <AppBar
            position="fixed"
            color="default"
            className={props.classes.customAppBar}
        >
            <Tabs
                value={getTabIndex(props.history)}
                className={`container ${props.classes.customTabs}`}
                onChange={onChange(props.history, isAuth, props.auth_Set)}
            >
                <Tab label="Home" />
                <Tab label="BMI Calculator" />
                <Tab label="Private Page" />
                <Tab label={isAuth ? 'Logout' : 'Login'} />
                <Tab label="Modern React Xp" />
            </Tabs>
        </AppBar>
    )
}


HeaderL2.propTypes = {
    auth: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    auth_Set: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }, ownProps) => ({
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
)(HeaderL2)

const RoutedComponent = withRouter(ConnectedComponent)

const StyledComponent = withStyles({
    customAppBar: {
        top: '48px',
    },
    customTabs: {
        width: '100%',
    },
})(RoutedComponent)

export default StyledComponent
