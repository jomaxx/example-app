import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { compose, createStore } from 'redux';

let _createStore = createStore;

let _devPanel = function () {
  return '';
}

if (__DEV__) {
  const { devTools, persistState } = require('redux-devtools');
  const DevPanel = require('./DevPanel');

  _devPanel = function (store) {
    return <DevPanel top right bottom store={store}/>
  }

  _createStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

export default class Application extends Component {

  static createStore(initialState) {
    return _createStore(reducer, initialState);
  }

  constructor(props) {
    super(props);
    this.state = {
      store: props.store || Application.createStore()
    };
  }

  render() {
    return (
      <div>
        <Provider store={this.state.store}>
          {() => (<AppRouter/>)}
        </Provider>
        {_devPanel(this.state.store)}
      </div>
    );
  }
}
