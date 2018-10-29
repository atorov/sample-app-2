import axios from 'axios'

import * as types from './types'

import gdv from '../../lib/getDeepValue'
import initState from '../reducers/config/initState'

const XSETTINGS_SOURCE = '/xsettings/xsettings.json'

// export function config_Reset() {
//     return { type: types.CONFIG_RESET };
// }

// Complex action creators -----------------------------------------------------
export function config_LoadXsettings() {
    return (dispatch) => {
        dispatch({
            type: 'types.CONFIG_SET_XSETTINGS',
            payload: {
                status: 'loading',
                data: initState.xsettings.data,
            },
        })
        return axios.get(XSETTINGS_SOURCE)
            .then(res => dispatch({
                type: types.CONFIG_SET_XSETTINGS,
                payload: {
                    status: 'ready',
                    data: gdv(res, 'data', {}),
                },
            }))
            .catch((reason) => {
                console.error(':::', reason)
                dispatch({
                    type: types.CONFIG_SET_XSETTINGS,
                    payload: {
                        status: 'error',
                        data: initState.xsettings.data,
                    },
                });
            })
        ;
    };
}

export default null
