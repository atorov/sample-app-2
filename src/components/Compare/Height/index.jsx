import React from 'react'

import { Grid } from '@material-ui/core'

import PanelLeft from './PanelLeft'
import PanelRight from './PanelRight'

class Height extends React.Component {
    render() {
        return (
            <div className="container">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        // lg={4}
                        // xl={4}
                    >
                        <PanelLeft />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                        // lg={8}
                        // xl={8}
                    >
                        <PanelRight />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Height
