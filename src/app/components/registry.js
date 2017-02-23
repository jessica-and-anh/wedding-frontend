import React, { Component } from 'react';
import '../../stylesheets/components/registry.css';

import amazon from '../../images/amazon.png';

class Registry extends Component {

  render() {
    return (
      <section className="get-money">
        <div className="registry-container max-width">
          <div className="registry-section">
            <header>REGISTRY</header>
            <hr />
            <p className="registry-text">
              We are registered at the following locations.
            </p>
          </div>
          <div className="registry-section payments">
            <a className="payment-anchor" target="_blank" href="https://www.amazon.com/wedding/anh-tran-jessica-tai-chalet-view-lodge-september-2017/registry/2G6ZHB706PXGU"><img className="payment-vendor" src={amazon} alt="Amazon" /></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Registry;
