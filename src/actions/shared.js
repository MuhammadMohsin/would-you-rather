import { getInitialData } from '../services/apiService';
import { saveUsers } from './users';
import { saveQuestions } from './questions';

export function handleInitialData() {
    return(dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(saveUsers(users));
                dispatch(saveQuestions(questions));
            })
    }
}