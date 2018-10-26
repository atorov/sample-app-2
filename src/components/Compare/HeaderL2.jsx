import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

function onChange(history) {
    return (_, value) => {
        switch (value) {
            case 0: history.push('/'); break
            case 1: history.push('/compare/height'); break
            case 2: history.push('/compare/weight'); break
            case 3: history.push('/compare/bmi'); break
            default: break
        }
    }
}

function getTabIndex(history) {
    switch (history.location.pathname) {
        case '/compare/height': return 1
        case '/compare/weight': return 2
        case '/compare/bmi': return 3
        default: return 0;
    }
}

const HeaderL2 = ({ history }) => (
    <AppBar position="static">
        <Tabs
            value={getTabIndex(history)}
            onChange={onChange(history)}
        >
            <Tab label="Home" />
            <Tab label="Height" />
            <Tab label="Weight" />
            <Tab label="BMI" />
        </Tabs>
    </AppBar>
)

HeaderL2.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withRouter(HeaderL2)
