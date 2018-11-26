import React from 'react'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

import { Context as BmiContext } from '../context-bmi'

function handleChangeMeasurement(key, setData) {
    return (event) => {
        event.preventDefault()
        event.stopPropagation()
        setData({
            [key]: +event.target.value,
            value: null,
        })
    }
}

const Sliders = () => (
    <BmiContext.Consumer>
        {bmi => (
            <CardContent>
                <Typography variant="subtitle2">
                    Weight&nbsp;
                    <em>
                        {bmi.data.weight}
                    </em>
                    &nbsp;kg
                </Typography>
                <input
                    type="range"
                    min={40}
                    max={130}
                    value={bmi.data.weight}
                    style={{ width: '100%' }}
                    onChange={handleChangeMeasurement('weight', bmi.setData)}
                />

                <Typography variant="subtitle2">
                    Height&nbsp;
                    <em>
                        {bmi.data.height}
                    </em>
                    &nbsp;cm
                </Typography>
                <input
                    type="range"
                    min={140}
                    max={220}
                    value={bmi.data.height}
                    style={{ width: '100%' }}
                    onChange={handleChangeMeasurement('height', bmi.setData)}
                />
            </CardContent>
        )}
    </BmiContext.Consumer>
)

export default Sliders
