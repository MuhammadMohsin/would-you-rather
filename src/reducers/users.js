import { 
    GET_USERS_SUCCESS,  
    SAVE_AUTHUSER_ANSWER,
    ADD_NEW_USER_QUESTION
} from '../actions/users'

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
        case ADD_NEW_USER_QUESTION :
                    return {
                      ...state,
                      [action.user] : {
                        ...state[action.user],
                        questions: [...state[action.user].questions, action.qid]
                      }
                    }
        default:
            return state
    }
}