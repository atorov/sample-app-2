import React, { Component } from 'react'
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
import SampleWorkerDemo from '../../__experiments__/components/SampleWorkerDemo'

// import CompareBmi from '../Compare/Bmi'
// import CompareHeight from '../Compare/Height'
// import CompareWeight from '../Compare/Weight'

import Home from '../Home'
import HeaderL2 from '../HeaderL2'

import './style.less'

class Routes extends Component {
    componentDidMount() {
        // this.unlisten = this.props.history.listen(() => $('#app-routes').scrollTop(0))
    }

    componentWillUnmount() {
        // this.unlisten()
    }

    render() {
        return (
            <div
                id="app-routes"
                style={{ marginTop: '144px' }}
            >
                <HeaderL2 />

                {this.props.app.initializer.status === ':READY:' ? (
                    <Switch>
                        <Route exact path="/" component={Home} />

                        {/* App -------------------------------------------- */}
                        {/* <Route exact path="/compare/height" component={CompareHeight} />
                        <Route exact path="/compare/weight" component={CompareWeight} />
                        <Route exact path="/compare/bmi" component={CompareBmi} /> */}

                        {/* Experiments ---------------------------------------- */}
                        <Route exact path="/home-hidden" component={HomeHidden} />
                        <Route exact path="/auto-scroll-demo-1" component={AutoScrollToTopPage1} />
                        <Route exact path="/auto-scroll-demo-2" component={AutoScrollToTopPage2} />
                        <Route exact path="/sample-worker-demo" component={SampleWorkerDemo} />

                        {/* Misc ----------------------------------------------- */}
                        <Redirect to="/" />
                    </Switch>) : <LinearProgress />
                }
            </div>
        )
    }
}

Routes.propTypes = {
    app: PropTypes.object.isRequired,
    // history: PropTypes.object.isRequired,
}

export default withRouter(Routes)
