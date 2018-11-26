import React, {
    Component,
    lazy,
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

import ErrorBoundary from '../../ErrorBoundary'
import HeaderL2 from '../../HeaderL2'

import Fallback from './Fallback'
import PrivateRoute from './PrivateRoute'

// React.lazy makes Route's proptypes fail #6420
// https://github.com/ReactTraining/react-router/issues/6420
// component = {props => <Component {...props} />}
const BmiCalculator = lazy(() => import('../../BmiCalculator'))
const Home = lazy(() => import('../../Home'))
const Login = lazy(() => import('../../Login'))
const PrivatePage = lazy(() => import('../../PrivatePage'))

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
                                    <Route exact path="/" component={props => <Home {...props} />} />

                                    <Route
                                        exact
                                        path="/app/bmi-calculator"
                                        component={props => <BmiCalculator {...props} />}
                                    />

                                    <Route
                                        exact
                                        path="/app/login"
                                        component={props => <Login {...props} />}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/app/private-page"
                                        privateComponent={PrivatePage}
                                    />

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

const RoutedComponent = withRouter(Routes)

const StyledComponent = withStyles({
    customAppRoutes: {
        marginTop: '144px',
        marginBottom: '48px',
    },
})(RoutedComponent)

export default StyledComponent
