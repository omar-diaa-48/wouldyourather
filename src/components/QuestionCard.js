import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Answered from './Answered';
import UnAnswered from './UnAnswered';

const QuestionCard =(props) => {
    const {id} = props.match.params
    const question = props.questions[id]
    const {user} = props

    if(question === null)
        return <p>Question doesn't exist</p>
    
    
    if(Object.keys(user.answers).includes(question.id))
        return <Answered question={question} user={user}/>

    return <UnAnswered question={question} user={user}/>
        
}

function mapStateToProps({authedUser, questions, users}) {
    return{
        user : users[authedUser],
        questions
    }
}

export default withRouter(connect(mapStateToProps)(QuestionCard))