// constants
export const INCREMENT = 'page3/INCREMENT'
export const DECREMENT = 'page3/DECREMENT'
export const SETVALUE = 'page3/SETVALUE'

// action creators
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const add_value = value => ({ type: SETVALUE , value })
