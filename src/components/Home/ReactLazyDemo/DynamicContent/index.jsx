import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import CircularProgress from '@material-ui/core/CircularProgress'

import delay from '../../../../lib/delay'

const Content = React.lazy(() => delay(1000).then(() => import('./Content'))) // eslint-disable-line


const DynamicContent = (props) => (
    <Suspense fallback={(
        <ExpansionPanelDetails>
            <CircularProgress />
        </ExpansionPanelDetails>
    )}
    >
        <Content {...props} />
    </Suspense>
)

export default DynamicContent



