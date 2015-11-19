import { UPDATE_MARKDOWN } from '../types';

function updateMarkdown(markdown) {
  return {
    type: UPDATE_MARKDOWN,
    markdown: markdown,
  };
}

export default updateMarkdown;
