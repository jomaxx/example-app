import { UPDATE_HTML } from '../actionTypes';

export function updateHtml (html) {
  return {
    type: UPDATE_HTML,
    html: html
  };
}
