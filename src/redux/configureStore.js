import throttle from 'lodash/throttle'

import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import config from './reducers/config'
import ui from './reducers/ui'

import persistState from './persist-state'

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
    const reducers = combineReducers({
        config,
        ui,
    })

    let persistedState = {}
    if (cfg.persist) {
        persistedState = persistState.loadState()
        if (process.env.NODE_ENV === 'development') {
            console.log('::: persistedState:', persistedState)
        }
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middlewares = [thunk]
    if (cfg.logger) {
        middlewares.push(createLogger())
    }

    const store = createStore(
        reducers,
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
