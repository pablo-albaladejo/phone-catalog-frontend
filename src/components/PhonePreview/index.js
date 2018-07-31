import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhonePreviewComponent extends Component {

    render() {

        const { name, price, currency, color, thumb_url } = this.props.data;
        const id = this.props.id;

        return (
            <div className="phone-preview">
                <div>{name}</div>
                <div>{price}</div>
                <div>{currency}</div>
                <div>{color}</div>
                <div>{thumb_url}</div>
                <Link className="view-detail-button"
                    to={`/phone/${id}`}
                >Link</Link>
            </div>

        );
    }
}
export default PhonePreviewComponent;