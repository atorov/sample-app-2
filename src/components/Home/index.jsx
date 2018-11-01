import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import About from './About'
import ReactLazyDemo from './ReactLazyDemo'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expandedPanel: ':PANEL_ABOUT:',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(panel) {
        return (_, expanded) => this.setState({ expandedPanel: expanded ? panel : '' })
    }

    render() {
        const { classes } = this.props

        const isExpandedPanelAbout = this.state.expandedPanel === ':PANEL_ABOUT:'
        const isExpandedPanelReactLazyDemo = this.state.expandedPanel === ':PANEL_REACT_LAZY_DEMO:'

        return (
            <div className="container">
                <About
                    isExpanded={isExpandedPanelAbout}
                    classes={classes}
                    handleChange={this.handleChange}
                />
                <ReactLazyDemo
                    isExpanded={isExpandedPanelReactLazyDemo}
                    classes={classes}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(theme => ({
    panelHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    panelContent: {
        width: '100%',
    },
    panelCode: {
        fontSize: theme.typography.pxToRem(22),
    },
}))(Home)
