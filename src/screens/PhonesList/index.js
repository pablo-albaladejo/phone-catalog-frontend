import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPhones } from '../../actions/phones';

import PhoneListComponent from '../../components/PhoneList';

class PhoneListScreen extends Component {

  componentWillMount() {
    this.props.dispatch(getAllPhones());
  }

  onSelected = (id) => {
    this.props.history.push(`/phone/${id}`);
  }

  render() {
    const { phonesList } = this.props;
    return (
      <div className="col-sm-12 col-md-6 mx-auto">
        {!this.props.isLoading && (
          <PhoneListComponent
            phones={phonesList}
            onSelected={this.onSelected}
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    phonesList: state.phones.data,
    isLoading: state.phones.isFetching,
  }
}
export default connect(mapStateToProps)(PhoneListScreen);