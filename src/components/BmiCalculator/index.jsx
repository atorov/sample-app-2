import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Measurements from './Measurements'
import Result from './Result'

const INIT_STATE = {
    weight: 65,
    height: 170,
    bmi: null,
}

class BmiCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INIT_STATE }

        this.handleChangeHeight = this.handleChangeHeight.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleClickCalculateBmi = this.handleClickCalculateBmi.bind(this)
        this.handleClickClearData = this.handleClickClearData.bind(this)
    }

    componentDidMount() {
        this.calculateBmi()
    }

    calculateBmi() {
        this.setState((prevState) => {
            const nom = prevState.weight
            const den = (prevState.height / 100) ** 2
            const bmi = Math.round(nom / den)
            return { bmi }
        })
    }

    handleChangeHeight(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState(
            { height: +event.target.value },
            this.calculateBmi,
        )
    }

    handleChangeWeight(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState(
            { weight: +event.target.value },
            this.calculateBmi,
        )
    }

    handleClickCalculateBmi(event) {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }
        this.calculateBmi()
    }

    handleClickClearData(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState(
            prevState => ({
                ...prevState,
                height: INIT_STATE.height,
                weight: INIT_STATE.weight,
            }),
            this.calculateBmi,
        )
    }

    render() {
        return (
            <div className="container">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                        // lg={8}
                        // xl={8}
                    >
                        <Measurements
                            height={this.state.height}
                            weight={this.state.weight}
                            handleChangeHeight={this.handleChangeHeight}
                            handleChangeWeight={this.handleChangeWeight}
                            handleClickCalculateBmi={this.handleClickCalculateBmi}
                            handleClickClearData={this.handleClickClearData}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        // lg={4}
                        // xl={4}
                        className={this.props.classes.results}
                    >
                        <Result value={this.state.bmi} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

BmiCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
}

const StyledComponent = withStyles({
    results: { display: 'grid' },
})(BmiCalculator)

export default StyledComponent
