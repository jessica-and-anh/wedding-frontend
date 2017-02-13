import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { hideModal } from '../actions/modal';

import SimpleDialog from '../components/common/simple-dialog';

const mapStateToProps = (state) => {
  const {
    modalType,
    modalProps,
  } = state.modal;
  return {
    isOpen: modalType != null,
    title: modalProps.title,
    content: modalProps.content,
    actionable: modalProps.actionable,
    disableSubmit: modalProps.disableSubmit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDialogClose: () => {
      dispatch(hideModal());
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
