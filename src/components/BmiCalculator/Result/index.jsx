import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import { Card } from '@material-ui/core'

import Description from './Description'
import Title from './Title'
import Value from './Value'

const Results = props => (
    <Card className={props.classes.root}>
        <Title />
        <Value />
        <Description />
    </Card>
)

Results.propTypes = {
    classes: PropTypes.object.isRequired,
}

const StyledComponent = withStyles({
    root: { margin: '16px 8px' },
})(Results)

export default StyledComponent
