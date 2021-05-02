import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const handleUserChange =(e) => {
        e.preventDefault();
        const {dispatch} = props
        if(e.target.selectedIndex !== 0){
            dispatch(setAuthedUser(e.target.value))
            // return <Redirect to={`/user/${e.target.value}`} />
        }
    }
    return(
        <form>
            <div className='w-75 mx-auto mt-5 text-center'>
                <span className='display-5'>Welcome to 'Would you rather?' app</span>
                <p>Please sign in to continue</p>
                <div className="form-group mt-5">
                    <select className="form-select" onChange={handleUserChange}>
                        <option defaultValue>Choose Profile...</option>
                        {props.usersIds.map(id => <option key={id} value={id}>
                            {id}
                        </option>)}        
                    </select>
                </div>
            </div>
        </form>
    )
}

function mapStateToProps({users}) {
    const usersIds = Object.keys(users)
    return{
        usersIds
    }
}

export default connect(mapStateToProps)(Login)