import React from 'react'

import {
    Button,
    CardActions,
} from '@material-ui/core'

import {
    Context as BmiContext,
    data as bmiDefaultData,
} from '../context-bmi'

function handleClickResetData(setData) {
    return () => {
        setData(bmiDefaultData)
    }
}

const Actions = () => (
    <BmiContext.Consumer>
        {bmi => (
            <CardActions>
                <Button
                    color="secondary"
                    onClick={handleClickResetData(bmi.setData)}
                >
                    Reset Data
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!!bmi.data.value}
                    onClick={bmi.calcValue}
                >
                    Calculate BMI
                </Button>
            </CardActions>
        )}
    </BmiContext.Consumer>
)

export default Actions
