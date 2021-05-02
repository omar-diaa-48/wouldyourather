import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setAuthedUser } from '../actions/authedUser';
import logo from '../visual/logo.png';

const Login = (props) => {
    const handleUserChange =(e) => {
        e.preventDefault();
        const {dispatch, history} = props
        if(e.target.selectedIndex !== 0){
            dispatch(setAuthedUser(e.target.value))
            history.push('/')
        }
    }
    return(
        <form>
            <div className='w-75 mx-auto mt-5 text-center'>
                <span className='display-5'>Welcome to 'Would you rather?' app</span>
                <p>Please sign in to continue</p>
                <img className='logo'    
                     alt='logo'
                     src={logo}>
                </img>
                <div className="form-group mt-5">
                    <select className="form-select" onChange={handleUserChange}>
                        <option defaultValue>Choose Profile...</option>
                        {props.usersIds.map(id => 
                        <option key={id} 
                                value={id}>
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
        usersIds,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login))