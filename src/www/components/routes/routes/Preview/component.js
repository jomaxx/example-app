import React, { Component } from 'react';
import { connect } from 'react-redux';
import Markdown from '../../../ui/Markdown';

class PreviewRoute extends Component {
  render() {
    const { markdown } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <Markdown className="col-sm-12">
            {markdown}
          </Markdown>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    markdown: state.markdown
  })
)(PreviewRoute);
