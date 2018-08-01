import React, { Component } from 'react';

import { Container } from 'reactstrap';

import PhonePreviewComponent from '../PhonePreview/';

class PhoneListComponent extends Component {

    render() {
        return (
            <Container className="phone-list">
                {Object.keys(this.props.phones).map(phoneId => {
                    return(
                        <PhonePreviewComponent 
                            key={phoneId}
                            id={phoneId}
                            data={this.props.phones[phoneId]}
                            onSelected={this.props.onSelected}
                        />
                    );
                })}
            </Container>
        );
    }
}
export default PhoneListComponent;