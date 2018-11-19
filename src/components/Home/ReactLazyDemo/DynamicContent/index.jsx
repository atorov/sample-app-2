import React, {
    lazy,
    Suspense,
} from 'react'

import delay from '../../../../lib/delay'

import ErrorBoundary from '../../../ErrorBoundary'

import Fallback from './Fallback'

const Content = lazy(() => delay(1000).then(() => import('./Content')))
const VeryLargeImage = lazy(() => import('./VeryLargeImage'))

const DynamicContent = props => (
    <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
            <Content {...props} />
            <VeryLargeImage />
            <br />
        </Suspense>
    </ErrorBoundary>
)

export default DynamicContent
