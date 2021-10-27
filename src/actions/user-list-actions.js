import * as types from "./types";
import { sendRequest } from "./request-sender.js";
const baseUrl = "http://george-a.users.challenge.dev.monospacelabs.com";

export function getUsers() {
    return sendRequest(types.GET_USERS, `${baseUrl}/users`, "GET")
}

export function updateUserInList(response) {
    return {
        type: types.UPDATE_USER_IN_LIST,
        payload: response
    }
}