import React from 'react';
import { connect } from 'react-redux';
import Page404 from './Page404';

const UserProfile = (props) => {
    const {authedUser, user} = props

    if(user === null)
        return <Page404 notfound='User' />

    const {id, name, avatarURL, answers, questions} = user
    
    const answersCount = Object.keys(answers).length;
    const questionsCount = questions.length;
    
    return(
        <div className="card">
            <div className="card-header">
                <h3>{name}</h3> 
            </div>
            <div className="row d-flex align-items-center">
                <div className='col-2'>
                    <img className='avatar-big'
                        src={avatarURL}
                        alt={`Avatar of ${id}`}/>
                </div>
                <div className='col-7 text-center'>
                    <h5>Answers: {answersCount}</h5>
                    <h5>Questions: {questionsCount}</h5>
                </div>
                <div className={`col-2 text-center ${authedUser===id ? 'border border-5 border-success' : 'border border-2 border-danger'}`}>
                    <div>
                        <h3>Score</h3>
                    </div>
                    <hr/>
                    <div>
                        <h4>{answersCount+questionsCount}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({authedUser, users}, {id}) {
    const user = users[id]
    return{
        authedUser,
        user,
    }
}

export default connect(mapStateToProps)(UserProfile)