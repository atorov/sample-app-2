function loadState() {
    try {
        const serialized = window.sessionStorage.getItem('reduxState')
        if (serialized === null) {
            // Reducers will be initialized with its initial values
            // return undefined
            return {}
        }
        return JSON.parse(serialized)
    } catch (reason) {
        // Reducers will be initialized with its initial values
        // return undefined
        return {}
    }
}

function saveState(state) {
    try {
        // Redux state should always be serializable
        const serialized = JSON.stringify(state)
        window.sessionStorage.setItem('reduxState', serialized)
    } catch (reason) {
        if (process.env.NODE_ENV === 'development') {
            console.error(
                '::: savePersistedState() in sessionStorage failed with reason:',
                reason,
            )
        }
    }
}

export default {
    loadState,
    saveState,
}
