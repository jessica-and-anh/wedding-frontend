import React from 'react';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';

import '../../../stylesheets/components/hero.css';

function RsvpHero({ isAnyoneAttending }) {
  let line1 = "THANKS FOR";
  let line2 = "RSVPING";

  const iconStyle = {
    width: 40,
    height: 40,
  };

  if (!isAnyoneAttending) {
    line1 = "WE WILL";
    line2 = "MISS YOU!";
  }

  return (
    <section className="hero-rsvp">
      <h1 className="hero-rsvp-text">
        <p className="rsvp-confirmation__header">{line1}</p>
        <p className="rsvp-confirmation__header">{line2}</p>
        <p className="rsvp-confirmation__arrow">
          <ArrowDown color="#fff" style={iconStyle}/>
        </p>
      </h1>
    </section>
  );
}

export default RsvpHero;
