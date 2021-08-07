// import {navigateIfNotThere, navigateToPageBeforeLogin} from 'data/redux/actions/navigationActions';

export const AuthenticatedMapStateToProps = (state, ownProps = {}) => {
  return {
    //  allowed: userIsAllowed(ownProps.userType)(state),
  };
};

export const AuthenticatedMapDispatchToProps = (dispatch) => {
  return {
    //   navigateOnLogout: () => dispatch(navigateIfNotThere(linksMap.login)),
    //   navigateOnLogin: () => dispatch(navigateToPageBeforeLogin()),
    //   navigateOnDisallowed: () => dispatch(navigateIfNotThere(linksMap.dashboard)),
    //   navigateOnEmailNotValidated: () => dispatch(navigateIfNotThere(linksMap.verifyToken)),
  };
};

