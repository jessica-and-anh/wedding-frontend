import React, { PropTypes } from 'react';
import fridayImage from '../../../images/rsvp/friday.png';
import saturdayImage from '../../../images/rsvp/saturday.png';
import sundayImage from '../../../images/rsvp/sunday.png';
import '../../../stylesheets/components/rsvp-confirmation.css';

function Calendars({ lodgingDays, requestedLodgingDays, tier }) {
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

        <p className="text-center padding-left-4 padding-right-4">
          On-site acommodations are limited so only reserve what your party needs.&nbsp;
          <a href="http://chaletviewlodge.com/accommodations/" className="styled-link">
            View on-site lodging options
          </a>.
        </p>

        {tier <= 1 &&
          <p className="text-center padding-left-4 padding-right-4">
            As part of the wedding rehearsal group, you will have first picks for lodging.
            Plan to arrive by Friday afternoon for rehearsal. Afterwards, we will provide dinner for
            you (exclusive to wedding rehearsal group). Jessica will reach out to you to confirm
            your lodging request.
          </p>
        }
        <br />
        {tier > 1 &&
          <p className="text-center padding-left-4 padding-right-4">
            Please book&nbsp;
            <a
              href="https://gc.synxis.com/rez.aspx?Hotel=67898&Chain=18924&template=RBE&shell=RBE"
              className="styled-link">
              online at Chalet View Lodge
            </a>.
          </p>
        }
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

export default function Lodging({ lodgingDays, requestedLodgingDays, tier }) {
  const nights = requestedLodgingDays.length > 1 || requestedLodgingDays.length === 0 ? 'NIGHTS' : 'NIGHT';

  return (
    <div className="rsvp-lodging">
      <h2 className="space-2">REQUESTED ACCOMODATIONS</h2>
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
  tier: PropTypes.number.isRequired,
};
