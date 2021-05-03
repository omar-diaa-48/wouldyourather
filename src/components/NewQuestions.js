import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { handleSaveQuestion } from '../actions/shared';

const NewQuestion = (props) => {
    const[option1,setOption1] = useState('')
    const[option2,setOption2] = useState('')
    const {authedUser, dispatch, history} = props
    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        if(option1 === '' || option2 === '')
            return alert('Both options must be populated')
        dispatch(handleSaveQuestion({
            optionOneText: option1,
            optionTwoText: option2,
            author : authedUser
        }))
        history.push('/')
    }
    return (
        <div className="card px-3 mx-auto w-50">
            <div className="card-header text-center">
                <h3>Create New Question</h3> 
            </div>
            <div>
                <p>Complete the question: </p>
                <h4>Would you rather ...</h4>
                <form onSubmit={handleSubmitQuestion}
                        className='text-center'>
                    <input onInput={e => setOption1(e.target.value)} 
                            className='form-control m-2' type='text' placeholder='option one'/>
                        OR
                    <input onInput={e => setOption2(e.target.value)} 
                            className='form-control m-2' type='text' placeholder='option two'/>
                    <button className='btn btn-success m-2' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
