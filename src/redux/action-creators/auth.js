import * as types from './types'

export function auth_Set(payload = {}) {
    return {
        type: types.AUTH_SET,
        payload,
    }
}

export default null
