import React, { Component } from 'react';
import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';

export default class DevPanel extends Component {

  constructor(props){
    super(props);
    this.state = {
      showTools: false
    };
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this._handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  _toggleTools() {
    this.setState({
      showTools: !this.state.showTools
    });
  }

  _handleKeyDown(e) {
    // ctrl+d
    if (e.keyCode === 68 && e.ctrlKey) {
      this._toggleTools();
    }
  }

  render() {
    if (!this.state.showTools) {
      return null;
    }

    return (
      <DebugPanel top right bottom>
        <DevTools store={this.props.store} monitor={LogMonitor}/>
      </DebugPanel>
    );
  }
}
