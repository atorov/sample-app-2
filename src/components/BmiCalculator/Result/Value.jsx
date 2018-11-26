import React from 'react'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

import { Context as BmiContext } from '../context-bmi'

const COLORS = [
    'rgb(153, 168, 217)',
    'rgb(146, 205, 171)',
    'rgb(255, 227, 70)',
    'rgb(235, 164, 90)',
    'rgb(217, 63, 74)',
]

function getColor(value) {
    if (!value) return undefined
    if (value < 19) return COLORS[0]
    if (value < 25) return COLORS[1]
    if (value < 30) return COLORS[2]
    if (value < 35) return COLORS[3]
    return COLORS[4]
}

const Value = () => (
    <BmiContext.Consumer>
        {bmi => (
            <CardContent>
                <Typography
                    variant="h1"
                    component="div"
                    align="center"
                    style={{ color: getColor(bmi.data.value) }}
                >
                    {bmi.data.value || '--'}
                </Typography>
            </CardContent>
        )}
    </BmiContext.Consumer>
)

export default Value
