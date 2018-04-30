import { Page } from '~/page'
import { Page2 } from '~/page2'
import { Page3 } from '~/page3'
import { Provider } from 'react-redux'
import { getStore } from '~/redux-config'
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    static getInitialProps({query: {initialCount}}) {
      initialCount = parseInt(initialCount)
      return { initialCount };
    }
    constructor(props) {
      super(props);
      this.state = {count: props.initialCount};
    }
    tick() {
      this.setState({count: this.state.count + 1});
    }
    render() {
      return (
          <Provider store={getStore()}>
        <div onClick={this.tick.bind(this)}>
          Clicks: {this.state.count ? this.state.count : 0}
          <Page page={this.state.count ? this.state.count : 0}>
          </Page>
        </div>
          </Provider>
      );
    }
  }
