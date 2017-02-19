import React from 'react';
import { showModal } from '../actions/modal';
import RsvpPasscode from '../containers/modals/rsvp-passcode';
import RsvpContent from '../containers/modals/rsvp-content';

export const showRsvpPasscodeModal = () => {
  const passcodeModalProps = {
    modalType: 'passcode',
    modalProps: {
      title: 'RSVP Now',
      content: <RsvpPasscode />,
      actionable: false,
    },
  };

  return showModal(passcodeModalProps);
};

export const showRsvpContentModal = ({ userGroup, users }) => {
  const rsvpModalProps = {
    modalType: 'rsvp',
    modalProps: {
      title: 'You’re invited to celebrate our wedding!',
      content: <RsvpContent />,
      initialUserGroup: Object.assign({}, userGroup),
      initialUsers: Array.from(users),
    },
  };

  return showModal(rsvpModalProps);
};
