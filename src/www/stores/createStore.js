import { compose, createStore as _createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';

let createStore;

if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
  createStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(_createStore);
} else {
  createStore = _createStore;
}

export default createStore;
