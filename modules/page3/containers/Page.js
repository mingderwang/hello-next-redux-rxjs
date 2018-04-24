import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Component from '../components/Page'
import { increment as increment2 } from '~/page3/actions'

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(increment())
 },
  decrement: () => dispatch(decrement()),
})

export default connect(state => state.page3, mapDispatchToProps)(Component)
