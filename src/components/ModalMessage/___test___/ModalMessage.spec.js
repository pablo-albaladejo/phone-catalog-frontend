import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import ModalMessage from '../index';

test('ModalMessage component renders the message and button', () => {
    const message = 'message';

    const wrapper = mount(
        <ModalMessage
            message={message}
        />
    );

    //message
    const mMessage = wrapper.find('.modal-message').last();
    expect(mMessage.text()).toBe(message);

});