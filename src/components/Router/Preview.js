import React, { Component } from 'react';
import Markdown from '../Markdown';

export default class PreviewRoute extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Markdown className="col-sm-12"/>
        </div>
      </div>
    );
  }
}
