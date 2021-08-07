import {connect} from 'react-redux';
import SignIn from 'gui/pages/mainRouter/pages/signIn/SignIn';
import {AuthenticatedMapDispatchToProps, AuthenticatedMapStateToProps} from 'data/redux/containers/commons/Commons';

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

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn as any);

export default SignInContainer;
