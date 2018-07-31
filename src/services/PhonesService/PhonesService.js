
import MOCK_DB from '../../mock/db';
import ERRORS from '../../constants/errors';

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
            resolve(MOCK_DB.phones);
        });
    }

    getPhoneById(phoneId) {
        return new Promise((resolve, reject) => {
            const data = MOCK_DB.phones[phoneId];
            if (!data) {
                let err = {
                    code: ERRORS.PHONE_NOT_FOUND,
                    message: ERRORS.PHONE_NOT_FOUND,
                };
                reject(err);
            } else {
                let phone = {};

                phone[phoneId] = data;
                resolve(phone);
            }

        });
    }
}

export default PhonesService;