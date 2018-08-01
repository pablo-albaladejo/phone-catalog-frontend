import React, { Component } from 'react';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Badge,
} from 'reactstrap';

class PhonePreviewComponent extends Component {

    render() {

        const { name, price, currency, color, thumb_url } = this.props.data;
        const id = this.props.id;

        return (
            <div className="phone-preview">
                <Card className={"view-detail-button"} onClick={() => this.props.onSelected(id)}>
                    <CardImg className="phone-preview-thumb_url" top width="100%" src={thumb_url} alt={name} />
                    <CardBody>
                        <CardTitle className="phone-preview-name">{name}</CardTitle>
                        <CardText>
                            <span className="phone-preview-price">{price + ' ' + currency}</span> <Badge className="phone-preview-color" color="primary">{color}</Badge></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default PhonePreviewComponent;