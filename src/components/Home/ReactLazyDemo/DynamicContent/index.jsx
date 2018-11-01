import React, { Suspense } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import delay from '../../../../lib/delay'

import ErrorBoundary from '../../../ErrorBoundary'

const Content = React.lazy(() => delay(1000).then(() => import('./Content'))) // eslint-disable-line

const DynamicContent = (props) => (
    <ErrorBoundary>
        <Suspense fallback={(
            <ExpansionPanelDetails>
                <CircularProgress />
            </ExpansionPanelDetails>
        )}
        >
            <Content {...props} />
        </Suspense>
    </ErrorBoundary>
)

export default DynamicContent



