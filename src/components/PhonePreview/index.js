import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        Button 
    } from 'reactstrap';

class PhonePreviewComponent extends Component {



    render() {

        const { name, price, currency, color, thumb_url } = this.props.data;
        const id = this.props.id;

        return (
/*             <div >
                <div></div>
                <div></div>
                <div>{color}</div>
                <div>{thumb_url}</div>
                <Link className="view-detail-button"
                    
                >Link</Link> */


                <div className="phone-preview">
                    <Card>
                        <CardImg top width="100%" src={thumb_url} alt={name} />
                        <CardBody>
                            <CardTitle>{name + ' - ' + color}</CardTitle>
                            <CardText>{price + ' - ' + currency} </CardText>
                            {/* <Button className="view-detail-button" tag={Link} to={`/phone/${id}`}>Detail</Button> */}
                            <Link className="view-detail-button" to={`/phone/${id}`}>Link</Link>
                        </CardBody>
                    </Card>
                </div>
        );
    }
}
export default PhonePreviewComponent;