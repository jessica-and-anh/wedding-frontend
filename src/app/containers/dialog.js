import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { hideModal } from '../actions/modal';
import { submitPostRsvpGroup } from '../actions/rsvp-group';

import SimpleDialog from '../components/common/simple-dialog';

const mapStateToProps = (state) => {
  const {
    modalType,
    modalProps,
  } = state.modal;

  const { userGroup, users } = state.rsvp;
  return {
    isOpen: modalType != null,
    title: modalProps.title,
    content: modalProps.content,
    actionable: modalProps.actionable,
    disableSubmit: modalProps.disableSubmit,
    userGroup,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDialogClose: () => {
      dispatch(hideModal());
    },

    onDialogSubmit: (userGroup, users) => {
      dispatch(submitPostRsvpGroup(userGroup, users));
    },

    onRouteToConfirmation: () => {
      dispatch(push('/rsvp-confirmation'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleDialog);
