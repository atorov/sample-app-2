import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const PanelLeft = ({ classes }) => (
    <Paper className={classes.root}>
        Right Panel
    </Paper>
)

PanelLeft.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    root: {
        margin: '16px 8px',
        padding: '16px',
    },
})(PanelLeft)
