import React, { Component, PropTypes } from 'react';
import { HOME_PATH, PREVIEW_PATH } from '../AppRouter/PATHS';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={HOME_PATH}>{'</>'}</Link>
          </div>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to={PREVIEW_PATH}>Preview</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
