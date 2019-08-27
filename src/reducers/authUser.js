import { SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/authUser';

export default function (state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.authUser
        case REMOVE_AUTH_USER:
            return action.authUser
        default:
            return state
    }
}