import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import {
    Card,
    CardActionArea,
} from '@material-ui/core'

import Actions from './Actions'
import Description from './Description'
import Media from './Media'
import Sliders from './Sliders'

const PanelLeft = (props) => {
    const classes = props.classes

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Media {...props} />
                <Description />
                <Sliders {...props} />
            </CardActionArea>

            <Actions />
        </Card>
    )
}

PanelLeft.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles({
    root: { margin: '16px 8px' },
    media: { height: '375px' },
})(PanelLeft)
