import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../stylesheets/components/other-party.css';

import dogs from '../../images/dogs.png';
import brian from '../../images/brian.png';

class OtherParty extends Component {

  render() {
    return (
      <section className="other-party">
        <header>And of course, the dogs and Brian</header>
        <div className="other-party-images">
          <img src={dogs} className="other-party-image" alt="baoBao and Tira" />
          <img src={brian} className="other-party-image" alt="Brian, the officiant" />
        </div>
        <MediaQuery minDeviceWidth={1224}>
          <div className="other-party-descriptions">
            <p className="description-text">baoBao, the ring dog + Tira, the flower dog</p>
            <p className="description-text">Brian, the officiant</p>
          </div>
        </MediaQuery>
      </section>
    );
  }
}

export default OtherParty;
