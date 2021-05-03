import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { handleSaveQuestionAnswer } from "../actions/shared";

const UnAnswered = (props) => {
    const [option, setOption] = useState('')
    const {user, question, authedUser, dispatch} = props
    const handleSubmit =(e) => {
        e.preventDefault();
        if(option === '')
            return alert('Choose an answer first to submit')
        
        dispatch(handleSaveQuestionAnswer({
            authedUser, 
            qid : question.id, 
            answer : option}))
    }
    return(
        <div className="card mx-auto w-50">
            <div className="card-header">
                <img className='avatar-big'
                    alt={`Avatar of ${user.name}`}
                    src={user.avatarURL}/>
                {question.author} asks: 
            </div>
            <form className='text-center'>
                <div className="card-body">
                    <h5 className="card-title">Would you rather ...</h5>
                    <div><input type='radio' name='ans' onClick={() => setOption('optionOne')}/>  {question.optionOne.text}</div>
                    <div><input type='radio' name='ans' onClick={() => setOption('optionTwo')}/>  {question.optionTwo.text}</div>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps({authedUser, users}, {question}) {
    const user = users[question.author]
    return {
        authedUser,
        user,
        question
    }
}

export default withRouter(connect(mapStateToProps)(UnAnswered))