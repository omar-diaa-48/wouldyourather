import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_Q_TO_USER } from "../actions/users";

export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            const {info} = action
            return {
                ...state,
                [info.authedUser] : {
                    ...state[info.authedUser],
                    answers : {
                        ...state[info.authedUser].answers,
                        [info.qid] : info.answer
                    } 
                }
            }
        case SAVE_Q_TO_USER :
            const {formattedQuestion} = action
            return {
                ...state,
                [formattedQuestion.author] : {
                    ...state[formattedQuestion.author],
                    questions : state[formattedQuestion.author].questions.concat([formattedQuestion.id])
                }
            }
        default:
            return state
    }
}