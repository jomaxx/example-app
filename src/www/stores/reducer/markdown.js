import { UPDATE_MARKDOWN } from '../../actions/types';

function markdown(state = '', action) {
  switch (action.type) {
  case UPDATE_MARKDOWN:
    return action.markdown;
  default:
    return state;
  }
}

export default markdown;
