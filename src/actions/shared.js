import { getInitialData } from '../services/apiService';
import { saveUsers } from './users';

export function handleInitialData() {
    return(dispatch) => {
        return getInitialData()
            .then(({ users }) => {
                dispatch(saveUsers(users))
            })
    }
}