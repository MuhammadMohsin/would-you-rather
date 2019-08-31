import { getInitialData, saveQuestionAnswer, saveNewQuestion } from '../services/apiService';
import { saveUsers, saveUserAnswer, saveUserQuestion } from './users';
import { saveQuestions, saveAnswer, saveQuestion } from './questions';
import { setAuthUser } from './authUser';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(saveUsers(users));
                dispatch(saveQuestions(questions));
            })
    }
}
export function handlePollAnswer(authUser, questionId, option, cb) {
    return (dispatch, getState) => {
        dispatch(saveAnswer(authUser, questionId, option))
        dispatch(saveUserAnswer(authUser, questionId, option))
        return saveQuestionAnswer({ authedUser: authUser, qid: questionId, answer: option })
            .then(() => {
                const users = getState().users
                dispatch(setAuthUser(users[authUser]));
                cb();
            });
    }
}
export function addNewQuestion(authUserId, { optionOneText, optionTwoText }, cb) {
    const question = {
        author: authUserId,
        optionOneText,
        optionTwoText
    }
    console.log(question)
    return (dispatch, getState) => {
        return saveNewQuestion(question).then((response) => {
            dispatch(saveQuestion(response))
            dispatch(saveUserQuestion(response.author, response.id))
            const users = getState().users
                dispatch(setAuthUser(users[authUserId]));
                cb();
        })
    }
}