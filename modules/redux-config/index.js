/* eslint-disable import/prefer-default-export */

// ming> no need to chagne this file

import reducers from './reducers'
import initialState from './initialState'
import initStore from './store'

// expose a function for pages to grab/init the store
export const getStore = () => initStore(reducers, initialState)
