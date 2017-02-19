import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../stylesheets/components/hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-welcome-container">
          <MediaQuery minDeviceWidth={1224}>
            {(matches) => {
              if (matches) {
                return <h1 className="jessica-plus-anh">JESSICA + ANH</h1>;
              } else {
                return <h1 className="jessica-plus-anh">JESSICA<br />+<br />ANH</h1>;
              }
            }}
          </MediaQuery>
          <p className="wedding-date">9.2.17</p>
        </div>
      </section>
    );
  }
}

export default Hero;
