import { combineReducers } from 'redux'
import { reducer as page } from '~/page'
import { reducer as page2 } from '~/page2'
import { reducer as page3 } from '~/page3'

export default combineReducers({
  page,
  page2,
  page3,
})
