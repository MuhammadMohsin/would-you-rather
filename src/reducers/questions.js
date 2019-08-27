import { GET_USERS_SUCCESS } from '../actions/users'

export default function questions(state= {}, action) {
    switch(action.type) {
        case GET_USERS_SUCCESS :
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }
}