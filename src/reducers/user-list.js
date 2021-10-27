import * as types from "../actions/types";

export default function reducer(state = null, action) {
    let initialState = state ? state : [];
    var data = [];

    switch (action.type) {
        case types.GET_USERS:
            return { "data": action.payload };
        case types.GET_USERS + types._HAS_ERROR:
            return { "hasError": action.hasError };
        case types.GET_USERS + types._IS_LOADING:
            return { "isLoading": action.isLoading };
        case types.UPDATE_USER_IN_LIST:
            let index = state.data.findIndex((user => user.id == action.payload.id));
            data = state.data;
            data[index] = action.payload

            return { "data": data };
        default:
            return initialState;
    }
}