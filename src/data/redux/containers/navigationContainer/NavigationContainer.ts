import {connect} from 'react-redux';
import Navigation from 'gui/pages/mainRouter/components/navigation';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation as any);

export default NavigationContainer;
