export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export function saveUsers(users){
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}