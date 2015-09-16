import React from 'react';
import NavView from '../views/Nav';

if (process.env.CLIENT) {
  require('./style.less');
}

function ApplicationRoute({ children }) {
  return (
    <div>
      <NavView/>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ApplicationRoute
