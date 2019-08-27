export const SET_AUTH_USER = 'SET_AUTH_USER';
export const REMOVE_AUTH_USER = 'SET_AUTH_USER';

export function setAuthUser(authUser){
    localStorage.setItem('authUser', JSON.stringify(authUser));

    return {
        type: SET_AUTH_USER,
        authUser
    }
}

export function removeAuthUser(){
    localStorage.removeItem('authUser')
    return {
        type: REMOVE_AUTH_USER,
        authUser: {}
    }
}
