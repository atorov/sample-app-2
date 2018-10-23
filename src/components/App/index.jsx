import React from 'react'
// import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hot } from 'react-hot-loader'

import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import actionCreators from '../../redux/action-creators'
import SampleWorkerDemo from '../../__experiments__/Components/SampleWorkerDemo'

import SampleComponent from '../../__experiments__/Components/SampleComponent'
import SampleImage from '../../__experiments__/Components/SampleImage'
import StatelessSampleComponent from '../../__experiments__/Components/StatelessSampleComponent'

import Home from '../Home'
import Page1 from '../Page1'

import './style.less'

class App extends React.Component {
    render() {
        // console.log('::: App.props', this.props)
        // console.log('::: App.state', this.state)

        return (
            <div>
                <hr />

                <SampleWorkerDemo />
                <hr />

                <StatelessSampleComponent />
                <hr />

                <SampleComponent />
                <hr />

                <SampleImage />
                <hr />

                <div>
                    Some App component content goes here ...
                </div>
                <hr />
                <BrowserRouter>
                    <div id="router">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/page1" component={Page1} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </BrowserRouter>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state,
    ...ownProps,
})
const mapDispatchToProps = dispatch => bindActionCreators(
    { ...actionCreators },
    dispatch,
)

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App)
export default module.hot ? hot(module)(connectedComponent) : connectedComponent

// export default module.hot ? hot(module)(App) : App
