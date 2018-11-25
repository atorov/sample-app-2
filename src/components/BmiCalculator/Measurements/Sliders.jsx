import React from 'react'
import PropTypes from 'prop-types'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

const Sliders = props => (
    <CardContent>
        <Typography variant="subtitle2">
            Weight&nbsp;
            <em>
                {props.weight}
            </em>
            &nbsp;kg
        </Typography>
        <input
            type="range"
            min={40}
            max={130}
            value={props.weight}
            style={{ width: '100%' }}
            onChange={props.handleChangeWeight}
        />

        <Typography variant="subtitle2">
            Height&nbsp;
            <em>
                {props.height}
            </em>
            &nbsp;cm
        </Typography>
        <input
            type="range"
            min={140}
            max={220}
            value={props.height}
            style={{ width: '100%' }}
            onChange={props.handleChangeHeight}
        />
    </CardContent>
)

Sliders.propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,

    handleChangeHeight: PropTypes.func.isRequired,
    handleChangeWeight: PropTypes.func.isRequired,
}

export default Sliders
