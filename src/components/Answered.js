import React from 'react';

const Answered = (props) => {
    const {user, question} = props
    const op1Count = question.optionOne.votes.length
    const op2Count = question.optionTwo.votes.length
    return(
        <div className="card mx-auto w-50">
            <div className="card-header">
                <h3>Asked by {user.name}</h3> 
            </div>
            <div className="row d-flex align-items-center">
                <div className='col-2'>
                    <img className='avatar-big'
                        src={user.avatarURL}
                        alt={`Avatar of ${user.id}`}/>
                </div>
                <div className='col-10'>
                    <h4>Results: </h4>
                    <div className={`p-3 m-1 ${(user.answers[question.id] === "optionOne") ? 'border border-success' : 'border'}`}>
                        <p>{question.optionOne.text}</p>
                        <div className="progress">
                            <div className="progress-bar" 
                                    role="progressbar" 
                                    style={{width : `${op1Count*100/(op1Count+op2Count)}%`}}
                                    >{`${op1Count}/${(op1Count+op2Count)}`}</div>
                        </div>
                    </div>
                    <div className={`p-3 m-1 ${(user.answers[question.id] === "optionTwo") ? 'border border-success' : 'border'}`}>
                        <p>{question.optionTwo.text}</p>
                        <div className="progress">
                            <div className="progress-bar" 
                                    role="progressbar" 
                                    style={{width : `${op2Count*100/(op1Count+op2Count)}%`}}
                                    >{`${op2Count}/${(op1Count+op2Count)}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Answered
