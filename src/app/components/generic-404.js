import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import '../../stylesheets/components/generic-404.css';

import corgi from '../../images/corgi.gif';

class Generic404 extends Component {

  render() {
    return (
      <div className="generic-404">
        <p className="text-404">404</p>
        <p className="sub-404">Carry on, nothing going on here...</p>
        <img src={corgi} className="corgi-image" alt="Corgi swimming" />
        <MediaQuery maxDeviceWidth={1224}>
          <RaisedButton
            className="back-404"
            label="Back"
            href="/"
            fullWidth={true}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Generic404;
