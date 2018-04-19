// this initial state is used for server-side rendering as well
import { initialState as page } from '~/page'

// merge all initial states and export
export default Object.assign({},
  page,
)
