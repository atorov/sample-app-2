import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const HeaderL1 = ({ classes }) => (
    <AppBar
        position="fixed"
        color="default"
        className={classes.custom}
    >
        <Typography variant="h6">
            <span>Sample App 2 / </span>
            <small>{__APP_VERSION__.replace(/"/g, '')}</small>
        </Typography>
    </AppBar>
)

HeaderL1.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    custom: {
        padding: '8px 16px',
        boxShadow: 'none',
    },
})(HeaderL1)
