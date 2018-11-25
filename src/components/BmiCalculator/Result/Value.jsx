import React from 'react'
import PropTypes from 'prop-types'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

const Value = props => (
    <CardContent>
        <Typography
            variant="h1"
            component="div"
            align="center"
        >
            {props.value}
        </Typography>
    </CardContent>
)

Value.propTypes = {
    value: PropTypes.number,
}

Value.defaultProps = {
    value: null,
}

export default Value
