export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";

export function saveQuestions(questions){
    return {
        type: GET_QUESTIONS_SUCCESS,
        questions
    }
}