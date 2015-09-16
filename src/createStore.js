import { compose, createStore } from 'redux';

let finalCreateStore = createStore;

if (__DEV__) {
  const { devTools, persistState } = require('redux-devtools');

  finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

export default finalCreateStore;
