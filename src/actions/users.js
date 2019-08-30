export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const SAVE_AUTHUSER_ANSWER = "SAVE_AUTHUSER_ANSWER";

export function saveUsers(users) {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}

export function saveUserAnswer(user, qid, answer) {
    return {
        type: SAVE_AUTHUSER_ANSWER,
        user,
        qid,
        answer
    }
}