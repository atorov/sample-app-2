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
            default: break
        }
    }
}

function getTabIndex(history) {
    switch (history.location.pathname) {
        // case '/app/...': return 1
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
        className={classes.custom}
    >
        <Tabs
            value={getTabIndex(history)}
            onChange={onChange(history)}
        >
            <Tab label="Home" />
        </Tabs>
    </AppBar>
)

HeaderL2.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default withStyles({
    custom: {
        top: '48px',
    },
})(withRouter(HeaderL2))
