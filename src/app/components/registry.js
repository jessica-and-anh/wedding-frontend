import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../stylesheets/components/registry.css';

import venmo from '../../images/venmo.png';
import paypal from '../../images/paypal.png';
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
              We are very thankful to have a fully stocked kitchen and home.
              In lieu of a traditional registry, we would be very appreciative of a cash contribution towards our honeymoon.
            </p>
            <MediaQuery minDeviceWidth={1224}>
              <p className="registry-text">
                Please visit the various options on the right.
              </p>
            </MediaQuery>
          </div>
          <div className="registry-section payments">
            <a className="payment-anchor" target="_blank" href="https://venmo.com/atran-wynd"><img className="payment-vendor" src={venmo} alt="Venmo" /></a>
            <a className="payment-anchor" target="_blank" href="https://www.paypal.me/atranwynd"><img className="payment-vendor" src={paypal} alt="Paypal" /></a>
            <a className="payment-anchor" target="_blank" href="https://www.amazon.com/wedding/anh-tran-jessica-tai-chalet-view-lodge-september-2017/registry/2G6ZHB706PXGU"><img className="payment-vendor" src={amazon} alt="Amazon" /></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Registry;
