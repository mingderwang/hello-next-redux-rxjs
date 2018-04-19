import { Page } from '~/page'
import { Provider } from 'react-redux'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <Page/>
    </div>
  </Provider>
