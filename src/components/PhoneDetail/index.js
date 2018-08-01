
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
                    <CardImg top width="100%" src={image_url} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{price + ' ' + currency} <Badge color="primary">{color}</Badge></CardSubtitle>
                        <CardText>{description}</CardText>
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