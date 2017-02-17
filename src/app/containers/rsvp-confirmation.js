import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchRsvpGroup, submitPostRsvpGroup } from '../actions/rsvp-group';
import Content from '../components/rsvp-confirmation/RsvpConfirmation';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';

const mapStateToProps = (state, routerProps) => {
  const {
    userGroup,
    users,
  } = state.rsvp;

  return {
    code: routerProps.params.id,
    userGroup,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadWithRsvpCode: (code) => {
      dispatch(fetchRsvpGroup(code, false));
    },
    onRsvpClick: (code) => {
      dispatch(showRsvpPasscodeModal());
    },
    onRsvpSubmit: (userGroup) => {
      dispatch(submitPostRsvpGroup(userGroup));
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
