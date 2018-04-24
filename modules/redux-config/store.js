/* eslint-disable fp/no-nil, fp/no-let, fp/no-mutation, better/no-ifs */
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'
import StateLoader from "./stateLoader"
import logger from 'redux-logger'

let store = null

export default (reducer, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(epics);
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware, logger))
  if (!store) {
    const stateLoader = new StateLoader();
    store = createStore(reducer, stateLoader.loadState(), enhancers)

    const onStateChange = function (global) {
      global._state = this.getState()
    }.bind(store, global)

    store.subscribe(onStateChange)
    onStateChange()
    console.info('Application state is available via global _state object.', '_state=', global._state)

    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    })
  }
  return store
}
