import React from 'react'
// import PropTypes from 'prop-types'

// import $ from 'jquery'
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'

import HomeHidden from '../../__experiments__/components/HomeHidden'
import {
    Page1 as AutoScrollToTopPage1,
    Page2 as AutoScrollToTopPage2,
} from '../../__experiments__/components/AutoScrollToTopDemo'
import SampleImageDemo from '../../__experiments__/components/SampleImageDemo'
import SampleWorkerDemo from '../../__experiments__/components/SampleWorkerDemo'

import Compare from '../Compare'

import './style.less'

class Routes extends React.Component {
    componentDidMount() {
        // this.unlisten = this.props.history.listen(() => $('#app-routes').scrollTop(0))
    }

    componentWillUnmount() {
        // this.unlisten()
    }

    render() {
        return (
            // <div id="app-routes">
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Compare} />

                    <Route exact path="/home-hidden" component={HomeHidden} />
                    <Route exact path="/auto-scroll-demo-1" component={AutoScrollToTopPage1} />
                    <Route exact path="/auto-scroll-demo-2" component={AutoScrollToTopPage2} />
                    <Route exact path="/sample-image-demo" component={SampleImageDemo} />
                    <Route exact path="/sample-worker-demo" component={SampleWorkerDemo} />

                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
            // </div>
        )
    }
}

Routes.propTypes = {
    // history: PropTypes.object.isRequired,
}

export default withRouter(Routes)
