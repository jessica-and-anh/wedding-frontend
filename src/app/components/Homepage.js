import React, { Component } from 'react';
import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';
import '../../stylesheets/components/App.css';

import Hero from '../components/hero';
import Cta from '../components/cta';
import About from '../components/about';
import Timeline from '../components/timeline';
import Bridesmaids from '../components/bridesmaids';
import Groomsmen from '../components/groomsmen';
import OtherParty from '../components/other-party';
import Carousel from '../components/carousel';
import DayOf from '../components/day-of';
import Footer from '../components/footer';

const Element = Scroll.Element;
const RSVP_CODE_LENGTH = 6;

class Homepage extends Component {

  // Direct link toe RSVP modal will open up the modal with the fetched info and skip the
  // passcode step
  componentWillMount() {
    const { onLoadWithRsvpCode, location } = this.props;
    const { rsvpCode } = location.query;
    if (rsvpCode && rsvpCode.length === RSVP_CODE_LENGTH) {
      onLoadWithRsvpCode(rsvpCode.toUpperCase());
    }
  }

  render() {
    return (
      <div>
        <Hero />
        <Cta />
        <section className="bride-and-groom scrollable" id="bride-and-groom">
          <Element name="bride-and-groom" className="scroll-to-wrapper">
            <About />
            <MediaQuery minDeviceWidth={1224}><Timeline /></MediaQuery>
          </Element>
        </section>
        <section className="wedding-party scrollable" id="wedding-party">
          <Element name="wedding-party" className="scroll-to-wrapper">
            <Bridesmaids />
            <Groomsmen />
            <OtherParty />
          </Element>
        </section>
        <MediaQuery minDeviceWidth={1224}>
          <section className="carousel scrollable" id="photos">
            <Element name="photos" className="scroll-to-wrapper">
              <Carousel />
            </Element>
          </section>
        </MediaQuery>
        <section className="the-day-of scrollable" id="wedding-weekend">
          <Element name="wedding-weekend" className="scroll-to-wrapper">
            <DayOf />
          </Element>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
