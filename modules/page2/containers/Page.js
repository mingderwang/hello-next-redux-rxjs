import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Component from '../components/Page'
import { increment as increment2 } from '~/page3/actions'

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(increment())
   dispatch(increment2())
 },
  decrement: () => dispatch(decrement()),
})

export default connect(state => state.page2, mapDispatchToProps)(Component)
