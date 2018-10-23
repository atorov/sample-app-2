import axios from 'axios'

import {
    CONFIG_RESET,
    CONFIG_SET_XSETTINGS,
} from './types'

import gdv from '../../lib/getDeepValue'
import initState from '../reducers/config/initState'

const XSETTINGS_SOURCE = '/xsettings/xsettings.json'

function config_Reset() {
    return { type: CONFIG_RESET };
}

// Complex action creators -----------------------------------------------------
function config_LoadXsettings() {
    return (dispatch) => {
        dispatch({
            type: CONFIG_SET_XSETTINGS,
            payload: {
                status: 'loading',
                data: initState.xsettings.data,
            },
        })
        return axios.get(XSETTINGS_SOURCE)
            .then(res => dispatch({
                type: CONFIG_SET_XSETTINGS,
                payload: {
                    status: 'ready',
                    data: gdv(res, 'data', {}),
                },
            }))
            .catch((reason) => {
                console.error(':::', reason)
                dispatch({
                    type: CONFIG_SET_XSETTINGS,
                    payload: {
                        status: 'error',
                        data: initState.xsettings.data,
                    },
                });
            })
        ;
    };
}

export default {
    config_Reset,
    config_LoadXsettings,
}
