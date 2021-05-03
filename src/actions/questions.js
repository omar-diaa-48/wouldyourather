export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const Save_Question_Answer = 'Save_Question_Answer'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer(info){
    return{
        type : Save_Question_Answer,
        info
    }
}

export function saveQuestion(formattedQuestion){
    return{
        type : SAVE_QUESTION,
        formattedQuestion
    }
}
