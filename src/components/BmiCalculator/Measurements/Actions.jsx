import React from 'react'
// import PropTypes from 'prop-types'

import {
    Button,
    CardActions,
} from '@material-ui/core'

const Actions = () => (
    <CardActions>
        <Button color="secondary">
            Clear Data
        </Button>
        <Button variant="contained" color="primary">
            Calculate BMI
        </Button>
    </CardActions>
)

export default Actions
