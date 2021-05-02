import React from 'react';
import { connect } from 'react-redux';

const QuestionCard =(props) => {
    const handleSubmit =(e) => {
        e.preventDefault();
    }

    const {question} = props

    if(question === null){
        return <p>Question doesn't exist</p>
    }

    const {author, optionOne, optionTwo} = question
    
    return (
        <div className="card text-center">
            <div className="card-header">
                 {author} asks: 
            </div>
            <form>
                <div className="card-body">
                    <h5 className="card-title">Would you rather ...</h5>
                    <div><input type='radio' value='optionOne' name='ans' />  {optionOne.text}</div>
                    <div><input type='radio' value='optionTwo' name='ans' />  {optionTwo.text}</div>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]
    return{
        authedUser,
        question
    }
}

export default connect(mapStateToProps)(QuestionCard)