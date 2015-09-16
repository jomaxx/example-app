import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from '../../../ui/Textarea';
import updateMarkdown from '../../../../actions/creators/updateMarkdown';
import debounce from '../../../../utils/debounce';

class CodeRoute extends Component {
  render() {
    const { onTextareaChange, textareaValue } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <Textarea
            className="col-sm-12"
            onChange={onTextareaChange}
            value={textareaValue} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    textareaValue: state.markdown
  }),
  dispatch => ({
    onTextareaChange: debounce(function (e) {
      dispatch(updateMarkdown(e.target.value));
    }, 300)
  })
)(CodeRoute);
