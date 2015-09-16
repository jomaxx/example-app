import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateHtml} from '../../actionCreators';

require('./style.less');

class Textarea extends Component {

  static propTypes = {
    html: PropTypes.string
  }

  static defaultProps = {
    html: ''
  }

  render() {
    return (
      <textarea
        {...this.props}
        placeholder="Type here..."
        value={this.props.html} />
    );
  }
}

export default connect(
  state => ({
    html: state.html
  }),
  dispatch => ({
    onChange(e) {
      dispatch(updateHtml(e.target.value));
    }
  })
)(Textarea);
