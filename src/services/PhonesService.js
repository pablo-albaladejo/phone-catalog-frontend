import ERRORS from '../constants/errors';
import APIService, { Method } from './APIService';

class PhonesService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new PhonesService();
        }
        return this._instance;
    }

    getAllPhones() {
        return new Promise((resolve, reject) => {
            APIService.getInstance().request('/phones/', Method.GET_METHOD, null)
                .then(response => {

                    //format data as much as similar to redux store
                    let phones = {};

                    response.forEach(element => {
                        const { id, name, color, price, currency, thumb_url } = element;
                        phones[id] = {
                            name,
                            color,
                            price,
                            currency,
                            thumb_url
                        }
                    });

                    resolve(phones);
                }).catch(err => {
                    reject({
                        code: ERRORS.PHONES_NOT_FOUND,
                        message: ERRORS.PHONES_NOT_FOUND,
                    })
                });
        });
    }

    getPhoneById(phoneId) {
        return new Promise((resolve, reject) => {
            APIService.getInstance().request(`/phones/${phoneId}/`, Method.GET_METHOD, null)
                .then(response => {

                    //format data as much as similar to redux store
                    let phones = {};

                    const { id, name, description, color, price, currency, image_url } = response;
                    phones[id] = {
                        name,
                        description,
                        color,
                        price,
                        currency,
                        image_url
                    };
                    
                    resolve(phones);
                }).catch(err => {
                    reject({
                        code: ERRORS.PHONE_NOT_FOUND,
                        message: ERRORS.PHONE_NOT_FOUND,
                    })
                });
        });
    }
}

export default PhonesService;