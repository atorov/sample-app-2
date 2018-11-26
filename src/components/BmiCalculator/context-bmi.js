import React from 'react'

export const data = {
    weight: 65,
    height: 170,
    value: null,
}

export const Context = React.createContext({
    data,
    setData() {},
    calcValue() {},
})

export default null
