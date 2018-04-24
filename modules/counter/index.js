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
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
  static  propTypes = { initialCount: PropTypes.number.isRequired };
  static  defaultProps = { initialCount: 0 };
}
