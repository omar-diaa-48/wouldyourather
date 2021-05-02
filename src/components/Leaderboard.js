import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const Leaderboard = (props) => {
    return (
        <ul className='w-50 mx-auto'>
            {props.usersIds.map(id => (
                <li key={id}>
                    <UserProfile id={id} />
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({users}) {
    return{
        usersIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Leaderboard)