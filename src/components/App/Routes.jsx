import React from 'react'
import PropTypes from 'prop-types'

// import $ from 'jquery'
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'

import LinearProgress from '@material-ui/core/LinearProgress'

import HomeHidden from '../../__experiments__/components/HomeHidden'
import {
    Page1 as AutoScrollToTopPage1,
    Page2 as AutoScrollToTopPage2,
} from '../../__experiments__/components/AutoScrollToTopDemo'
import SampleImageDemo from '../../__experiments__/components/SampleImageDemo'
import SampleWorkerDemo from '../../__experiments__/components/SampleWorkerDemo'

import CompareBmi from '../Compare/Bmi'
import CompareHeaderL2 from '../Compare/HeaderL2'
import CompareHeight from '../Compare/Height'
import CompareHome from '../Compare/Home'
import CompareWeight from '../Compare/Weight'

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

                <CompareHeaderL2 />
                {this.props.app.initializer.status === ':READY:' ? (
                    <Switch>
                        {/* Compare -------------------------------------------- */}
                        <Route exact path="/" component={CompareHome} />
                        <Route exact path="/compare/height" component={CompareHeight} />
                        <Route exact path="/compare/weight" component={CompareWeight} />
                        <Route exact path="/compare/bmi" component={CompareBmi} />

                        {/* Experiments ---------------------------------------- */}
                        <Route exact path="/home-hidden" component={HomeHidden} />
                        <Route exact path="/auto-scroll-demo-1" component={AutoScrollToTopPage1} />
                        <Route exact path="/auto-scroll-demo-2" component={AutoScrollToTopPage2} />
                        <Route exact path="/sample-image-demo" component={SampleImageDemo} />
                        <Route exact path="/sample-worker-demo" component={SampleWorkerDemo} />

                        {/* Misc ----------------------------------------------- */}
                        <Redirect to="/" />
                    </Switch>) : <LinearProgress />
                }
            </React.Fragment>
            // </div>
        )
    }
}

Routes.propTypes = {
    app: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired,
}

export default withRouter(Routes)
