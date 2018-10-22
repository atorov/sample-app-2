import {
    CONFIG_RESET,
    CONFIG_SET_XSETTINGS,
} from '../../action-creators/types'

import initState from './initState'

export default function (state = initState, action) {
    switch (action.type) {
        case CONFIG_RESET:
            return { ...initState }

        case CONFIG_SET_XSETTINGS:
            return ({
                ...state,
                xsettings: {
                    status: action.status,
                    data: { ...action.data },
                },
            })

        default: return state
    }
}
