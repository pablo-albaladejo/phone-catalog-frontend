import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPhones } from '../../actions/phones';

import PhoneListComponent from '../../components/PhoneList';

class PhoneListScreen extends Component {

  componentWillMount() {
    this.props.dispatch(getAllPhones());
  }

  render() {
    const { phonesList } = this.props;
    return (
      <PhoneListComponent
        phones={phonesList}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    phonesList: state.phones.data,
  }
}
export default connect(mapStateToProps)(PhoneListScreen);