import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';
import AddToCalendar from './add-to-calendar';

import '../../stylesheets/components/footer.css';
import logo from '../../images/logo.png';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.onRsvpClick = this.onRsvpClick.bind(this);
  }

  onRsvpClick(evt) {
    evt.preventDefault();
    this.dispatch(showRsvpPasscodeModal());
  }

  render() {
    return (
      <section className="footer">
        <img src={logo} className="footer-logo" alt="Logo" />
        <h3>SEE YOU SOON</h3>

        <div className="footer-content">
          <div className="footer-column">
            <h4>JESSICA + ANH</h4>
            <a className="footer-link" href="#" onClick={this.onRsvpClick}>RSVP</a>
            <a className="footer-link" href="#">FAQ</a>
            <a className="footer-link last-link" target="_blank" href="mailto:atran.wynd@gmail.com,jessicamtai@gmail.com?Subject=Hello%20there">Contact Us</a>
          </div>

          <div className="footer-column">
            <h4>LABOR DAY WEEKEND</h4>
            <p>09/02/2017 - 09/04/2017</p>
            <p>Saturday, 4:30 PM</p>
            <div className="footer-link last-link">
              <AddToCalendar />
            </div>
          </div>

          <div className="footer-column">
            <h4>CHALET VIEW LODGE</h4>
            <p>72056 CA-70</p>
            <p>Portola, CA 96122</p>
            <a className="footer-link last-link" target="_blank" href="https://www.google.com/maps/dir//Chalet+View+Lodge,+72056+CA-70,+Portola,+CA+96122/@39.7931841,-120.5337847,17z/data=!4m15!1m6!3m5!1s0x809c6b35ba2b889d:0xdc0312148e7fc387!2sChalet+View+Lodge!8m2!3d39.79318!4d-120.531596!4m7!1m0!1m5!1m1!1s0x809c6b35ba2b889d:0xdc0312148e7fc387!2m2!1d-120.531596!2d39.79318">Get Directions</a>
          </div>
        </div>

        <h5>Built with love, by Jessica and Anh.</h5>
      </section>
    );
  }
}

Footer = connect()(Footer);

export default Footer;
