import React from 'react'
// import PropTypes from 'prop-types'

// import $ from 'jquery'
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'

import {
    Page1 as AutoScrollToTopPage1,
    Page2 as AutoScrollToTopPage2,
} from '../../__experiments__/Components/AutoScrollToTopDemo'
import SampleImageDemo from '../../__experiments__/Components/SampleImageDemo'
import SampleWorkerDemo from '../../__experiments__/Components/SampleWorkerDemo'

import Home from '../Home'
import HomeHidden from '../../__experiments__/Components/HomeHidden'

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
            <div id="app-routes">
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/home-hidden" component={HomeHidden} />
                    <Route exact path="/auto-scroll-demo-1" component={AutoScrollToTopPage1} />
                    <Route exact path="/auto-scroll-demo-2" component={AutoScrollToTopPage2} />
                    <Route exact path="/sample-image-demo" component={SampleImageDemo} />
                    <Route exact path="/sample-worker-demo" component={SampleWorkerDemo} />

                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

Routes.propTypes = {
    // history: PropTypes.object.isRequired,
}

export default withRouter(Routes)
