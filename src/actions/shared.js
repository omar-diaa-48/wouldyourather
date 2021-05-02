import { setAuthedUser } from './authedUser';
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { _getUsers,_getQuestions } from '../utils/_DATA';

const AUTHED_USER_ID = 'johndoe'

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
                    .then(([users, questions]) => {
                        dispatch(receiveUsers(users))
                        dispatch(receiveQuestions(questions))
                        dispatch(setAuthedUser(AUTHED_USER_ID))
                    })
    }
}