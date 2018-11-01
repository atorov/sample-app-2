import React from 'react'
import PropTypes from 'prop-types'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

import ImgPlanetsLarge from '../../../../assets/img/planets-large.jpg'
import ImgPlanetsSmall from '../../../../assets/img/planets-small.jpg'

const Content = ({ classes }) => (
    // throw new Error('An synthetic error') // Should be catch by ErrorBoundary
    <ExpansionPanelDetails>
        <div className={classes.panelContent}>
            <Typography>
                The
                <code className={classes.panelCode}> React.lazy </code>
                function lets you render a dynamic import as a regular component.
            </Typography>
            <br />

            <img
                src={ImgPlanetsLarge}
                alt="galaxy large"
                width="100%"
            />
            <br />
            <br />

            <img
                src={ImgPlanetsSmall}
                alt="galaxy small"
                width="100%"
            />
            <br />
        </div>
    </ExpansionPanelDetails>
)


Content.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default Content
