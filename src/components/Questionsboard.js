import React from 'react';
import Question from './Question';

const Questionsboard = (props) => {
    const {questions} = props
    return(
        <ul>
            {questions.map(q => 
                <li key={q.id}>
                    <Question id={q.id}/>
                </li>
            )}
        </ul>
    )
}

export default Questionsboard