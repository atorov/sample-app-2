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
            <Sliders
                height={props.height}
                weight={props.weight}
                handleChangeHeight={props.handleChangeHeight}
                handleChangeWeight={props.handleChangeWeight}
            />
            <Actions
                handleClickCalculateBmi={props.handleClickCalculateBmi}
                handleClickClearData={props.handleClickClearData}
            />
        </Card>
    )
}

Measurements.propTypes = {
    classes: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,

    handleChangeHeight: PropTypes.func.isRequired,
    handleChangeWeight: PropTypes.func.isRequired,
    handleClickCalculateBmi: PropTypes.func.isRequired,
    handleClickClearData: PropTypes.func.isRequired,
}

const StyledComponent = withStyles({
    root: { margin: '16px 8px' },
})(Measurements)

export default StyledComponent
