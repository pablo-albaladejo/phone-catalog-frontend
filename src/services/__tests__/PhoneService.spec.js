import PhoneService from '../PhonesService';
import ERRORS from '../../constants/errors';

describe('PhonesService', () => {

    describe('getAllPhones()', () => {

        test("should return all phones", () => {
            expect.assertions(6);

            return PhoneService.getInstance().getAllPhones()
                .then(phones => {

                    //the object should have values
                    const arrayIds = Object.keys(phones);
                    expect(arrayIds.length).not.toEqual(0);

                    //valid format
                    const phone = phones[arrayIds[0]];
                    expect(phone).toHaveProperty('name');
                    expect(phone).toHaveProperty('color');
                    expect(phone).toHaveProperty('currency');
                    expect(phone).toHaveProperty('price');
                    expect(phone).toHaveProperty('thumb_url');
                });
        });
    });

    describe('getPhoneById(phoneId)', () => {
        
        test("should return a single phone", () => {
            expect.assertions(7);
    
            return PhoneService.getInstance().getPhoneById(111)
                .then(phones => {

                    //return single value
                    const arrayIds = Object.keys(phones);
                    expect(arrayIds.length).toEqual(1);

                    //valid format
                    const phone = phones[arrayIds[0]];
                    expect(phone).toHaveProperty('name');
                    expect(phone).toHaveProperty('description');
                    expect(phone).toHaveProperty('color');
                    expect(phone).toHaveProperty('currency');
                    expect(phone).toHaveProperty('price');
                    expect(phone).toHaveProperty('image_url');
                });
        });

        test("should fail with an invalid phoneId", () => {
            expect.assertions(1);
    
            return PhoneService.getInstance().getPhoneById(null)
                .catch(err => {
                    expect(err.code).toEqual(ERRORS.PHONE_NOT_FOUND);
                });
        });
    });
})