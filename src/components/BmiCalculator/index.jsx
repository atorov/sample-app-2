import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import Measurements from './Measurements'
import Result from './Result'

const INIT_STATE = {
    weight: 65,
    height: 170,
}

class BmiCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INIT_STATE }

        this.onHeightChange = this.onHeightChange.bind(this)
        this.onWeightChange = this.onWeightChange.bind(this)
    }

    onHeightChange(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState({ height: +event.target.value })
    }

    onWeightChange(event) {
        event.preventDefault()
        event.stopPropagation()
        this.setState({ weight: +event.target.value })
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
                            onHeightChange={this.onHeightChange}
                            onWeightChange={this.onWeightChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        // lg={4}
                        // xl={4}
                    >
                        <Result />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default BmiCalculator
