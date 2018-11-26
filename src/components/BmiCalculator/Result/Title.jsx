import React from 'react'

import {
    CardContent,
    LinearProgress,
    Typography,
} from '@material-ui/core'

import { Context as BmiContext } from '../context-bmi'

const Title = () => (
    <BmiContext.Consumer>
        {bmi => (
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                >
                    Your BMI
                </Typography>
                <LinearProgress
                    variant={bmi.data.value ? 'determinate' : 'indeterminate'}
                    value={0}
                />
            </CardContent>

        )}
    </BmiContext.Consumer>
)

export default Title
