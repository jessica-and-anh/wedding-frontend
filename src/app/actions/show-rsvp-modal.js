import React from 'react';
import { showModal } from '../actions/modal';
import RsvpPasscode from '../containers/modals/rsvp-passcode';
import RsvpContent from '../containers/modals/rsvp-content';

const passcodeModalProps = {
  modalType: 'rsvp',
  modalProps: {
    title: 'RSVP Now',
    content: <RsvpPasscode />,
    actionable: false,
  },
};

export const showRsvpPasscodeModal = () => {
  return showModal(passcodeModalProps);
};

const rsvpModalProps = {
  modalType: 'rsvp',
  modalProps: {
    title: 'You’re invited to celebrate our wedding!',
    content: <RsvpContent />,
  },
};

export const showRsvpContentModal = () => {
  return showModal(rsvpModalProps);
};
