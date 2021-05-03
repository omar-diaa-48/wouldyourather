import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = (props) => {
    const {id, author, optionOne} = props.question
    return (
        <div className="card">
            <div className="card-header">
                {author} asks: 
            </div>
            <form className='text-center'>
                <div className="card-body">
                    <h5 className="card-title">Would you rather ...</h5>
                    <div>{optionOne.text.substring(0,15)}...</div>
                </div>
                <div className="card-footer text-muted">
                    <Link to={`/questions/${id}`} className="btn btn-outline-success">View Poll</Link>
                </div>
            </form>
        </div>
    )
}

function mapStateToProps({questions}, {id}) {
    const question = questions[id]

    return{
        question
    }
}

export default connect(mapStateToProps)(Question);