import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Markdown from '../../../components/Markdown';

const propTypes = {
  markdown: PropTypes.string,
};

class PreviewRouteComponent extends Component {
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

PreviewRouteComponent.propTypes = propTypes;

const stateToProps = ({ markdown }) => ({
  markdown,
});

export default connect(stateToProps)(PreviewRouteComponent);
