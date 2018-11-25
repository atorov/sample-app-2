import * as types from '../../action-creators/types'

import initState from './initState'

export default function (state = initState, action) {
    switch (action.type) {
        case types.AUTH_SET:
            return ({
                ...state,
                ...action.payload,
            })

        default:
            return state
    }
}
