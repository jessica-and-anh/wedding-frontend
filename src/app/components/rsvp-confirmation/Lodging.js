import React, { PropTypes } from 'react';
import fridayImage from '../../../images/rsvp/friday.png';
import saturdayImage from '../../../images/rsvp/saturday.png';
import sundayImage from '../../../images/rsvp/sunday.png';
import '../../../stylesheets/components/rsvp-confirmation.css';

function Calendars({ lodgingDays, requestedLodgingDays }) {

  console.log('requestedLodgingDays', requestedLodgingDays);
  if (requestedLodgingDays.length > 0) {
    return (
      <div>
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
              <li className="spacing-right" key={day}>
                <label className="rsvp-day-image-wrapper" htmlFor={day}>
                  <img src={image} className="rsvp-day" alt={day} />
                </label>
              </li>
            );
          })}
        </ul>

        We will let you know shortly if your request can be approved.
      </div>
    );
  }

  return (
    <div>
      <p className="error">
        You are <b>not</b> requesting on-site lodging. There are many other options
        nearby such as:
      </p>
      <ul>
        <li>Example 1: Pine lodge</li>
        <li>Example 2:</li>
        <li>some other place</li>
      </ul>
    </div>
  );
}

export default function Lodging({ userGroup }) {
  const {
    lodging_friday: friday,
    lodging_saturday: saturday,
    lodging_sunday: sunday,
  } = userGroup;
  const lodgingDays = {
    friday,
    saturday,
    sunday,
  };
  const requestedLodgingDays = Object.values(lodgingDays).filter((day) => { return day });

  return (
    <div className="confirmation-details-container">
      <h2 className="space-2">REQUESTED ACCOMODATIONS</h2>
      <h1 className="space-3">{requestedLodgingDays.length} NIGHTS</h1>
      <Calendars
        lodgingDays={lodgingDays}
        requestedLodgingDays={requestedLodgingDays}
      />
    </div>
  );
}

Lodging.propTypes = {
  userGroup: PropTypes.object.isRequired,
};
