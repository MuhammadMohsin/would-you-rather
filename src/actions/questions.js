export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const SET_SELECTED_QUESTION = "SET_SELECTED_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function saveQuestions(questions) {
    return {
        type: GET_QUESTIONS_SUCCESS,
        questions
    }
}

export function saveSelectedQuestion(question) {
    return {
        type: SET_SELECTED_QUESTION,
        question
    }
}

export function saveAnswer(authUser, questionId, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authUser,
        questionId,
        answer
    }
}