import { connect } from 'react-redux';
import { fetchRsvpGroup } from '../actions/rsvp-group';

import Homepage from '../components/Homepage.js';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadWithRsvpCode: (code) => {
      dispatch(fetchRsvpGroup(code));
    },
  };
};

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

export default HomepageContainer;
