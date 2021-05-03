import { receiveQuestions, saveQuestionAnswer, saveQuestion } from "./questions";
import { receiveUsers, saveUserAnswer, saveQuestionToUser } from "./users";
import { _getUsers,_getQuestions,_saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';
import { showLoading, hideLoading } from "react-redux-loading";


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getUsers(), _getQuestions()])
                    .then(([users, questions]) => {
                        dispatch(receiveUsers(users))
                        dispatch(receiveQuestions(questions))
                        dispatch(hideLoading())
                    })
    }
}


export function handleSaveQuestionAnswer(info){
    return (dispatch) => {
        return _saveQuestionAnswer(info)
                .then(() => {
                    dispatch(saveQuestionAnswer(info))
                    dispatch(saveUserAnswer(info))
                })
                .catch((e) => console.log(e))
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return _saveQuestion(question)
                .then((formattedQuestion) => {
                    dispatch(saveQuestion(formattedQuestion))
                    dispatch(saveQuestionToUser(formattedQuestion))
                }) 
    }
}