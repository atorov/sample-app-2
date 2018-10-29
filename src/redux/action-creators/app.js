import * as types from './types'

export function app_SetInitializer(status = ':READY:') {
    return {
        type: types.APP_SET_INITIALIZER,
        payload: {
            status,
        },
    }
}

export default null
