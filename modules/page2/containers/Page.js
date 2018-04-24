import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Component from '../components/Page'
import { add_value } from '~/page3/actions'

const mapDispatchToProps = dispatch => ({
  increment: () => {
   dispatch(add_value(3))
 },
  decrement: () => dispatch(decrement()),
})

export default connect(state => state.page2, mapDispatchToProps)(Component)
