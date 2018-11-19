import React from 'react'
import PropTypes from 'prop-types'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

const Sliders = ({
    weight,
    height,
    onWeightChange,
    onHeightChange,
}) => (
    <CardContent>
        <Typography variant="subtitle2">
            Weight&nbsp;
            <em>
                {weight}
            </em>
            &nbsp;kg
        </Typography>
        <input
            type="range"
            min={40}
            max={130}
            value={weight}
            style={{ width: '100%' }}
            onChange={onWeightChange}
        />

        <Typography variant="subtitle2">
            Height&nbsp;
            <em>
                {height}
            </em>
            &nbsp;cm
        </Typography>
        <input
            type="range"
            min={140}
            max={220}
            value={height}
            style={{ width: '100%' }}
            onChange={onHeightChange}
        />
    </CardContent>
)

Sliders.propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,

    onHeightChange: PropTypes.func.isRequired,
    onWeightChange: PropTypes.func.isRequired,
}

export default Sliders
