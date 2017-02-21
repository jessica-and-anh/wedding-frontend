import React, { Component } from 'react';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';
import '../../stylesheets/components/cta.css';

class Cta extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.onRsvpClick = this.onRsvpClick.bind(this);
    this.onCTAScroll = this.onCTAScroll.bind(this);
    this.isFixed = false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onCTAScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  onRsvpClick(evt) {
    evt.preventDefault();
    this.dispatch(showRsvpPasscodeModal());
  }

  onCTAScroll(evt) {
    const section = ReactDOM.findDOMNode(this.refs['ctaSection']);
    this.isFixed = section.getBoundingClientRect().top < 75 &&
      document.body.scrollTop > 580;
    this.forceUpdate();
  }

  render() {
    return (
      <section className={cx('cta', {'fixed': this.isFixed})} ref="ctaSection">
        <button
          className="rsvp-button"
          onClick={this.onRsvpClick}
        >
          RSVP NOW
        </button>
      </section>
    );
  }
}

Cta = connect()(Cta);

export default Cta;
