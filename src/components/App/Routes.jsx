import React from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'
import {
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'

import Home from '../Home'
import Page1 from '../Page1'

import './style.less'

class Routes extends React.Component {
    componentDidMount() {
        this.unlisten = this.props.history.listen(() => $('#app-routes').scrollTop(0))
    }

    componentWillUnmount() {
        this.unlisten()
    }

    render() {
        return (
            <div id="app-routes">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page1" component={Page1} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

Routes.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withRouter(Routes)
