import React from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    CardActions,
} from '@material-ui/core'

const Actions = props => (
    <CardActions>
        <Button
            color="secondary"
            onClick={props.handleClickClearData}
        >
            Clear Data
        </Button>
        <Button
            variant="contained"
            color="primary"
            onClick={props.handleClickCalculateBmi}
        >
            Calculate BMI
        </Button>
    </CardActions>
)

Actions.propTypes = {
    handleClickCalculateBmi: PropTypes.func.isRequired,
    handleClickClearData: PropTypes.func.isRequired,
}

export default Actions
