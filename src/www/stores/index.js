import createStore from './createStore';
import reducer from './reducer';

function createAppStore(initialState) {
  return createStore(reducer, initialState);
}

export {
  createAppStore,
};
