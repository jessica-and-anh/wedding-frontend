import React, { PropTypes } from 'react';
import OtherLodgingOptions from './other-lodging-options.js';
import fridayImage from '../../../images/rsvp/friday.png';
import saturdayImage from '../../../images/rsvp/saturday.png';
import sundayImage from '../../../images/rsvp/sunday.png';
import '../../../stylesheets/components/rsvp-confirmation.css';

function Calendars({ lodgingDays, requestedLodgingDays, tier }) {
  if (requestedLodgingDays.length > 0) {
    return (
      <ul className="flex space-3">
        {Object.keys(lodgingDays).map((day) => {
          let image;
          if (!lodgingDays[day]) return null;
          switch(day) {
            case 'friday':
              image = fridayImage;
              break;
            case 'sunday':
              image = sundayImage;
              break;
            default:
              image = saturdayImage; // almost everyone should request this
              break;
          }
          return (
            <li className="padding-left-1 padding-right-1" key={day}>
              <div className="rsvp-confirmation__calendar">
                <img src={image} className="rsvp-day" alt={day} />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <p className="error space-2 text-center padding-left-3 padding-right-3">
        You are <strong>not</strong> requesting on-site lodging.
      </p>
      <OtherLodgingOptions />
    </div>
  );
}

export default function Lodging({
  lodgingDays,
  requestedLodgingDays,
  userGroup,
}) {
  const { tier } = userGroup;
  const nights = requestedLodgingDays.length > 1 || requestedLodgingDays.length === 0 ? 'NIGHTS' : 'NIGHT';

  return (
    <div className="rsvp-lodging">
      <h2 className="space-2">REQUESTED ACCOMMODATIONS</h2>
      <h1 className="lodging-nights space-3">{requestedLodgingDays.length} {nights}</h1>
      <Calendars
        lodgingDays={lodgingDays}
        requestedLodgingDays={requestedLodgingDays}
        tier={tier}
      />
    </div>
  );
}

Lodging.propTypes = {
  requestedLodgingDays: PropTypes.array.isRequired,
  userGroup: PropTypes.object.isRequired,
  lodging: PropTypes.object.isRequired,
  guestsAttending: PropTypes.array.isRequired,
};
