import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import withRouter from 'react-router-dom/withRouter'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

function onChange(history) {
    return (_, value) => {
        switch (value) {
            case 0: history.push('/app/home'); break
            case 1: history.push('/app/bmi-calculator'); break
            default: break
        }
    }
}

function getTabIndex(history) {
    switch (history.location.pathname) {
        case '/app/bmi-calculator': return 1
        default: return 0;
    }
}

const HeaderL2 = ({
    classes,
    history,
}) => (
    <AppBar
        position="fixed"
        color="default"
        className={classes.customAppBar}
    >
        <Tabs
            value={getTabIndex(history)}
            className={`container ${classes.customTabs}`}
            onChange={onChange(history)}
        >
            <Tab label="Home" />
            <Tab label="BMI Calculator" />
        </Tabs>
    </AppBar>
)

HeaderL2.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default withStyles({
    customAppBar: {
        top: '48px',
    },
    customTabs: {
        width: '100%',
    },
})(withRouter(HeaderL2))
