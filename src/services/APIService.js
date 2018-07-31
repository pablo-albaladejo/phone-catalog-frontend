import UtilsService from './UtilsService';
import CONFIG from '../constants/config';

class APIService {
    BASE_URI = UtilsService.getInstance().isDev() ? CONFIG.API_BASE_URI.DEV : CONFIG.API_BASE_URI.PROD;

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new APIService();
        }
        return this._instance;
    }


    request(endpoint, method, body) {
        return new Promise((resolve, reject) => {
            fetch(this.BASE_URI + endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: body ? JSON.stringify(body) : null,
            })
                .then(response => {

                    response.json().then(responseJson => {
                        if (response.ok) { // 200-299
                            resolve(responseJson);
                        } else {
                            const err = {
                                message: responseJson.message || response.statusText,
                            }
                            reject(err);
                        }
                    }).catch(err => { //parse json
                        reject(err);
                    });

                }).catch(err => { //fetch remote server
                    reject(err);
                });
        });
    }

}
export default APIService;

export const Method = {
    GET_METHOD: 'GET',
    POST_METHOD: 'POST',
    PUT_METHOD: 'PUT',
    DELETE_METHOD: 'DELETE',
}