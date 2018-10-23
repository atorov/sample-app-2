import {
    UI_SET,
} from '../../action-creators/types'

import initState from './initState'

export default function (state = initState, action) {
    switch (action.type) {
        case UI_SET:
            return ({
                ...state,
                ...action.payload,
            })

        default: return state
    }
}
