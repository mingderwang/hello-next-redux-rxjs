import { Page } from '~/page'
import { Page2 } from '~/page2'
import { Page3 } from '~/page3'
import { Provider } from 'react-redux'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <Page/>
      <Page2/>
      <Page3/>
    </div>
  </Provider>
