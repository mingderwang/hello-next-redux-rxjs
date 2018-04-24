import Container from './containers/Page'
import state from './initialState'
import pageReducer from './reducer'
import * as pageActions from './actions'

export const Page3 = Container
export const initialState = state
export const reducer = pageReducer
export const actions = pageActions
/*
import * as counterActions from './actions'
import counterReducer from './reducer'
import Container from './containers/Counter'
import state from './initialState'

export const actions = counterActions
export const reducer = counterReducer
export const Counter = Container
export const initialState = state
*/
