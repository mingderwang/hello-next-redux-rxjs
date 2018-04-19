/* eslint-disable fp/no-nil, fp/no-let, fp/no-mutation, better/no-ifs */
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'
import StateLoader from "./stateLoader"

let store = null

export default (reducer, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(epics);
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware))
  if (!store) {
    const stateLoader = new StateLoader();
    store = createStore(reducer, stateLoader.loadState(), enhancers)
    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    })
  }
  return store
}
