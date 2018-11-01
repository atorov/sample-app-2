import React from 'react'
import PropTypes from 'prop-types'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

import IconExpandMore from '@material-ui/icons/ExpandMore'

import ImgBig from '../../assets/img/large.jpg'
import ImgSmall from '../../assets/img/small.png'

const About = ({
    classes,
    isExpanded,

    handleChange,
}) => (
    <ExpansionPanel
        expanded={isExpanded}
        onChange={handleChange(':PANEL_ABOUT:')}
    >
        <ExpansionPanelSummary expandIcon={<IconExpandMore />}>
            <Typography className={classes.panelHeading}>
                About
            </Typography>
            <Typography
                variant="subtitle1"
                color="secondary"
            >
                This is just a demo app!
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className={classes.panelContent}>
                <img
                    src={ImgBig}
                    alt="big"
                    width="100%"
                />
                <br />
                <br />

                <Typography variant="body1">
                    Body mass index, or BMI, is used to determine
                    whether you are in a healthy weight range for your height.
                    BMI is a useful measurement for most people over 18 years old.
                    But it is only an estimate and it doesn’t take into account
                    age, ethnicity, gender and body composition.
                    This calculator shouldn’t be used for pregnant women or children.
                </Typography>
                <br />

                <Typography
                    variant="subtitle2"
                    color="secondary"
                >
                    This is just a demo app!
                    Speak to your doctor about your weight.
                </Typography>
                <br />

                <Typography variant="body1">
                    BMI compares your weight to your height,
                    and is calculated by dividing your weight (in kilograms)
                    by your height (in metres squared).
                    It gives you an idea of whether you’re `underweight`,
                    a `healthy` weight, `overweight`, or `obese` for your height.
                    BMI is one type of tool to help health professionals
                    assess the risk for chronic disease.
                    It is also important to understand your other risk factors.
                </Typography>
                <br />

                <img
                    src={ImgSmall}
                    alt="small"
                    width="25%"
                    style={{
                        display: 'block',
                        margin: '0 auto',
                    }}
                />
            </div>
        </ExpansionPanelDetails>
    </ExpansionPanel>
)

About.propTypes = {
    classes: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool.isRequired,

    handleChange: PropTypes.func.isRequired,
}

export default About
