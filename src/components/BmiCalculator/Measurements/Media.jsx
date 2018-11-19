import React from 'react'
import PropTypes from 'prop-types'

import { CardMedia } from '@material-ui/core'

const Media = ({ classes }) => (
    <CardMedia
        title="BMI Categories"
        image="../../../img/static/bmi-categories.png"
        className={classes.media}
    />
)

Media.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default Media
