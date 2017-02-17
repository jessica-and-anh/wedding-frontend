import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';
import Scroll from 'react-scroll';
import '../../stylesheets/components/nav.css';

import logo from '../../images/logo.png';

const ScrollLink = Scroll.Link;

const HEADER_NAV_ANCHORS = [
  {
    text: 'BRIDE & GROOM',
    anchorId: 'bride-and-groom',
  },
  {
    text: 'WEDDING PARTY',
    anchorId: 'wedding-party',
  },
  {
    text: 'PHOTOS',
    anchorId: 'photos',
  },
  {
    text: 'WEDDING WEEKEND',
    anchorId: 'the-day-of',
  },
  {
    text: 'REGISTRY',
    anchorId: 'registry',
  }
];

export function HeaderNavScrollableAnchor({ text, anchorId }) {
  return (
    <li
      className="nav-item"
    >
      <ScrollLink
        activeClass="active"
        className="nav-item-anchor"
        to={anchorId}
        spy={true}
        smooth={true}
        duration={500}
        isDynamic={true}
      >
        {text}
      </ScrollLink>
    </li>

  );
}

export function HeaderNavAnchor({ text, anchorId }) {
  return (
    <li className="nav-item">
      <a href={`/#${anchorId}`} className="nav-item-anchor">{text}</a>
    </li>
  );
}

class Nav extends Component {

  onRsvpClick(evt) {
    evt.preventDefault();
    this.props.dispatch(showRsvpPasscodeModal());
  }

  render() {
    const isHomepage = this.props.pathname === '/';
    return (
      <div>
        <nav className="nav">
          <ul className="nav-item-container max-width">
            <li className="nav-item home">
              <a href="/">
                <img src={logo} className="logo" alt="logo for bride and groom" />
              </a>
            </li>

            {
              HEADER_NAV_ANCHORS.map((anchor, index) => {
                if (isHomepage) {
                  return (
                    <HeaderNavScrollableAnchor
                      text={anchor.text}
                      anchorId={anchor.anchorId}
                      key={index}
                    />
                  )
                }

                return (
                  <HeaderNavAnchor
                    text={anchor.text}
                    anchorId={anchor.anchorId}
                    key={index}
                  />
                )
              })
            }

            <li
              className="nav-item nav-rsvp"
              onClick={this.onRsvpClick.bind(this)}
            >
              <a href="#">
                RSVP
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-height-holder" />
      </div>
    );
  }
}

Nav = connect()(Nav);

export default Nav;
