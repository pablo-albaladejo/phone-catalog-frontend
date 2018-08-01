import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import PhoneList from '../index';

test('PhoneList component renders the phones list', () => {
    const data = {
        111: {
            thumb_url: 'http://phone.com/device.jpg',
            name: 'phone',
            price: 111,
            currency: 'USD',
            color: 'black',
        },
        222: {
            thumb_url: 'http://phone.com/device.jpg',
            name: 'phone',
            price: 111,
            currency: 'USD',
            color: 'black',
        },
    };

    const wrapper = mount(
        <PhoneList
            phones={data}
        />
    );

    //validate if component is rendered
    const phoneList = wrapper.find('.phone-list').last();
    expect(phoneList.exists()).toEqual(true);

    //validate the number of children
    expect(phoneList.children()).toHaveLength(Object.keys(data).length);

});