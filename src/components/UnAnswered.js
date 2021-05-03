import React from 'react';

const UnAnswered = (props) => {
    const handleSubmit =(e) => {
        e.preventDefault();
    }
    const {question} = props
    return(
        <div className="card mx-auto w-50">
            <div className="card-header">
                {question.author} asks: 
            </div>
            <form className='text-center'>
                <div className="card-body">
                    <h5 className="card-title">Would you rather ...</h5>
                    <div><input type='radio' value='optionOne' name='ans' />  {question.optionOne.text}</div>
                    <div><input type='radio' value='optionTwo' name='ans' />  {question.optionTwo.text}</div>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UnAnswered