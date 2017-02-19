import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { hideModal } from '../actions/modal';
import { submitPostRsvpGroup, resetUsersToInitialState } from '../actions/rsvp-group';

import SimpleDialog from '../components/common/simple-dialog';

/*
 * TODO: Refactor this container as it's been polluted.
**/
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
    initialUserGroup: modalProps.initialUserGroup,
    initialUsers: modalProps.initialUsers,
    userGroup,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDialogClose: (userGroup, users) => {
      dispatch(resetUsersToInitialState(userGroup, users));
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
