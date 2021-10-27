import * as types from "./types.js";

function itemsHasErrored(actionType, errorMessage) {
    return {
        type: actionType + types._HAS_ERROR,
        hasError: errorMessage
    }
}

function itemsIsLoading(actionType, bool) {
    return {
        type: actionType + types._IS_LOADING,
        isLoading: bool
    }
}

function itemsFetchDataSuccess(actionType, payload) {
    return {
        type: actionType,
        payload: payload
    }
}

/*
 * actionType: The action type on success
 * url: The url for the request
 * method: e.g. GET, POST, PATCH
 * body: JSON object to be sent with a request
 * onSuccessCallback: In case you want to edit the response from the API you can pass your own function
 */
export function sendRequest(actionType, url, method, headers = {}, body = null, onSuccessCallback = (json) => { return json }) {
    return (dispatch) => {
        dispatch(itemsIsLoading(actionType, true))

        const standardHeaders = {
            'Content-Type': 'application/json',
        };
        headers = Object.assign(standardHeaders, headers)

        let init = null;
        if (body) {
            init = {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            };
        } else {
            init = {
                method: method,
                headers: headers
            };
        }

        fetch(url, init).then((response) => {

            dispatch(itemsIsLoading(actionType, false))
            if (!response.ok) {
                response.json().then((error) => {
                    throw Error(error['message']);
                })
                    .catch((err) => {
                        dispatch(itemsHasErrored(actionType, err.toString()))
                    });
            } else {
                response.json().then((json) => {
                    dispatch(itemsFetchDataSuccess(actionType, onSuccessCallback(json, dispatch))) // return final payload or functions to return it instead
                });
            }
        });
    }
}