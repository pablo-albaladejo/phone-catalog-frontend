import ServiceFacade from '../services/ServiceFacade';

import {
    REQUEST_GET_ALL_PHONES,
    RESPONSE_GET_ALL_PHONES_SUCCESS,
    RESPONSE_GET_ALL_PHONES_ERROR,

    REQUEST_GET_PHONE_BY_ID,
    RESPONSE_GET_PHONE_BY_ID_SUCCESS,
    RESPONSE_GET_PHONE_BY_ID_ERROR,
} from '../actions/actionTypes';

export const getAllPhones = () => dispatch => {
    dispatch({
        type: REQUEST_GET_ALL_PHONES,
    });

    ServiceFacade.getAllPhones()
        .then(phones => {
            dispatch({
                type: RESPONSE_GET_ALL_PHONES_SUCCESS,
                phones,
            });
        }).catch(err => {
            dispatch({
                type: RESPONSE_GET_ALL_PHONES_ERROR,
                err,
            });
        })
};

export const getPhoneById = (phoneId) => dispatch => {
    dispatch({
        type: REQUEST_GET_PHONE_BY_ID,
    });

    ServiceFacade.getPhoneById(phoneId)
        .then(phones => {
            dispatch({
                type: RESPONSE_GET_PHONE_BY_ID_SUCCESS,
                phones,
            });
        }).catch(err => {
            dispatch({
                type: RESPONSE_GET_PHONE_BY_ID_ERROR,
                err,
            });
        })
};
