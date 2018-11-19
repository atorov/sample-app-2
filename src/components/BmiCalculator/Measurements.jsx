import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core'

const PanelLeft = ({ classes }) => (
    <Card className={classes.root}>
        <CardActionArea>
            {/* <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            /> */}

            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    Enter Your Height and Weight
                </Typography>
                <Typography>
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

            <CardContent>
                <input
                    type="range"
                    min=""
                    max="100"
                    value="50"
                />
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button size="small" color="secondary">
                Clear Data
            </Button>
        </CardActions>
    </Card>
)

PanelLeft.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    root: { margin: '16px 8px' },
})(PanelLeft)
