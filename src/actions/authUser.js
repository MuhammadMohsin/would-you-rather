export const SET_AUTH_USER = 'SET_AUTH_USER';
export const REMOVE_AUTH_USER = 'REMOVE_AUTH_USER';

export function detectAuthUser(cb){
    if(localStorage.getItem('authUser')){
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        if(authUser.id) 
            return cb(true, authUser)
        return cb(false);
    }
    return cb(false);
}

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
