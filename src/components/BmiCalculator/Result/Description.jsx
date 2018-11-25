import React from 'react'

import {
    CardContent,
    Typography,
} from '@material-ui/core'

const Description = () => (
    <CardContent>
        <Typography
            variant="body1"
            align="center"
        >
            The BMI is universally expressed in kg/m
            <sup>2</sup>
            ,
            resulting from mass in kilograms and height in metres.
            If pounds and inches are used,
            a conversion factor of 703 (kg/m
            <sup>2</sup>
            )/(lb/in
            <sup>2</sup>
            ) must be applied.
            When the term BMI is used informally,
            the units are usually omitted.
        </Typography>
    </CardContent>
)

export default Description
