import { combineReducers } from 'redux';
import { UPDATE_HTML } from '../actionTypes';

function html (state = '', action) {
  switch (action.type) {
    case UPDATE_HTML:
      state = action.html;
      break;
  }
  return state;
}

export default combineReducers({
  html
});

/*
{
  html: String
}
*/
