import { RECEIVE_QUESTIONS, Save_Question_Answer, SAVE_QUESTION } from "../actions/questions";

export default function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case Save_Question_Answer :
            const {info} = action
            return {
                ...state,
                [info.qid] : {
                    ...state[info.qid],
                    [info.answer] : {
                        ...state[info.qid][info.answer],
                        votes : state[info.qid][info.answer].votes.concat([info.authedUser])
                    } 
                }
            }
        case SAVE_QUESTION :
            const {formattedQuestion} = action 
            return {
                ...state,
                [formattedQuestion.id] : formattedQuestion
            }
        default:
            return state;
    }
}