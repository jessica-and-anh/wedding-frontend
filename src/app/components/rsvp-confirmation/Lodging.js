import React, { PropTypes } from 'react';
import fridayImage from '../../../images/rsvp/friday.png';
import saturdayImage from '../../../images/rsvp/saturday.png';
import sundayImage from '../../../images/rsvp/sunday.png';
import '../../../stylesheets/components/rsvp-confirmation.css';

function Calendars({ lodgingDays, requestedLodgingDays }) {
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
              <li className="padding-left-1 padding-right-1" key={day}>
                <div className="rsvp-confirmation__calendar">
                  <img src={image} className="rsvp-day" alt={day} />
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-center padding-left-4 padding-right-4">We will let you know shortly if your request can be approved.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="error space-2 text-center padding-left-3 padding-right-3">
        You are <b>not</b> requesting on-site lodging. There are many other options nearby such as:
      </p>
      <ul>
        <li className="space-1">
          <a className="styled-link" href="http://www.graeagle.com/accommodations.html">
            Graeagle accommodations
          </a>
        </li>
        <li className="space-1">
          <a className="styled-link" href="http://www.ci.portola.ca.us/portola-lodging.html">
            Portola accommodations
          </a>
        </li>
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
  const nights = requestedLodgingDays.length > 1 || requestedLodgingDays.length === 0 ? 'NIGHTS' : 'NIGHT';

  return (
    <div className="rsvp-lodging text-center">
      <h2 className="space-2">REQUESTED ACCOMODATIONS</h2>
      <h1 className="space-3">{requestedLodgingDays.length} {nights}</h1>
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
