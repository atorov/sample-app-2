import * as types from '../../action-creators/types'

import initState from './initState'

export default function (state = initState, action) {
    switch (action.type) {
        case types.APP_SET_INITIALIZER:
            return ({
                ...state,
                initializer: {
                    status: action.payload.status,
                },
            })

        default:
            return state
    }
}
