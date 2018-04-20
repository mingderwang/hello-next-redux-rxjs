// this initial state is used for server-side rendering as well
import { initialState as page } from '~/page'
import { initialState as page2 } from '~/page2'
import { initialState as page3 } from '~/page3'

// merge all initial states and export
export default Object.assign({},
  page,
  page2,
  page3,
)
