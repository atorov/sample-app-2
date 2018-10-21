import React from 'react'

import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import App from '../App'
import Home from '../Home'
import Page1 from '../Page1'

export default (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/page1" component={Page1} />
                <Redirect to="/home" />
            </Switch>
        </App>
    </BrowserRouter>
)
