import React, { Component } from 'react';
import Scroll from 'react-scroll';
import '../../stylesheets/components/App.css';

import Hero from '../components/hero';
import Cta from '../components/cta';
import About from '../components/about';
import Timeline from '../components/timeline';
import Bridesmaids from '../components/bridesmaids';
import Groomsmen from '../components/groomsmen';
import OtherParty from '../components/other-party';
import DayOf from '../components/day-of';
import Carousel from '../components/carousel';
import Footer from '../components/footer';

const Element = Scroll.Element;

class Homepage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Cta />
        <section className="bride-and-groom scrollable">
          <Element name="bride-and-groom" className="scroll-to-wrapper">
            <About />
            <Timeline />
          </Element>
        </section>
        <section className="wedding-party scrollable">
          <Element name="wedding-party" className="scroll-to-wrapper">
            <Bridesmaids />
            <Groomsmen />
            <OtherParty />
          </Element>
        </section>
        <section className="the-day-of scrollable">
          <Element name="the-day-of" className="scroll-to-wrapper">
            <DayOf />
          </Element>
        </section>
        <section className="carousel scrollable">
          <Element name="photos" className="scroll-to-wrapper">
            <Carousel />
          </Element>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
