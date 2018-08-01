
import React, { Component } from 'react';

import { } from 'reactstrap';

import {
    Container,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter,
    Badge,
    Button,
} from 'reactstrap';

class PhoneDetailComponent extends Component {

    render() {
        const { name, description, price, currency, color, image_url } = this.props.phone;

        return (
            <Container>
                <Card>
                    <CardImg className="phone-detail-image_url" top width="100%" src={image_url} alt={name} />
                    <CardBody>
                        <CardTitle className="phone-detail-name">{name}</CardTitle>
                        <CardSubtitle><div className="phone-detail-price">{price + ' ' + currency}</div> <Badge className="phone-detail-color" color="primary">{color}</Badge></CardSubtitle>
                        <CardText className="phone-detail-description">{description}</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button className="view-detail-button" onClick={this.props.onBack} color="info">Back</Button>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}
export default PhoneDetailComponent;