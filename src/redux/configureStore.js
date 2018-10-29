import throttle from 'lodash/throttle'

import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as persistState from './persist-state'
import * as reducers from './reducers'

import { isInDevMode } from '../lib/mode-helpers'

function filterState(
    state = {},
    include = [],
    exclude = [],
) {
    let filteredState = {}

    if (include.length) {
        filteredState = include.reduce(
            (acc, key) => ({ ...acc, [key]: state[key] }),
            {},
        )
    } else {
        filteredState = { ...state }
    }

    if (exclude.length) {
        exclude.forEach(key => delete filteredState[key])
    }

    return filteredState
}

export default function (cfg = {}) {
    const combinedReducers = combineReducers(reducers)

    let persistedState = {}
    if (cfg.persist) {
        persistedState = persistState.loadState()
        if (isInDevMode()) {
            console.log('::: persistedState:', persistedState)
        }
    }

    let composeEnhancers = compose
    if (isInDevMode() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
    const middlewares = [thunk]
    if (cfg.logger) {
        middlewares.push(createLogger())
    }

    const store = createStore(
        combinedReducers,
        persistedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    )

    if (cfg.persist) {
        store.subscribe(
            throttle(
                () => persistState.saveState(
                    filterState(
                        store.getState(),
                        cfg.include,
                        cfg.exclude,
                    ),
                ),
                cfg.throttle || 550,
            ),
        )
    }

    return store
}
