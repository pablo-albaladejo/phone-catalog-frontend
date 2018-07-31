import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalMessage extends Component {

  render() {
    return (
      <Modal isOpen={this.props.message !== null}>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          {this.props.message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalMessage;