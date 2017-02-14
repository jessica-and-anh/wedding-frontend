import React, { Component } from 'react';
import '../../stylesheets/components/hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-welcome-container">
          <h1 className="jessica-plus-anh">
            JESSICA + ANH
          </h1>
          <p className="wedding-date">9.2.17</p>
        </div>
      </section>
    );
  }
}

export default Hero;
