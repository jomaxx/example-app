import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

if (process.env.CLIENT) {
  require('./style.less');
}

const propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  onChange() {},
};

class Textarea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  _onChange(e) {
    this.setState({
      value: e.target.value,
    });

    this.props.onChange(e);
  }

  render() {
    const { className } = this.props;
    const { value } = this.state;
    const onChange = this._onChange.bind(this);

    return (
      <textarea
        {...this.props}
        value={value}
        className={classNames('textarea', className)}
        onChange={onChange} />
    );
  }
}

Textarea.defaultProps = defaultProps;
Textarea.propTypes = propTypes;

export default Textarea;
