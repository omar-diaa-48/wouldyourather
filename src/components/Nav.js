import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

const Nav = (props) => {
    const handleLogOut =(e) => {
        e.preventDefault()
        const {dispatch, history} = props
        dispatch(setAuthedUser(null))
        history.push('/login')
    }

    const handleChangeUser = (e, id) => {
        e.preventDefault()
        const {dispatch} = props
        dispatch(setAuthedUser(id))        
    }
    return(
        <nav className="navbar navbar-expand-md bg-light mx-3 mb-3">
            <div className="container-fluid col-10">
                <Link className='navbar-brand' to='/'>Would you rather?</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to='/'>Home</Link>
                        <Link className="nav-link" to='/add'>New Question</Link>
                        <Link className="nav-link" to='/leaderboard'>Leaderboard</Link>
                    </div> 
                </div>
            </div>
            {props.authedUser 
            ?
            <div className='btn-group col-2'>
                <button className='btn btn-light dropdown-toggle'
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">
                    Hello, {props.user.name}
                </button>
                <ul className="dropdown-menu">
                    {props.usersIds.map(id => 
                            <li key={id}>
                                <button className="dropdown-item" 
                                        onClick={(e) => handleChangeUser(e, id)}>Switch to {props.users[id].name}</button>
                            </li>
                        )}
                    <li><button className="dropdown-item" onClick={handleLogOut}>Log out</button></li>
                </ul>
                <img className='avatar' 
                    alt={`Avatar of ${props.user.name}`}
                    src={props.user.avatarURL}
                    /> 
            </div>
            :
            <div className='col-2'>
                <Link to='/login'>Login</Link>
            </div>}
        </nav>
    )
}

function mapStateToProps({authedUser, users}) {
    const user = users[authedUser]
    return {
        authedUser,
        user,
        usersIds : Object.keys(users).filter(uid => uid!==authedUser),
        users
    }
}

export default withRouter(connect(mapStateToProps)(Nav))