export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_Q_TO_USER = 'SAVE_Q_TO_USER'

export function receiveUsers(users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}

export function saveUserAnswer(info){
    return {
        type : SAVE_USER_ANSWER,
        info
    }
}

export function saveQuestionToUser(formattedQuestion) {
    return{
        type : SAVE_Q_TO_USER,
        formattedQuestion
    }
}