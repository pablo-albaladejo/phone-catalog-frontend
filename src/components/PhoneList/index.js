import React, { Component } from 'react';

import PhonePreviewComponent from '../PhonePreview/';

class PhoneListComponent extends Component {

    render() {
        return (
            <div>
                {Object.keys(this.props.phones).map(phoneId => {
                    return(
                        <PhonePreviewComponent 
                            key={phoneId}
                            id={phoneId}
                            data={this.props.phones[phoneId]}
                        />
                    );
                })}
            </div>
        );
    }
}
export default PhoneListComponent;