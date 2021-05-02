import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Would you rather?</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to='/' aria-current="page">Home</Link>
                        <Link className="nav-link" to='/new'>New Question</Link>
                        <Link className="nav-link" to='/leaderboard'>Leaderboard</Link>
                    </div>
                    <span>
                        Hello, {props.authedUser}
                    </span>
                </div>
            </div>
        </nav>
    )
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)