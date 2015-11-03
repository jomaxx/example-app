import { UPDATE_MARKDOWN } from '../../actions/types';

function markdown (state = '', action) {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      state = action.markdown;
      break;
  }
  return state;
}

export default markdown;
