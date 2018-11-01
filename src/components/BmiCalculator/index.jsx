import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import Measurements from './Measurements'
import Result from './Result'

class BmiCalculator extends Component {
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
                        <Measurements />
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
