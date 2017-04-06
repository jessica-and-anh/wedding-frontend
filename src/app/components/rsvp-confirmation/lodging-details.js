import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';
import OtherLodgingOptions from './other-lodging-options.js';

function LodgingDirections({ tier, guestsAttending }) {
  if (!guestsAttending) {
    return null;
  }

  let details;
  if (tier <= 1) {
    details = (
      <p>
        As part of the wedding rehearsal group, you will have first picks for lodging.
        Plan to arrive by Friday afternoon for rehearsal. Afterwards, we will provide dinner for
        you (exclusive to wedding rehearsal group).
      </p>
    );
  } else if (tier === 2) {
    details = (
      <p>
        As close friends and family of Jessica and Anh, you get high priority for on-site lodging
        because we want to spend time with you! There are a <strong>limited number of rooms at
        Chalet View Lodge</strong>, so make sure to reserve yours soon!
      </p>
    );
  } else {
    details = (
      <p>
        On-site acommodations are limited so only reserve what your party needs.
      </p>
    );
  }

  return (
    <div className="space-2">
      {details}
      <p className="space-top-2 text-center padding-left-4 padding-right-4">
        <a href="http://chaletviewlodge.com/accommodations/" className="styled-link" target="_blank">
          View on-site lodging options
        </a>
      </p>
    </div>
  );
}

function logTentativeAssignmentException({ userGroupId, roomNumber }) {
  ReactGA.exception({
    description: `Incorrect housing assumption for usergroup ${userGroupId} and ` +
                 `room number ${roomNumber}`,
    fatal: false,
  });
}

function BookOnline({ guestsAttending }) {
  if (guestsAttending.length === 0) {
    return null;
  }

  return (
    <div className="space-top-4">
      <p>
        At your earliest convenience,&nbsp;
        <a
          href="https://gc.synxis.com/rez.aspx?Hotel=67898&Chain=18924&template=RBE&shell=RBE"
          className="styled-link"
          target="_blank"
        >
          book your room online
        </a>&nbsp;
        with the special code <strong>"TAI"</strong>.
      </p>

    </div>
  );
}

function TentativeRoomAssignment({
  lodging,
  requestedLodgingDays,
  guestsAttending,
  userGroupId,
  tier,
}) {
  const {
    room_number: roomNumber,
    room_type: roomType,
    num_beds: numBeds,
    max_occupancy: maxOccupancy,
    roomies,
  } = lodging;
  debugger;

  let detailParagraph = null;
  // No tentative assignment for this user group
  if (roomNumber == null) {
    return (
      <div>
        <BookOnline guestsAttending={guestsAttending}/>
        {tier > 1 && requestedLodgingDays > 0 && <OtherLodgingOptions />}
      </div>
    );
  }

  // At least one guest is coming
  if (requestedLodgingDays.length === 0) {
    logTentativeAssignmentException({ userGroupId, roomNumber })
    detailParagraph = (
      <p className="error">
        NOTE: We have saved a room for you, but you are not requesting accommodations for
        any of the nights. Please modify your RSVP if you'd like to keep the below room.
      </p>
    );
  } else if (guestsAttending.length === 0) {
    logTentativeAssignmentException({ userGroupId, roomNumber })
    detailParagraph = (
      <p className="error">
        NOTE: We have saved a room for you, but nobody in your party has confirmed attendance.
        Please modify your RSVP if you'd like to keep the below room.
      </p>
    );
  } else {
    detailParagraph = (
      <p>
        There's limited on-site accommodation, but we've blocked a room with your name on it!
        (Please confirm and coordinate wih your roomies.)
      </p>
    );
  }

  const roomiesList = (roomies) => {
    return (
      <ol>
        {
          roomies.map((roomie) => {
            const { first_name: firstName, last_name: lastName } = roomie;
            return <li key={firstName}>{firstName} {lastName}</li>;
          })
        }
      </ol>
    );
  }
  return (
    <div >
      {detailParagraph}
      <ul className="space-top-2 space-4 text-center">
        <li><strong>Room number</strong>: {roomNumber}</li>
        <li><strong>Room type</strong>: {roomType}</li>
        <li><strong>Number of beds</strong> {numBeds}</li>
        <li><strong>Max occupancy:</strong> {maxOccupancy}</li>
        <li><strong>Roomies:</strong>{roomiesList(roomies)}</li>
      </ul>
      <p>
        You will provide your credit card to pay for the room when you arrive. Excited to have you!
      </p>
    </div>
  );
}

export default function LodgingDetails({ guestsAttending, lodging, requestedLodgingDays, userGroup }) {
  const { tier, id } = userGroup;
  const { room_number: roomNumber } = lodging;
  const areGuestsAttending = guestsAttending.length > 0;

  // Guests are not coming and we weren't expecting them to
  if (roomNumber == null && (!areGuestsAttending || requestedLodgingDays.length === 0)) {
    return null;
  }

  return (
    <div className="lodging-details-container">
      <h2 className="text-center space-2">LODGING DETAILS</h2>
      {guestsAttending.length > 0 &&
        <LodgingDirections
          guestsAttending={guestsAttending}
          tier={tier}
        />
      }
      <TentativeRoomAssignment
        lodging={lodging}
        requestedLodgingDays={requestedLodgingDays}
        guestsAttending={guestsAttending}
        userGroupId={id}
        tier={tier}
      />
    </div>
  );
}

LodgingDetails.propTypes = {
  guestsAttending: PropTypes.array.isRequired,
  lodging: PropTypes.object.isRequired,
  requestedLodgingDays: PropTypes.array.isRequired,
  userGroup: PropTypes.object.isRequired,
};

