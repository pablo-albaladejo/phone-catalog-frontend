import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhonePreviewComponent extends Component {

    render() {

        return (
            <div className="phone-preview">
                PhonePreviewComponent
                <Link className="view-detail-button" 
                    to='/phone/1'
                >Link</Link>
            </div>

        );
    }
}
export default PhonePreviewComponent;