import * as types from "../actions/types";

export default function reducer(state = null, action) {
    let initialState = state ? state : [];

    switch (action.type) {
        case types.GET_USERS:
            return { "data": action.payload.user };
        case types.GET_USERS + types._HAS_ERROR:
            return { "hasError": action.hasError };
        case types.GET_USERS + types._IS_LOADING:
            return { "isLoading": action.isLoading };
        case types.UPDATE_USER:
            return { "data": action.payload.user }; // EDW NA DW AN EPISTREFEI KATI NA TO grapsw message anti gia data to variable
        case types.UPDATE_USER + types._HAS_ERROR:
            return { "hasError": action.hasError };
        case types.UPDATE_USER + types._IS_LOADING:
            return { "isLoading": action.isLoading };
        default:
            return initialState;
    }
}
