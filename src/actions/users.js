export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const SAVE_AUTHUSER_ANSWER = "SAVE_AUTHUSER_ANSWER";
export const ADD_NEW_USER_QUESTION = "ADD_NEW_USER_QUESTION";

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
export function saveUserQuestion (user, qid) {
    return {
      type: ADD_NEW_USER_QUESTION,
      user,
      qid,
    }
  }