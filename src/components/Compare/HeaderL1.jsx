import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => (
    <AppBar
        position="static"
        color="secondary"
    >
        <Toolbar>
            <Typography
                variant="h6"
                color="inherit"
            >
                Compare Yourself&nbsp;
                <small>
                    {__APP_VERSION__.replace(/"/g, '')}
                </small>
            </Typography>
        </Toolbar>
    </AppBar>
)
