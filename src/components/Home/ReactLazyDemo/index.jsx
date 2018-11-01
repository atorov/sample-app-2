import React from 'react'
import PropTypes from 'prop-types'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

import Typography from '@material-ui/core/Typography'

import IconExpandMore from '@material-ui/icons/ExpandMore'

import DynamicContent from './DynamicContent' // eslint-disable-line

const ReactLazyDemo = ({
    classes,
    isExpanded,
    handleChange,
}) => (
    <ExpansionPanel
        expanded={isExpanded}
        onChange={handleChange(':PANEL_REACT_LAZY_DEMO:')}
    >
        <ExpansionPanelSummary expandIcon={<IconExpandMore />}>
            <Typography className={classes.panelHeading}>
                React.lazy() Demo
            </Typography>
        </ExpansionPanelSummary>

        {isExpanded ? <DynamicContent classes={classes} /> : null}
    </ExpansionPanel>
)

ReactLazyDemo.propTypes = {
    classes: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool.isRequired,

    handleChange: PropTypes.func.isRequired,
}

export default ReactLazyDemo
