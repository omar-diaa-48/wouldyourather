import React from 'react';
import Question from './Question';

const Questionsboard = (props) => {
    return(
        <ul>
            {props.questionsIds.map(id => 
                <li key={id}>
                    <Question id={id}/>
                </li>
            )}
        </ul>
    )
}

export default Questionsboard