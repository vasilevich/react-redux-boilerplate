import {connect} from 'react-redux';

import {AuthenticatedMapDispatchToProps, AuthenticatedMapStateToProps} from 'data/redux/containers/commons/Commons';
import ForgotPassword from 'gui/pages/mainRouter/pages/forgotPassword';

const mapStateToProps = (state) => {
  return {
    ...AuthenticatedMapStateToProps(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...AuthenticatedMapDispatchToProps(dispatch)
  };
};

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

export default ForgotPasswordContainer;
