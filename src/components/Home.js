import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const Home = (props) => {
    return(
        <div className='mx-auto w-50'>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" 
                            id="unanswered-tab" 
                            data-bs-toggle="tab" 
                            data-bs-target="#unanswered" 
                            type="button" 
                            role="tab" 
                            aria-controls="unanswered" 
                            aria-selected="true">Unanswered Questions</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" 
                            id="answered-tab" 
                            data-bs-toggle="tab" 
                            data-bs-target="#answered" 
                            type="button" 
                            role="tab" 
                            aria-controls="answered" 
                            aria-selected="true">Answered Questions</button>
                </li>
            </ul>
            <div className='tab-content'>
                <div className="tab-pane fade show active" id="unanswered" role="tabpanel" aria-labelledby="unanswered-tab">{props.answered.length}</div>
                <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">{props.unanswered.length}</div>
            </div>
        </div>
    )
}

function mapStateToProps({authedUser, questions, users}) {
    const user = users[authedUser]
    const answered = []
    const unanswered = []
    Object.keys(questions).forEach(q => Object.keys(user.answers).includes(q.id) ? answered.push(q.id) : unanswered.push(q.id) )
    return{
        user,
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Home);