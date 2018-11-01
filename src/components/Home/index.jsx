import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

import IconExpandMore from '@material-ui/icons/ExpandMore'

import * as actionCreators from '../../redux/action-creators'

import About from './About'

class Home extends React.Component {
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

        return (
            <div className="container">
                <About
                    isExpanded={this.state.expandedPanel === ':PANEL_ABOUT:'}
                    classes={this.props.classes}
                    handleChange={this.handleChange}
                />

                <ExpansionPanel
                    expanded={this.state.expandedPanel === ':PANEL_:'}
                    onChange={this.handleChange(':PANEL_:')}
                >
                    <ExpansionPanelSummary expandIcon={<IconExpandMore />}>
                        <Typography className={classes.panelHeading}>
                            Something else ...
                        </Typography>
                        <Typography className={classes.about_SecondaryHeading}>
                            I am an expansion panel
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit hic voluptatum culpa at nesciunt in sapiente
                            ipsum recusandae corporis sit vero voluptatem labore aut
                            quibusdam sint iste accusamus veritatis maxime officiis,
                            minus quas porro sed possimus! Architecto, sapiente eos.
                            Quibusdam quis nemo voluptatem officiis,
                            qui odio incidunt a esse similique modi,
                            minus veritatis nihil!
                            Earum, adipisci harum, facere ipsum perferendis mollitia
                            quos saepe repudiandae maiores ratione tenetur magnam
                            dolorum aliquam fuga. Deleniti ipsam nobis perferendis
                            libero ipsum dolore blanditiis rem molestiae non alias saepe in hic,
                            quis pariatur illo? Architecto, fugit.
                            Quis delectus rerum dolorem expedita hic tempore sequi repellat.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (
    state,
    // {
    //     app,
    //     ui,
    // },
    ownProps,
) => ({
    state,
    ...ownProps,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { ...actionCreators },
    // {
    //     ui_SetAppWidth: actionCreators.ui_SetAppWidth,
    // },
    dispatch,
)

export default withStyles(theme => ({
    panelHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    panelContent: {
        width: '100%',
    },
}))(connect(mapStateToProps, mapDispatchToProps)(Home))
