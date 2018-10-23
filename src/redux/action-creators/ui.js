import {
    UI_SET,
} from './types'

function ui_Set(payload) {
    return {
        type: UI_SET,
        payload,
    };
}

export default {
    ui_Set,
}
