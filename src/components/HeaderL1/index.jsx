import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const HeaderL1 = ({ classes }) => (
    <AppBar
        position="fixed"
        color="default"
        className={classes.customAppBar}
    >
        <Typography
            variant="h6"
            className={`container ${classes.customTitle}`}
        >
            <span>Sample App 2 / </span>
            <small>{__APP_VERSION__.replace(/"/g, '')}</small>
        </Typography>
    </AppBar>
)

HeaderL1.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    customAppBar: {
        padding: '8px 16px',
        boxShadow: 'none',
    },
    customTitle: {
        width: '100%',
    },
})(HeaderL1)
