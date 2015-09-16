import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

require('./style.less');

class Markdown extends Component {

  static propTypes = {
    html: PropTypes.string
  }

  static defaultProps = {
    html: ''
  }

  render() {
    let className = 'markdown';

    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    return (    
      <div
        {...this.props}
        className={className}
        dangerouslySetInnerHTML={{__html: marked(this.props.html)}}/>
    );
  }
}

export default connect(
  state => ({
    html: state.html
  })
)(Markdown);
