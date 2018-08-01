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
                <Card onClick={() => this.props.onSelected(id)}>
                    <CardImg top width="100%" src={thumb_url} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{price + ' - ' + currency} <Badge color="primary">{color}</Badge></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default PhonePreviewComponent;