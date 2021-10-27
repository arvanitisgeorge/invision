import * as types from "../actions/types";

export default function reducer(state = null, action) {
    let initialState = state ? state : [];

    switch (action.type) {
        case types.UPDATE_USER:
            return { "data": action.payload };
        case types.UPDATE_USER + types._HAS_ERROR:
            return { "hasError": action.hasError };
        case types.UPDATE_USER + types._IS_LOADING:
            return { "isLoading": action.isLoading };
        default:
            return initialState;
    }
}
