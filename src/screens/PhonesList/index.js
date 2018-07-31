import React, { Component } from 'react';

import PhoneListComponent from '../../components/PhoneList';

class PhoneListScreen extends Component {

  render() {
    const phonesList = [1,2,3];
    return (
      <div>
        <h1>PhoneList</h1>
        <PhoneListComponent
          phones={phonesList}
        />
      </div>

    );
  }
}
export default PhoneListScreen;