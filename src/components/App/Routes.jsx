import React, {
    Component,
    // lazy,
    Suspense,
} from 'react'
import PropTypes from 'prop-types'

// import $ from 'jquery'
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import LinearProgress from '@material-ui/core/LinearProgress'

import HomeHidden from '../../__experiments__/components/HomeHidden'
import {
    Page1 as AutoScrollToTopPage1,
    Page2 as AutoScrollToTopPage2,
} from '../../__experiments__/components/AutoScrollToTopDemo'
import SampleWorkerDemo from '../../__experiments__/components/SampleWorkerDemo'

import BmiCalculator from '../BmiCalculator'
import ErrorBoundary from '../ErrorBoundary'
import Home from '../Home'
import HeaderL2 from '../HeaderL2'

import './style.less'

class Routes extends Component {
    componentDidMount() {
        this.unlisten = this.props.history.listen((/* location, action */) => {
            // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
            // console.log(`The last navigation action was ${action}`)

            // $('html').scrollTop(0)
            // $('body').scrollTop(0)
            // $('.app').scrollTop(0)
            // $('.app-root').scrollTop(0)
            // $('.app-routes').scrollTop(0)
            window.scrollTo(0, 0)
        })
    }

    componentWillUnmount() {
        this.unlisten()
    }

    render() {
        return (
            <div
                id="app-routes"
                className={this.props.classes.customAppRoutes}
            >
                <HeaderL2 />

                {this.props.app.initializer.status === ':READY:'
                    ? (
                        <ErrorBoundary>
                            <Suspense fallback={<Fallback />}>
                                <Switch>
                                    <Route exact path="/" component={Home} />

                                    {/* App -------------------------------------------- */}
                                    <Route exact path="/app/bmi-calculator" component={BmiCalculator} />

                                    {/* Experiments ---------------------------------------- */}
                                    <Route exact path="/home-hidden" component={HomeHidden} />
                                    <Route exact path="/auto-scroll-demo-1" component={AutoScrollToTopPage1} />
                                    <Route exact path="/auto-scroll-demo-2" component={AutoScrollToTopPage2} />
                                    <Route exact path="/sample-worker-demo" component={SampleWorkerDemo} />

                                    {/* Misc ----------------------------------------------- */}
                                    <Redirect to="/" />
                                </Switch>
                            </Suspense>
                        </ErrorBoundary>
                    )
                    : <LinearProgress />
                }
            </div>
        )
    }
}

Routes.propTypes = {
    app: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default withStyles({
    customAppRoutes: {
        marginTop: '144px',
        marginBottom: '48px',
    },
})(withRouter(Routes))
