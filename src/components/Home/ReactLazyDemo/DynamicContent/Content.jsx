import React from 'react'
import PropTypes from 'prop-types'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

// import ImgBig from '../../assets/img/large.jpg'
// import ImgSmall from '../../assets/img/small.png'

const Content = ({ classes }) => (
    <ExpansionPanelDetails>
        <Typography>
            The
            <code className={classes.panelCode}> React.lazy </code>
            function lets you render a dynamic import as a regular component.
        </Typography>
    </ExpansionPanelDetails>
)

Content.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default Content
