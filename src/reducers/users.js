import { GET_USERS_SUCCESS,  SAVE_AUTHUSER_ANSWER} from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_AUTHUSER_ANSWER:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state
    }
}