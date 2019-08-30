import { getInitialData, saveQuestionAnswer } from '../services/apiService';
import { saveUsers, saveUserAnswer } from './users';
import { saveQuestions, saveAnswer } from './questions';
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