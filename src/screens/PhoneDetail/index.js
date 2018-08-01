import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPhoneById } from '../../actions/phones';
import PhoneDetailComponent from '../../components/PhoneDetail';

class PhoneDetail extends Component {

  componentWillMount() {
    this.props.dispatch(getPhoneById(this.props.phoneId));
  }

  onBack = () => {
    this.props.history.push('/');
  }

  render() {
    const phone = this.props.phone
    return (
      <div className="col-sm-12 col-md-10 mx-auto">
        {phone && (
          <PhoneDetailComponent
            phone={phone}
            onBack={this.onBack}
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state, ownParams) {
  const phoneId = ownParams.match.params.id;
  const ids = Object.keys(state.phones.data);

  const phone = state.phones.data[phoneId];

  if (state.errors || (ids.length > 0 && !ids.find(id => id === phoneId))){ //id not found
    //redirect to error page
    ownParams.history.push('/error/notfound');
  }

  return {
    phoneId,
    phone,
  }
}
export default connect(mapStateToProps)(PhoneDetail);