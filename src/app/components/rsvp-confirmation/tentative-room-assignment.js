import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';
import OtherLodgingOptions from './other-lodging-options.js';

function logTentativeAssignmentException({ userGroupId, roomNumber }) {
  ReactGA.exception({
    description: `Incorrect housing assumption for usergroup ${userGroupId} and ` +
                 `room number ${roomNumber}`,
    fatal: false,
  });
}

function logUserAttendanceException({ userId, roomNumber }) {
  ReactGA.exception({
    description: `Exception: user id ${userId} was expected to attend and stay in ` +
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

BookOnline.propTypes = {
  guestsAttending: PropTypes.array.isRequired,
};

export default function TentativeRoomAssignment({
  lodging,
  requestedLodgingDays,
  guestsAttending,
  guestsNotAttending,
  userGroupId,
  tier,
}) {
  const {
    room_number: roomNumber,
    room_type: roomType,
    num_beds: numBeds,
    max_occupancy: maxOccupancy,
    roomies,
    leader_user,
  } = lodging;

  const guestsNotAttendingIds = [];
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

  guestsNotAttending.forEach((guest) => {
    const { id } = guest;
    logUserAttendanceException({ userGroupId: id, roomNumber });
    guestsNotAttendingIds.push(id);
  })

  // At least one guest is coming
  if (requestedLodgingDays.length === 0) {
    logTentativeAssignmentException({ userGroupId, roomNumber });
    detailParagraph = (
      <p className="error">
        NOTE: We have saved a room for you, but you are not requesting accommodations for
        any of the nights. Please modify your RSVP if you’d like to keep the below room.
      </p>
    );
  } else if (guestsAttending.length === 0) {
    logTentativeAssignmentException({ userGroupId, roomNumber });
    detailParagraph = (
      <p className="error">
        NOTE: We have saved a room for you, but nobody in your party has confirmed attendance.
        Please modify your RSVP if you’d like to keep the below room.
      </p>
    );
  } else {
    let leaderWillBookText = <span>Your room leader will call in to book your reserved room</span>;
    const isLeaderInThisUserGroup =
      guestsAttending.concat(guestsNotAttending).some((element, idx, array) => {
        return element.id === leader_user.id;
    })

    if (isLeaderInThisUserGroup) {
      leaderWillBookText = (
        <span>
          <strong>{leader_user.first_name},
          please call in <a href="tel:+15308325528" className="styled-link">(530) 832-5528</a>&nbsp;
          to book your group's reserved room</strong>
        </span>
      );
    }
    detailParagraph = (
      <p>
        There’s limited on-site accommodation, but we’ve blocked a room with your name on it!&nbsp;
        {leaderWillBookText} ({roomNumber}).
        You may extend your check-in and check-out dates.
        Please confirm and coordinate with your roomies if you have changes.
        {guestsNotAttendingIds.length > 0 &&
          <strong>Heads up - looks like some of your roomies are not attending.</strong>
        }
      </p>
    );
  }

  const roomiesList = (roomies, guestsNotAttendingIds) => {
    return (
      <ol>
        {
          roomies.map((roomie) => {
            const { first_name: firstName, last_name: lastName, id } = roomie;
            return (
              <li key={firstName} className={guestsNotAttendingIds.includes(id) ? "error-text" : ""}>
                {firstName} {lastName}
              </li>
            );
          })
        }
      </ol>
    );
  }


  return (
    <div >
      {detailParagraph}
      <ul className="space-top-2 space-4 text-center">
        <li><strong>Room leader:</strong> {leader_user.first_name} {leader_user.last_name}</li>
        <li><strong>Room number</strong>: {roomNumber}</li>
        <li><strong>Room type</strong>: {roomType}</li>
        <li><strong>Number of beds</strong> {numBeds}</li>
        <li><strong>Max occupancy:</strong> {maxOccupancy}</li>
        <li><strong>Roomies:</strong>{roomiesList(roomies, guestsNotAttendingIds)}</li>
      </ul>
      <p className="text-center">
         Excited to celebrate with you!
      </p>
    </div>
  );
}

TentativeRoomAssignment.propTypes = {
  guestsAttending: PropTypes.array.isRequired,
  guestsNotAttending: PropTypes.array.isRequired,
  lodging: PropTypes.object.isRequired,
  requestedLodgingDays: PropTypes.array.isRequired,
  userGroupId: PropTypes.number.isRequired,
  tier: PropTypes.number.isRequired,
};
