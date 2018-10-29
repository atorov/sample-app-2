import * as types from '../../action-creators/types'

import initState from './initState'

export default function (state = initState, action) {
    switch (action.type) {
        // case types.CONFIG_RESET:
        //     return { ...initState }

        case types.CONFIG_SET_XSETTINGS:
            return ({
                ...state,
                xsettings: {
                    status: action.payload.status,
                    data: { ...action.payload.data },
                },
            })

        default:
            return state
    }
}
