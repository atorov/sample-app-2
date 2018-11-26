import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import WorkerBmi from '../../workers/bmi.worker'

import Measurements from './Measurements'
import Result from './Result'

import * as Bmi from './context-bmi'

class BmiCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bmi: {
                data: Bmi.data,
                setData: this.setBmiData.bind(this),
                calcValue: this.calcBmiValue.bind(this),
            },
        }
    }

    componentDidMount() {
        this.workerBmi = new WorkerBmi()
        this.workerBmi.addEventListener(
            'message',
            res => console.log('::: res.outputValue:', res.data.outputValue),
        )
        this.workerBmi.postMessage({ inputValue: 2 })
        this.workerBmi.postMessage({ inputValue: 3 })
        this.workerBmi.postMessage({ inputValue: 4 })

        this.state.bmi.setData({ value: this.state.bmi.calcValue() })
    }

    componentWillUnmount() {
        this.workerBmi.terminate()
        this.workerBmi = undefined
    }

    setBmiData(data) {
        this.setState(prevState => ({
            bmi: {
                ...prevState.bmi,
                data: {
                    ...prevState.bmi.data,
                    ...data,
                },
            },
        }))
    }

    calcBmiValue() {
        const weight = this.state.bmi.data.weight
        const height = this.state.bmi.data.height
        const nom = weight
        const den = (height / 100) ** 2
        const value = Math.round(nom / den)
        return value
    }

    render() {
        return (
            <div className="container">
                <Bmi.Context.Provider value={this.state.bmi}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={8}
                            // lg={8}
                            // xl={8}
                        >
                            <Measurements />
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
                </Bmi.Context.Provider>
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
