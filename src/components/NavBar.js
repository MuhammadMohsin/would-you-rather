import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logoImg from '../assets/would-u-r.png';
import '../css/navbar.css';

const NavBar = ({ authUser, handleLogout }) => {
    const isAuthenticated = authUser && authUser.isAuthenticated ? true : false;

    return (
        <div>
            {!isAuthenticated ?
                <div className="navBar-container">
                    <div className="list-item-left">
                        <ul className="list-inline">
                            <li>
                                <img src={logoImg} alt="logo" className="logo-img" />
                            </li>
                        </ul>
                    </div>
                </div>
                : ''}
            {isAuthenticated ? <div className="navBar-container">
                <div className="list-item-left">
                    <ul className="list-inline">
                        <li>
                            <img src={logoImg} alt="logo" className="logo-img" />
                        </li>
                        <li>
                            <Link
                                className="nav-item"
                                to="/">
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-item"
                                to="/add">
                                Add Question
                        </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-item"
                                to="/leaderboard">
                                Leader Board
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className="list-item-right">
                    <ul className="list-inline">
                        <li>
                            <img src={authUser.avatarURL} alt={authUser.name} className="avatar"/>
                             {authUser.name}
                        </li>
                        <li className="nav-item" onClick={handleLogout}>
                            Logout
                        </li>
                    </ul>
                </div>
            </div> : ''}
        </div>
    )
}
function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}
export default connect(mapStateToProps)(NavBar);