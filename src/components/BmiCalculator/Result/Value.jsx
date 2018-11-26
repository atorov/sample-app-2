import React from 'react'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

import { Context as BmiContext } from '../context-bmi'

const Value = () => (
    <BmiContext.Consumer>
        {bmi => (
            <CardContent>
                <Typography
                    variant="h1"
                    component="div"
                    align="center"
                >
                    {bmi.data.value || '--'}
                </Typography>
            </CardContent>
        )}
    </BmiContext.Consumer>
)

export default Value
