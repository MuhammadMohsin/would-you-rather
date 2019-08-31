import {
    GET_QUESTIONS_SUCCESS,
    SET_SELECTED_QUESTION,
    SAVE_QUESTION_ANSWER,
    SAVE_NEW_QUESTION
} from '../actions/questions';

const initialState = {
    allQuestions: {},
    selectedQuestion: {}
}
let questionsBucket = {};

export default function questions(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                allQuestions: action.questions
            }
        case SET_SELECTED_QUESTION:
            return {
                ...state,
                selectedQuestion: action.question
            }
        case SAVE_QUESTION_ANSWER:
            const votes = state.allQuestions[action.questionId][action.answer].votes
            const updatedQuestion = {
                ...state.allQuestions[action.questionId],
                [action.answer]: {
                    ...state.allQuestions[action.questionId][action.answer],
                    votes: votes.concat([action.authedUser])
                }
            }
            questionsBucket = Object.assign({}, state.allQuestions);
            questionsBucket[action.questionId] = updatedQuestion;
            return {
                ...state,
                allQuestions: questionsBucket
            }
        case SAVE_NEW_QUESTION:
                questionsBucket = Object.assign({}, state.allQuestions);
                questionsBucket[action.question.id] = action.question;
                return {
                    ...state,
                    allQuestions: questionsBucket
                }
        default:
            return state
    }
}