import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div className="list-item-left">
                <ul className="list-inline">
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
                    <li>img, Tyler</li>
                    <li>
                        <Link
                            className="nav-item"
                            to="/login">
                            Logout
                        </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;