import * as types from "./types";
import { sendRequest } from "./request-sender.js";
import { updateUserInList } from './user-list-actions';

const baseUrl = "http://george-a.users.challenge.dev.monospacelabs.com";

export function updateUser(id, params) {
    const onSuccessCallback = (response, dispatch) => {
        dispatch(updateUserInList(response))
        return response;
    }

    return sendRequest(types.UPDATE_USER, `${baseUrl}/users/${id}`, "PUT", {}, params, onSuccessCallback)
}
