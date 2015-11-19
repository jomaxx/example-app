import React, { Component } from 'react';
import { Link } from 'react-router';

class NavView extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">{'</>'}</Link>
          </div>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/preview">Preview</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavView;
