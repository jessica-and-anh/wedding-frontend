import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
              Dear friends and family,<br /><br />
              We’ve done a bit of window shopping to find our favorite stores. We would be very grateful and appreciative to receive gifts, but having you come celebrate with us means more than utensils or blenders.<br /><br />
              If you would like to help us start our life marathon, please take a look at our registries.
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
