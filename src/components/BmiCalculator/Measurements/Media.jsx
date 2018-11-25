import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import { CardMedia } from '@material-ui/core'

const Media = props => (
    <CardMedia
        title="BMI Categories"
        image="../../../img/static/bmi-categories.png"
        className={props.classes.media}
    />
)

Media.propTypes = {
    classes: PropTypes.object.isRequired,
}

Media.propTypes = {
    classes: PropTypes.object.isRequired,
}

const StyledComponent = withStyles({
    media: {
        height: '375px',
        maxWidth: '667px',
        margin: 'auto',
    },
})(Media)

export default StyledComponent
