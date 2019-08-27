import { SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/authUser';

export default function (state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return Object.assign({}, state, action.authUser, {isAuthenticated: true} )
        case REMOVE_AUTH_USER:
            return Object.assign({}, state, action.authUser, {isAuthenticated: false })
        default:
            return state
    }
}