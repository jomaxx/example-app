import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: marked(props.children),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.setState({
        html: marked(nextProps.children),
      });
    }
  }

  render() {
    return (
      <div
        className={classNames('markdown', this.props.className)}
        dangerouslySetInnerHTML={{__html: this.state.html}}/>
    );
  }
}

Markdown.propTypes = propTypes;

export default Markdown;
