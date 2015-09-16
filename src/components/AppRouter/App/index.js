import React, { Component } from 'react';
import { updateHtml} from '../../../actionCreators';
import Nav from '../../Nav';

require('./style.less');

export default class AppRoute extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
