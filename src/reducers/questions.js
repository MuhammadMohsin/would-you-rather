import { GET_QUESTIONS_SUCCESS } from '../actions/questions';

export default function questions(state= {}, action) {
    switch(action.type) {
        case GET_QUESTIONS_SUCCESS :
            return {
                ...state,
                ...action.questions
            }
        default :
            return state
    }
}