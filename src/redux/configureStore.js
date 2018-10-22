// const throttle = require('lodash.throttle');

import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import config from './reducers/config'

// function filterState(state: any = {}, whiteList: string[] = [], blackList: string[] = []) {
//     let filteredState = state;
//     if (whiteList && whiteList.length) {
//         filteredState = (whiteList as string[]).reduce(
//             (acc, key) => ({ ...acc, [key]: state[key] }),
//             {},
//         );
//     }
//     return filteredState;
// }

export default function (cfg = {}) {
    const reducers = combineReducers({
        config,
    })

    const persistedState = {}
    if (cfg.persist) {
        // persistedState = loadState()
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

    //     const whiteList = cfg.whiteList || [];
    //     const debounce = cfg.debounce || 1500;
    //     cfg.persist && store.subscribe(throttle(
    //         () => saveState(filterState(store.getState(), whiteList)),
    //         debounce,
    //     ));

    return store;
}
