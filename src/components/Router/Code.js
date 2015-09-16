import React, { Component } from 'react';
import Textarea from '../Textarea';

export default class CodeRoute extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Textarea className="col-sm-12"/>
        </div>
      </div>
    );
  }
}
