import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import PhoneDetail from '../index';

test('PhoneDetail component renders the values of the phone', () => {
    const phone = { 
        image_url: 'http://phone.com/device.jpg', 
        name: 'phone', 
        price: 111, 
        currency:'USD',
        color: 'black',
        description: 'description'
    };

    const wrapper = mount(
        <PhoneDetail phone={phone} />
    );

    //image_url
    const image_url = wrapper.find('.phone-detail-image_url').last();
    expect(image_url.prop('src')).toBe(phone.image_url);
    expect(image_url.prop('alt')).toBe(phone.name);

    //name
    const name = wrapper.find('.phone-detail-name').last();
    expect(name.text()).toBe(phone.name);

    //price
    const price = wrapper.find('.phone-detail-price').last();
    expect(price.text().trim()).toBe(phone.price + ' ' + phone.currency);

    const color = wrapper.find('.phone-detail-color').last();
    expect(color.text()).toBe(phone.color);

    //description
    const description = wrapper.find('.phone-detail-description').last();
    expect(description.text()).toBe(phone.description);
});