import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import { Card } from '@material-ui/core'

import Actions from './Actions'
import Media from './Media'
import Sliders from './Sliders'
import Title from './Title'

const Measurements = (props) => {
    const classes = props.classes

    return (
        <Card className={classes.root}>
            <Title />
            <Media />
            <Sliders />
            <Actions />
        </Card>
    )
}

Measurements.propTypes = {
    classes: PropTypes.object.isRequired,
}

const StyledComponent = withStyles({
    root: { margin: '16px 8px' },
})(Measurements)

export default StyledComponent
