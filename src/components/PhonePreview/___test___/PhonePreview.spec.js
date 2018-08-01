import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import PhonePreview from '../index';

test('PhonePreview component renders the values of the phone', () => {
    const phone = { 
        thumb_url: 'http://phone.com/device.jpg', 
        name: 'phone',
        price: 111, 
        currency:'USD',
        color: 'black',
    };

    const wrapper = mount(
        <PhonePreview data={phone} />
    );

    //image_url
    const thumb_url = wrapper.find('.phone-preview-thumb_url').last();
    expect(thumb_url.prop('src')).toBe(phone.thumb_url);
    expect(thumb_url.prop('alt')).toBe(phone.name);

    //name
    const name = wrapper.find('.phone-preview-name').last();
    expect(name.text()).toBe(phone.name);

    //price
    const price = wrapper.find('.phone-preview-price').last();
    expect(price.text().trim()).toBe(phone.price + ' ' + phone.currency);

    //color
    const color = wrapper.find('.phone-preview-color').last();
    expect(color.text()).toBe(phone.color);

});