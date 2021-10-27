import * as types from "./types";
import { sendRequest } from "./request-sender.js";
const baseUrl = "http://george-a.users.challenge.dev.monospacelabs.com";

export function getUsers() {
    return sendRequest(types.GET_USERS, `${baseUrl}/users`, "GET")
}

export function updateUser(params) {
    return sendRequest(types.UPDATE_USER, `${baseUrl}/users/id`, "PUT", {}, params)
}
