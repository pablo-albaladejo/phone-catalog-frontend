import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPhoneById } from '../../actions/phones';

class PhoneDetail extends Component {

  componentWillMount() {
    this.props.dispatch(getPhoneById(this.props.phoneId));
  }

  render() {
    //const { name, description, price, currency, color } = this.props.phone;
    const phone = this.props.phone
    return (
      <div>
        {phone && (
          <div>
            <div>{phone.name}</div>
            <div>{phone.description}</div>
            <div>{phone.price}</div>
            <div>{phone.currency}</div>
            <div>{phone.color}</div>
          </div>
        )
        }
      </div>
    );
  }
}
function mapStateToProps(state, ownParams) {
  const phoneId = ownParams.match.params.id;
  let phone = state.phones.data[phoneId];

  if (state.errors) { //id not found
    //redirect to error page
    ownParams.history.push('/error/notfound');
  }

  return {
    phoneId,
    phone,
  }
}
export default connect(mapStateToProps)(PhoneDetail);