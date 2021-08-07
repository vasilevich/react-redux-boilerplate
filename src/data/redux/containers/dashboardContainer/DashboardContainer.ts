import {connect} from 'react-redux';
import Dashboard from 'gui/pages/controlRouter/pages/dashboard/Dashboard';
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

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard as any);

export default DashboardContainer;
