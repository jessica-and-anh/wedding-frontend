import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Content from '../components/rsvp-confirmation/RsvpConfirmation';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';

const mapStateToProps = (state) => {
  const {
    userGroup,
    users,
  } = state.rsvp;

  return {
    userGroup,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRsvpClick: (code) => {
      dispatch(showRsvpPasscodeModal());
    },
    onRouteToHomepage: () => {
      dispatch(push('/'));
    },
  };
};

const RsvpConfirmation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default RsvpConfirmation;
