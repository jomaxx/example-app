import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

if (process.env.CLIENT) {
  require('./style.less');
}

class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    onChange() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.onChange(e);
  }

  render() {
    return (
      <textarea
        {...this.props}
        value={this.state.value}
        className={classNames('textarea', this.props.className)}
        onChange={this._onChange.bind(this)} />
    );
  }
}

export default Textarea;
