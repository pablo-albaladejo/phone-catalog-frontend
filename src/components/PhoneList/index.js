import React, { Component } from 'react';

import PhonePreviewComponent from '../PhonePreview/';

class PhoneListComponent extends Component {

    render() {

        return (
            <div>
                {this.props.phones.map(phone => {
                    return (
                        <PhonePreviewComponent
                            phone={phone}
                        />
                    )
                })}
            </div>

        );
    }
}
export default PhoneListComponent;