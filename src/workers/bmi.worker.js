/* eslint no-restricted-globals: 1 */
/* eslint no-undef: 1 */

const ctx = self

let status = ':READY:'

ctx.onmessage = (req) => {
    const type = req.data.type
    const payload = req.data.payload || {}
    // console.log('::: worker:', type, payload)

    switch (type) {
        case ':GET_STATUS:':
            ctx.postMessage({
                type: ':RES_GET_STATUS:',
                payload: status,
            })
            break;

        case ':SET_STATUS:':
            status = payload
            break;

        case ':CALC_BMI:':
            if (status === ':READY:') {
                status = ':BUSY_CALC_BMI:'
                setTimeout(
                    () => {
                        const weight = payload.weight
                        const height = payload.height
                        const nom = weight
                        const den = (height / 100) ** 2
                        const value = Math.round(nom / den)
                        ctx.postMessage({
                            type: ':RES_CALC_BMI:',
                            payload: value,
                        })
                        status = ':READY:'
                    },
                    1500,
                )
            }
            break;

        default:
            break;
    }
};
